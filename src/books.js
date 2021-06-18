const books = [
  {
    id: 1,
    author: "Jordan Peterson",
    title: "12 Rules for Life: An Antidote to Chaos",
    slug: "12-rules-for-life:-an-antidote-to-chaos",
    genre: "Self-Help",
    available: "true",
    borrowedBy: [3],
    image:
      "https://dynamic.indigoimages.ca/books/0345816021.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
  },
  {
    id: 2,
    author: "Blake Crouch",
    title: "Dark Matter",
    slug: "dark-matter",
    genre: "Sci-Fi, Thriller",
    available: "false",
    borrowedBy: [3],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4472/9781447297581.jpg",
  },
  {
    id: 3,
    author: "Robin Sloan",
    title: "Mr. Penumbra's 24-Hour Bookstore",
    slug: "mr.-penumbra's-24-hour-bookstore",
    genre: "Suspense , Fantasy",
    available: "false",
    borrowedBy: [1, 3, 5, 1],
    image:
      "https://d2wzqffx6hjwip.cloudfront.net/spree/images/attachments/000/024/177/original/9781922079169.jpg?1502236605",
  },
  {
    id: 4,
    author: "Paul Kalanithi",
    title: "When Breath Becomes Air",
    slug: "when-breath-becomes-air",
    genre: "Biography",
    available: "true",
    borrowedBy: [2, 5],
    image: "https://images-na.ssl-images-amazon.com/images/I/91iZ2ZQduBL.jpg",
  },
  {
    id: 5,
    author: "Eric Ries",
    title: "The Lean Startup",
    slug: "the-lean-startup",
    genre: "Business, Entrepreneurship",
    available: "false",
    borrowedBy: [4, 1, 2],
    image:
      "https://www.vision-preneur.nl/wp-content/uploads/2021/02/81jgCiNJPUL.jpg",
  },
  {
    id: 6,
    author: "George R.R. Martin",
    title: "A Storm of Swords",
    slug: "a-storm-of-swords",
    genre: "Fantasy",
    available: "true",
    borrowedBy: [],
    image:
      "https://awoiaf.westeros.org/images/thumb/2/24/AStormOfSwords.jpg/200px-AStormOfSwords.jpg",
  },
  {
    id: 7,
    author: "Leigh Bardugo",
    title: "Six of Crows",
    slug: "six-of-crows",
    genre: "Fantasy",
    available: "false",
    borrowedBy: [4, 3, 2, 1, 5],
    image: "https://m.media-amazon.com/images/I/51qM6b02EUL.jpg",
  },
  {
    id: 8,
    author: "Agatha Christie",
    title: "Curtain: Poirot's Last Case",
    slug: "curtain:-poirot's-last-case",
    genre: "Crime , Mystery",
    available: "false",
    borrowedBy: [3, 5],
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41INk7S2bSL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: 9,
    author: "Elif Shafak",
    title: "The Forty Rules of Love",
    slug: "the-forty-rules-of-love",
    genre: "Fiction",
    available: "false",
    borrowedBy: [5, 1],
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
  },
  {
    id: 10,
    author: "Leigh Bardugo",
    title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
    slug: "the-language-of-thorns:-midnight-tales-and-dangerous-magic",
    genre: "Fantasy",
    available: "false",
    borrowedBy: [5],
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Jy6-ypOrL._SX334_BO1,204,203,200_.jpg",
  },
];

export default books;
