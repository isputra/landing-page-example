# Portfolio Landing Page

This project is a portfolio landing page developed using Vite, React.js, TypeScript, and Tailwind CSS. It showcases my abilities and knowledge as a developer.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This portfolio landing page is designed to highlight my skills and projects as a developer. It is built with modern web technologies to ensure a fast and responsive user experience.

## Features

- Responsive design
- Fast loading times with Vite
- Type-safe code with TypeScript
- Modern React.js features
- Styled with Tailwind CSS

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Setup and Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/isputra/landing-page-example.git
   cd landing-page-example
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

After starting the development server, you can view the landing page by navigating to `http://localhost:5173` in your web browser.

You can also view the live version of this project on GitHub Pages: [https://isputra.github.io/landing-page-example](https://isputra.github.io/landing-page-example).

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default {
    // other rules...
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: [
        "./tsconfig.json",
        "./tsconfig.node.json",
        "./tsconfig.app.json",
      ],
      tsconfigRootDir: __dirname,
    },
  };
  ```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
