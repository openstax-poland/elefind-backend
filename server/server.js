require('./config/config')
const BOOKS = require('./config/books').books

const express = require('express')
const bodyParser = require('body-parser')
const rateLimit = require("express-rate-limit");
const puppeteer = require('puppeteer')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const elementsLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // limit each IP to 3 requests per windowMs
    message: 'One user is limited to 3 requests every 5 minutes.',
})

var app = express()
const port = process.env.PORT

app.use('/books', express.static('books'))
app.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://katalysteducation.pl')
	res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Cache-Control')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false)

    // Pass to next layer of middleware
    next()
})

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
// GET ROUTES
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

app.get('/', (req, res) => {
    console.log('GET /')
    try {
        res.send({status: 'active'})
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/books', (req, res) => {
    console.log('GET /books')
    try {
        res.send(BOOKS)
    } catch (e) {
        res.status(500).send(e)
    }
})

const PAGE_LOAD_TIME = 10 * 60 * 1000 // Wait 10 minutes before timing out (large books take a long time to open)

// Status codes
const STATUS_CODE = {
  OK: 0,
  ERROR: 111
}

const getResults = async (selector, url) => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox']
        })
        const page = await browser.newPage()
        
        page.on('pageerror', msgText => {
        console.log('browser-ERROR', msgText)
        return STATUS_CODE.ERROR
        })

        console.log(`Opening "${url}"`)
        await page.goto(url, {
        timeout: PAGE_LOAD_TIME
        })
        console.log(`Opened "${url}"`)

        const results = await page.evaluate((selector) => {
        const pages = document.querySelectorAll('[data-type="composite-page"], [data-type="page"]')
        console.log(`Found ${Object.entries(pages).length} pages.`)

        const results = []
        Object.entries(pages).forEach(el => {
            const [id, page] = el
            let title = page.querySelector('*:not([data-type="metadata"]) > [data-type="document-title"]')
            if (title) {
                if (!title.querySelector('.os-number')) {
                    const chapterNumber = title.parentNode.parentNode.querySelector('h1[data-type="document-title"] .os-number')
                    const chapterTitle = title.parentNode.parentNode.querySelector('h1[data-type="document-title"]').innerText
                    if (chapterNumber) {
                        title = chapterNumber.innerText + ' ' + title.innerText
                    } else if (chapterTitle && chapterTitle !== 'Preface') {
                        title = 'Chapter: ' + chapterTitle + ' Module: ' + title.innerText
                    } else {
                        title = title.innerText
                    }
                } else {
                    title = title.innerText
                }
            }

            const isSelectorInThisPage = page.querySelectorAll(selector)

            if (isSelectorInThisPage.length > 0) {
            results.push({section_name: title, link: null, instances: isSelectorInThisPage.length})
            }
        })

        return results
        }, selector)

        await browser.close()

        console.log(`Found ${results.length} pages with given selector (${selector}).`)

        return results
    } catch (e) {
        console.log(e)
        throw new Error(`Something went wrong. Details: ${e}`)
    }
}

const isSelectorValid = async (selector) => {
  if (!selector) {
    console.log(`You have to provide selector.`)
    return false
  }
  
  try {
    const dom = await new JSDOM()
    await dom.window.document.querySelector(selector)
    return true
  } catch(e) {
    console.log(`Provided selector: "${selector}" is not valid.\nDetails: ${e}`)
    return false
  }
}

app.get('/elements', elementsLimiter, async (req, res) => {
    req.connection.setTimeout(7 * 60 * 1000) // 7 minutes - Opening books may take a lot of time

    console.log('GET /elements', req.query)
    try {
        const bookName = req.query.bookName.replace('_', ' ')
        const selector = req.query.element

        let xhtml = ''

        BOOKS.some(book => {
            if (book.bookName === bookName) {
                xhtml = book.fileName
                return true
            }
        })

        if (!xhtml) {
            console.log(`Couldn't find any book with name: ${bookName}. Maybe this book is not yet avaible for searching custom elements.`)
            throw new Error(`Couldn't find any book with name: ${bookName}. Maybe this book is not yet avaible for searching custom elements.`)
        }

        let results = []

        const pathToFile = process.env.PATH_TO_BOOKS + xhtml
        if (await isSelectorValid(selector)) {
            console.log(`Starting searching for "${selector}" inside "${xhtml}"`)

            results = await getResults(selector, pathToFile)
        } else {
            throw new Error(`Provided selector: "${selector}" is not valid.`)
        }

        res.send({Results: results})
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = {app}