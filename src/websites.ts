type Website = {
  content?: string;
  details?: string;
  images?: string[];
  demo?: string;
  github?: string;
}

const websites: Website[] = [
  {
    content: 'content/sav.md',
    images: ['content/sav.png'],
    demo: 'https://nimeji.github.io/sorting-algorithm-visualizer/',
    github: 'https://github.com/nimeji/sorting-algorithm-visualizer'
  },
  {
    content: 'content/portfolio.md',
    github: 'https://github.com/nimeji/nimeji.github.io',
    images: ['500x500.jpg'],
  },
  {
    content: 'content/messenger.md',
    images: ['content/messenger_1.png', 'content/messenger_2.png', 'content/messenger_3.png', 'content/messenger_4.png'],
    demo: 'https://nimeji.github.io/messenger-demo-frontend/',
    github: 'https://github.com/nimeji/messenger-demo-frontend',
  },
  {
    content: 'content/test.md',
    images: ['500x500.jpg'],
  },
  {
    content: 'content/test.md',
    images: ['500x500.jpg'],
  }
]

export default websites;