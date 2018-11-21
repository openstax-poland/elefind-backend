// Those books names should match with https://content-finder.herokuapp.com/BooksAvaliable
// This enpoint is returning books names with _ instead of space but this is fixed in GET route

const books = [
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
    bookName: 'Algonquin College MAT0032',
    fileName: 'algonquin-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Applied Finite Mathematics',
    fileName: 'applied-finite-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'AP Macroeconomics 2e',
    fileName: 'principles-macro2e-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'AP Physics',
    fileName: 'college-physics-ap-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Astronomy',
    fileName: 'astronomy-baked.xhtml',
    baked: true,
  },
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
    bookName: 'Chemistry',
    fileName: 'chemistry-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Collaborative Statistics Modified by T Short',
    fileName: 'collaborative-statistics-tshort-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Collaborative Statistics with edits Teegarden',
    fileName: 'collaborative-statistics-teegarden-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'College Algebra',
    fileName: 'college-algebra-raw.xhtml',
    baked: false,
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
    bookName: 'Elementary Algebra',
    fileName: 'elementary-algebra-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'English Home Language Grade 5',
    fileName: 'english-home-language-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Human Anatomy',
    fileName: 'human-anatomy-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'KSU TM College Physics I',
    fileName: 'ksu-tm-college-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Microbiology',
    fileName: 'microbiology-raw.xhtml',
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
    bookName: 'Prealgebra',
    fileName: 'prealgebra-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Principles of Economics 2e',
    fileName: 'principles-economics2e-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Project Management',
    fileName: 'project-managment-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Psychology',
    fileName: 'psychology-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Polish University Physics Volume 1',
    fileName: 'katalyst-physics-baked.xhtml',
    baked: true,
  },
  {
    bookName: 'Rationality',
    fileName: 'rationality-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Sociology 2e',
    fileName: 'intro-sociology2e-raw.xhtml',
    baked: false,
  },
  {
    bookName: 'Understanding Basic Music Theory',
    fileName: 'basic-music-theory-raw.xhtml',
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