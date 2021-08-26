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
    demo: 'https://sav.nimeji.com',
    github: 'https://github.com/nimeji/sorting-algorithm-visualizer'
  },
  {
    content: 'content/messenger.md',
    images: ['content/messenger_1.png', 'content/messenger_2.png', 'content/messenger_3.png', 'content/messenger_4.png'],
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
    images: ['content/portfolio.png'],
  },
]

export default websites;