<div id="top"></div>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About The Project</a></li>
    <li><a href="#setup">Setup</a></li>
    <li>
      <a href="#code-structure">Code Structure</a>
      <ul>
        <li><a href="#client">Client Structure</a></li>
        <li><a href="#server">Server-Structure</a></li>
      </ul>
    </li>
    <li><a href="#stack">Stack / External Libraries</a>
        <ul>
        <li><a href="#configLib">Configuration Libraries</a></li>
        <li><a href="#clientLib">Client-side Libraries</a></li>
        <li><a href="#serverLib">Server-side Libraries</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<div id="about"></div>
# Class 34 final project

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors. A quick guide to what we built:

Everyday 1/3 of the food goes waste globally. To help to reduce the food waste and create a connection between stores and people in need, we -as a WeSave team- took our responsibility! 
This app is created to help shops to be able to sell their almost-expired food for a very reasonable prices and customers to locate them according to their postcodes. 

`[Click here for the Demo version](https://hyf-c34-candc-stage.herokuapp.com)`

## 1. Setup
<div id="setup"></div>
First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

<p align="right">(<a href="#top">back to top</a>)</p>

## 2. Code structure
<div id="code-structure"></div>
```
client
├── public
└── src
|   └── __tests__
|   └── __testUtils__
|   └── assets
|   └── components
|   |   └── __test__
|   |   └── Forms
|   |   └── layout
|   |   └── Search-Bar
|   |
|   └── context
|   └── css
|   └── hooks
|   └── pages
|   |   └── AboutUs
|   |   └── Contact
|   |   └── CreateBasket
|   |   └── Home
|   |   └── resetpassword
|   |   └── Results
|   |
|   └── util
|   └── index.jsx
|
cypress
|   └── fixtures
|   └── integration
|   └── plugins
|   └── support
server
|
└── src
    └── __testUtils__
    └── controllers
    └── db
    └── Middlewares
    └── models
    └── routes
    └── util
    index.js
```

<p align="right">(<a href="#top">back to top</a>)</p>
### 2.1 Client structure
<div id="client"></div>
- `public` || public facing client code
- `__tests__` || any `jest` tests for specific components will be in a `__tests__` folder on the same level
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `pages/components` || components used specifically on those pages
- `util` || any utility functions that can be used anywhere on the client side
- `index.jsx` || the start point of the client

<p align="right">(<a href="#top">back to top</a>)</p>

### 2.2 Cypress structure

- `fixtures` || any data/files that `cypress` needs can be placed here
- `integration` || all of our tests are in here, separated in folders based on the pages in our app
- `plugins` || any plugins for our `cypress` configuration can be placed here
- `support` || custom commands and other support files for `cypress` can be placed here

<p align="right">(<a href="#top">back to top</a>)</p>

### 2.3 Server structure
<div id="server"></div>
- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

<p align="right">(<a href="#top">back to top</a>)</p>

## 3. Stack / external libraries
<div id="stac"></div>
The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries
<div id="configLib"></div>
- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

<p align="right">(<a href="#top">back to top</a>)</p>

### 3.2 Client-side libraries
<div id="clientLib"></div>
- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)

<p align="right">(<a href="#top">back to top</a>)</p>

### 3.3 Server-side libraries
<div id="serverLib"></div>
- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## 4. Contributing
<div id="contributing"></div>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## 5. License
<div id="license"></div>
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## 6. Contact
<div id="contact"></div>
WeSave Email - main-wesave@outlook.com

Project Link: [WeSave Contact Form](https://hyf-c34-candc-stage.herokuapp.com/contact)

<p align="right">(<a href="#top">back to top</a>)</p>

