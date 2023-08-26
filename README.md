# Digital Library

An application for exploring and discovering online books.

## Description

This digital library application is built with Astro and showcases a variety of programming books recommended by @midudev. You can browse through a list of books and access more information about each one.

## Screenshots

https://github.com/nicocarobene/bibliotecaDigital/blob/main/src/assets/home.png
https://github.com/nicocarobene/bibliotecaDigital/blob/main/src/assets/book.png

## Features

- Explore a collection of online books.
- View details of each book, such as title, author, image, and opinion.

## Installation and Usage

1. Clone this repository to your local machine.
2. Install dependencies using the command: `npm install`.
3. Run the application locally with the command: `npm run start`.
4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Technologies Used

- Astro
- HTML
- CSS
- JavaScript

## Project Structure

Inside your Astro project, you'll find the following folders and files:


```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Book.astro
|   |   └── ListOfBook.astro
|   |   └── Title.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── mock/
│   │   └── mock.json
│   └── pages/
│       └── index.astro
│       └── [id].astro
│       └── 404.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contribution

Contributions are welcome! If you want to improve this application, follow these steps:

1. Fork this repository.
2. Create a branch for your feature: `git checkout -b my-feature`.
3. Make your changes and commit: `git commit -m 'Add my feature'`.
4. Push your branch: `git push origin my-feature`.
5. Open a Pull Request on GitHub.

---
Made with ❤️ by Nicodev - https://github.com/nicocarobene
