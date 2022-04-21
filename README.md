<div id="top"></div>

<p align="center">
  <img width="80%"  src="https://github.com/HackYourFuture/class34-project-candc/blob/c9f4dd10d16e525b5415bbaafb1e8ab3ec3480c8/client/src/assets/images/readme-images/laptop-home.png">
</p>

<p align="center">
  <img width="20%" src="https://github.com/HackYourFuture/class34-project-candc/blob/c9f4dd10d16e525b5415bbaafb1e8ab3ec3480c8/client/src/assets/images/readme-images/mobile-home.png">
  <img width="20%"  src="https://github.com/HackYourFuture/class34-project-candc/blob/c9f4dd10d16e525b5415bbaafb1e8ab3ec3480c8/client/src/assets/images/readme-images/mobile-results.png">
  <img width="20%"  src="https://github.com/HackYourFuture/class34-project-candc/blob/c9f4dd10d16e525b5415bbaafb1e8ab3ec3480c8/client/src/assets/images/readme-images/mobile-myShop.png">
</p>



<details>
  <summary>TABLE OF CONTENTS</summary>
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
          <li><a href="#apis">API's used</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#improvements">Further Improvements</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<div id="about"></div>

# Class 34 final project

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors. A quick guide to what we built:

Everyday 1/3 of the food goes waste globally. To help to reduce the food waste and create a connection between stores and people in need, we -as a WeSave team- took our responsibility! 
This app is created to help shops to be able to sell their almost-expired food for a very reasonable prices and customers to locate them according to their postcodes. 

[Click here for the Demo version](https://we-save.herokuapp.com/)

<div id="setup"></div>

## 1. Setup
First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="code-structure"></div>

## 2. Code structure

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
|   |   └── Home
|   |   └── MyShop
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

<div id="client"></div>

### 2.1 Client structure

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

<div id="server"></div>

### 2.3 Server structure

- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="stac"></div>

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

<div id="configLib"></div>

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="clientLib"></div>

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)
- `Tailwind CSS` || To do the css design for all the components. See[docs](https://tailwindcss.com)
- `Framer`|| To apply animation to style. See [docs](https://www.framer.com/motion/)
- `geolib` || To do basic geospatial operations like distance calculation, conversion of lat&lon to postcodes, etc. See [docs](https://www.npmjs.com/package/geolib)

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="serverLib"></div>

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
- `geolib` || To do basic geospatial operations like distance calculation, conversion of lat&lon to postcodes, etc. See [docs](https://www.npmjs.com/package/geolib)
- `jsonwebtoken` || To create tokens to check the authorization. See [docs](https://www.npmjs.com/package/jsonwebtoken)
- `nodemailer`|| To send emails after confirmation of basket reservation and sending message through Contact Us page See [docs](https://nodemailer.com/about/)

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="apis"></div>

### 3.4 API's used

- `geoapify` || To deal with geospatial operations/ See [docs](https://www.geoapify.com)

<div id="improvements"></div>

## 4. Further Improvements

- To create a customer profile and shop profile pages to be able to display information of the user/shop.
- The functionality that allows customer/shop-owner to edit personal/shop-related info
- Adding "cart" functionality to be able to store one or multiple baskets in it before payment
- Adding payment functionality
- Being able to upload custom images for baskets, shop-covers, and shop-logo
- History of purchase/sell for customer/owner 

We, as a WeSave team, really would like to hear your amazing ideas about further improvements!! To do so, please reach us <a href="#contact"> here!</a>

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="contributing"></div>

## 5. Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="license"></div>

## 6. License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="contact"></div>

## 7. Contact

Email - main-wesave@outlook.com

WeSave contact: [WeSave Contact Form](https://hyf-c34-candc-stage.herokuapp.com/contact)

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: images/screenshot.png
[product-screenshot-m-1]: images/screenshot-m-1.png
[product-screenshot-m-2]: images/screenshot-m-2.png
