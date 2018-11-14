// Those books names should match with https://content-finder.herokuapp.com/BooksAvaliable
// This enpoint is returning books names with _ instead of space but this is fixed in GET route

const books = [
  {
    bookName: 'Biology',
    fileName: 'biology-baked.xhtml'
  },
  {
    bookName: 'Biology for AP',
    fileName: 'apbiology-baked.xhtml'
  },
  {
    bookName: 'biology2e',
    fileName: 'biology2e-baked.xhtml'
  },
  {
    bookName: 'Biology 2e',
    fileName: 'biology2e-baked.xhtml'
  },
  {
    bookName: 'Prealgebra',
    fileName: 'prealgebra-baked.xhtml'
  },
  {
    bookName: 'Elementary Algebra',
    fileName: 'elementary-algebra-baked.xhtml'
  },
  {
    bookName: 'Intermediate Algebra',
    fileName: 'intro-algebra-baked.xhtml'
  },
  {
    bookName: 'Introductory Statistics',
    fileName: 'statistics-baked.xhtml'
  },
  {
    bookName: 'Chemistry',
    fileName: 'chemistry-baked.xhtml'
  },
]

module.exports = {
  books
}