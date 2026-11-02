# Ivan Clyd Suello | Portfolio

A personal portfolio built with **React** and **Vite**, designed as a dark sketchbook: black pages, paper-textured drawings, and slow, quiet animations.

**Live site:** _coming soon_

## About

I'm a 4th-year BS Computer Science student looking for a web development OJT. This site shows my ink drawings, projects, and certificates.

## Sections

- **Hero:** introduction, with a drawing that tilts as the mouse moves
- **About:** a short introduction
- **Skills:** the tools I use and the ones I'm learning
- **Projects:** web systems I've built, with links to their code
- **Certificates:** courses and recognitions, with a full-size viewer
- **Sketchbook:** a gallery of my drawings, with a full-size viewer
- **Contact:** how to reach me

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS, with no UI libraries
- Oxlint for code checking

## Run it locally

You need [Node.js](https://nodejs.org/) (LTS version) installed.

```bash
git clone https://github.com/kuraido02/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Then open the link Vite prints, usually `http://localhost:5173`.

To make a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
my-portfolio/
├── public/
│   ├── art/             # drawings for the sketchbook
│   └── certificates/    # certificate images
└── src/
    ├── components/      # Navbar, Hero, About, Skills, Projects,
    │                    # Certificates, Gallery, Contact, Reveal
    ├── data/            # certificates.js, project.js
    ├── App.jsx
    ├── main.jsx
    └── index.css        # all styles
```

## Updating content

**Add a certificate:** save the image in `public/certificates/`, then copy a block in `src/data/certificates.js` and change its details.

**Add a project:** copy a block in `src/data/project.js` and change its details.

**Add a drawing:** save the image in `public/art/`, then add an entry to the `artworks` list in `src/components/Gallery.jsx`.

## Design notes

- Colors are black, off-white, and grays. There are no bright colors.
- It's responsive, with a mobile menu, tablet layouts, and comfortable tap targets.
- Animations respect the "reduce motion" setting on a device.

## Copyright

All drawings and artwork on this site are my original work. All rights reserved. Please don't reuse them without my permission.

## Contact

GitHub: [@kuraido02](https://github.com/kuraido02)