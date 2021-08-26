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
    images: ['content/sav.jpg'],
    demo: 'https://sav.nimeji.com',
    github: 'https://github.com/nimeji/sorting-algorithm-visualizer'
  },
  {
    content: 'content/messenger.md',
    images: ['content/messenger_1.jpg', 'content/messenger_2.jpg', 'content/messenger_3.jpg', 'content/messenger_4.jpg'],
    demo: 'https://messenger-demo-frontend.nimeji.com',
    github: 'https://github.com/nimeji/messenger-demo-frontend',
  },
  {
    content: 'content/pprl-demos.md',
    images: ['content/pprl-demos_1.png', 'content/pprl-demos_2.png'],
    demo: 'https://pprl-demos-frontend.nimeji.com',
    github: 'https://github.com/nimeji/pprl-demos-frontend',
  },
  {
    content: 'content/portfolio.md',
    github: 'https://github.com/nimeji/nimeji.github.io',
    images: ['content/portfolio.jpg'],
  },
]

export default websites;