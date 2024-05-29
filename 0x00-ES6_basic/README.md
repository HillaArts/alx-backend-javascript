# alx-backend-javascript_basics

This repository contains various JavaScript projects focusing on ES6 features and backend development using Node.js. Each directory within the repository represents a different project or set of exercises.

## Table of Contents

- [General](#general)
- [Setup](#setup)
- [Project Structure](#project-structure)
- Usage
- (Example)(#example)
- Author - Hilla

## General

- All files will be executed using Node.js 12.11.x
- The allowed editor is Visual Studio Code
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Code should use the `.js` extension
- Code will be tested using the Jest Testing Framework
- Code will be analyzed using the linter ESLint along with specific rules provided
- All functions must be exported

## Setup

### Install Node.js 12.11.x

1. Run the following commands in your home directory:

    ```sh
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. Verify the installation:

    ```sh
    nodejs -v
    # v12.11.1
    npm -v
    # 6.11.3
    ```

### Install Jest, Babel, and ESLint

1. Ensure you have a `package.json` file in your project directory and run:

    ```sh
    npm install
    ```

2. Your `package.json` should contain:

    ```json
    {
      "name": "alx-backend-javascript",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "jest",
        "dev": "node"
      },
      "dependencies": {},
      "devDependencies": {
        "@babel/cli": "^7.15.4",
        "@babel/core": "^7.15.5",
        "@babel/preset-env": "^7.15.6",
        "eslint": "^7.32.0",
        "jest": "^27.2.5"
      },
      "babel": {
        "presets": [
          "@babel/preset-env"
        ]
      },
      "eslintConfig": {
        "env": {
          "browser": true,
          "es6": true,
          "node": true,
          "jest": true
        },
        "extends": "eslint:recommended",
        "globals": {
          "Atomics": "readonly",
          "SharedArrayBuffer": "readonly"
        },
        "parserOptions": {
          "ecmaVersion": 2021,
          "sourceType": "module"
        },
        "rules": {
          "semi": ["error", "always"],
          "quotes": ["error", "single"]
        }
      },
      "author": "",
      "license": "ISC"
    }
    ```

3. Create the necessary configuration files:

    - `babel.config.js`:

      ```js
      module.exports = {
        presets: ['@babel/preset-env'],
      };
      ```

    - `.eslintrc.js`:

      ```js
      module.exports = {
        env: {
          browser: true,
          es6: true,
          node: true,
          jest: true,
        },
        extends: 'eslint:recommended',
        globals: {
          Atomics: 'readonly',
          SharedArrayBuffer: 'readonly',
        },
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        rules: {
          semi: ['error', 'always'],
          quotes: ['error', 'single'],
        },
      };
      ```

## Project Structure

```plaintext
alx-backend-javascript/
├── 0x00-ES6_basic/
│   ├── 0-constants.js
│   ├── 1-block-scoped.js
│   ├── 2-arrow.js
│   ├── 2-main.js
│   └── ...
├── babel.config.js
├── package.json
├── .eslintrc.js
└── README.md
