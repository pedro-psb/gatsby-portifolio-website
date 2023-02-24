This a portifolio website to showcase my projects and writtings. It's been made using GatsbyJs (which uses React), `gatsby-blog-theme` official plugin and Mantine component library.

## Project Decisions

### GatsbyJS
I chose to use Gatsby because I was looking for an SSG solution, so I could have good SEO and routing without much hassle and be able to publish in a headless service, like GitHub pages and Netlify. I also wanted to use React, and besides using it also provides a rich ecosystem of plugins for common web dev tasks.

### `gatsby-blog-theme`

In the gatsby ecosystem, I utilized `gatsby-blog-theme` to reuse common blog infrastructure. The default presentation of the plugin treated the blog as the main page (as if it was the only page of the site). To overcome this, I had to wrap the page in the common Layout component. Because of the way theme plugins work in gatsby, I had to do some non-trivial overrides and tweaks in the theme to accomplish this.

### Mantine

For the design, I didn't want to build it all from the ground, because my professional focus is not styling, design and CSS, so I decided on Mantine. It provided good solutions for theming and tweaking components and also had a good collection of UI elements. There were other popular solutions, like Chakra UI and Materials, but I liked some of the hooks and the samples in their UI library, so I decided to give it a shot.

## Install

Some dependencies were deprecated because of the use of `gatsby-blod-theme` starter. As a workaround using `legacy-peer-deps` works, but I may re-structure the code to make the blog infrastructure without the need for those broken dependencies.

```bash
npm install --legacy-peer-deps
```

## npm scripts

- `npm start` – start project locally
- `npm run build` – export project for production
- `npm run serve` – serve production build locally
- `npm run clean` – clean gatsby cache data
