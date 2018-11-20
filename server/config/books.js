// Those books names should match with https://content-finder.herokuapp.com/BooksAvaliable
// This enpoint is returning books names with _ instead of space but this is fixed in GET route

const books = [
  {
    bookName: 'Biology',
    fileName: 'biology-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Biology for AP Courses',
    fileName: 'apbiology-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Biology 2e',
    fileName: 'biology2e-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Prealgebra',
    fileName: 'prealgebra-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Elementary Algebra',
    fileName: 'elementary-algebra-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Intermediate Algebra',
    fileName: 'intro-algebra-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Introductory Statistics',
    fileName: 'intro-stats-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Chemistry',
    fileName: 'chemistry-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'American Government',
    fileName: 'american-gov-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Anatomy & Physiology',
    fileName: 'anatomy-physiology-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Astronomy',
    fileName: 'astronomy-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Business Ethics',
    fileName: 'business-ethics-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Calculus Volume 1',
    fileName: 'calculus-vol1-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'College Algebra',
    fileName: 'college-algebra-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'AP Physics',
    fileName: 'college-physics-ap-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'College Physics',
    fileName: 'college-physics-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Concepts of Biology',
    fileName: 'concepts-biology-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Introduction to Business',
    fileName: 'intro-business-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Introductory Business Statistics',
    fileName: 'intro-business-stats-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Sociology 2e',
    fileName: 'intro-sociology2e-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Polish University Physics Volume 1',
    fileName: 'katalyst-physics-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Microbiology',
    fileName: 'microbiology-raw.xhtml',
    baked: true,
  },
  {
    bookName: 'Principles of Economics 2e',
    fileName: 'principles-economics2e-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'AP Macroeconomics 2e',
    fileName: 'principles-macro2e-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Psychology',
    fileName: 'psychology-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'University Physics Volume 1',
    fileName: 'u-physics-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'US History',
    fileName: 'us-history-raw.xhtml',
    baked: false,
  },
]

module.exports = {
  books
}