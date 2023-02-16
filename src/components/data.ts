// Hero description
export const sectionText = {
  hero: 'I work mostly with python/typescript building REST APIs, integrations, UIs and small utilities',
  projects: 'There are my personal projects and studies. Feedbacks are welcome',
  blogging:
    'I like writting sometimes to consolidate knowledge and to share tips and tricks that helped me somehow',
  aboutMe: 'Some facts about me',
};

// About me FAQ
const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';
export const aboutMeList = [
  {
    id: 1,
    question: 'How did you started programming?',
    answer:
      "When I was a teenager I liked playing games in Kongregate (a web gaming platform) and eventually I started programming my own simple games in ActionScript. It was just for fun and I've dropped programming for some years before I decided to become a developer. In the mean time I've played a little with python scripts and even learned some Scheme/lisp (because of Lilypond), but just for hobby.",
  },
  {
    id: 2,
    question: 'What is your favorite stack?',
    answer:
      "Currently (2023), my favorite webdev stack is FastAPI for the backend and GatsbyJS + MantineUI (component library) for the frontend. Some people say I should go for JS backend too, and I might go if needed, but I'm sticking to python to explore the mature data science and machine learning ecosystem",
  },
  {
    id: 3,
    question: 'Which tech areas interest you the most, currently?',
    answer:
      "I'm interested in machine learning, in special. Now that I've enrolled in a Computer Science course, I feel more confident in giving it a try, as I'm having more solid foundations of linear algebra, statistics and such",
  },
  {
    id: 4,
    question: 'Have any hobbies?',
    answer:
      'I used to be a musician, so yeah, music is a hobby now. I used to play mainly percussion and drums, but today I prefer playing guitar and keyboard.',
  },
  {
    id: 5,
    question: 'Space or tabs?',
    answer:
      'Depends. I already had some trouble using spaces with bash, but for python spaces are the standard, according to some PEP document',
  },
];

// Project list
export const projectsList = [
  {
    title: 'Tic-tac-toe',
    description:
      'A tic-tac-toe project micro-project to incrementally practice React/TS development',
    linkSource: 'https://github.com/pedro-psb/react--tic-tac-toe',
    linkLive: 'https://pedro-psb.github.io/react--tic-tac-toe/',
    rating: 'React study',
    image: 'https://4.imimg.com/data4/QC/UH/MY-4579631/bi-arc-pattern-basil-500x500.jpg',
  },
  {
    title: 'Personal Portifolio Website',
    description: 'SSG Portifolio Website to post my personal projects, studies and blog posts.',
    linkSource: 'https://github.com/pedro-psb/gatsby-portifolio-website',
    linkLive: '',
    rating: 'Web design',
    image:
      'https://media.istockphoto.com/vectors/seamless-brown-geometric-pattern-vector-id828470050?k=6&m=828470050&s=170667a&w=0&h=pZI-el2cMrp_4qB2jGgC629zRuOBLtD1wZqaxlwoplw=',
  },
  {
    title: 'Point of Sale REST API backend',
    description:
      'A REST API backend for a point of sale application using FastAPI and OpenAPI standards.',
    linkSource: 'https://github.com/pedro-psb',
    linkLive: '',
    rating: 'Backend',
    image:
      'https://media.istockphoto.com/vectors/geometric-pattern-backgrounds-vector-id1008220392?k=6&m=1008220392&s=170667a&w=0&h=5SDJMWH1UHxOUx1Cl0M64lNbVrNESMWTtil0YhdP7w8=',
  },
];
