type Website = {
  summary?: string;
  details?: string;
  img?: string;
  demoLink?: string;
  ghLink?: string;
}

const websites: Website[] = [
  {
    summary: 'content/sav-summary.md',
    details: 'content/sav-details.md',
    img: 'content/sav.png',
    demoLink: 'https://nimeji.github.io/sorting-algorithm-visualizer/',
    ghLink: 'https://github.com/nimeji/sorting-algorithm-visualizer'
  },
  {
    summary: 'content/test.md',
    img: '500x500.jpg',
  },
  {
    summary: 'content/test.md',
    img: '500x500.jpg',
  },
  {
    summary: 'content/test.md',
    img: '500x500.jpg',
  },
  {
    summary: 'content/test.md',
    img: '500x500.jpg',
  }
]

export default websites;