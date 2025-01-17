# What this project about

✅ React Project setup from scratch.

✅ Deep dive into JSX and other core React features.

✅ Understanding Tailwind CSS basics and setting it up.

✅ Deep Dive into all the important React Hooks.

✅ Exploring the React Routing World.

✅ Playing with Live API data, and handling it effectively.

✅ Functional Vs Class Based Components

✅ A Deep dive into Redux && Redux Toolkit.

✅ Testing our App using Jest



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

c Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Two types of Export/Import

### Default Export/Import

export default component-name;
import component-name from "path";

### Named Export/Import

- export const component-name;
- import { component-name } from "path";

### Super(props)

    /** A super constructor is a special constructor in the class hierarchy of object-oriented programming languages.

- It refers to the constructor of the parent class that is being extended in the current class.
- The purpose of using the super constructor with a props argument is to inherit the properties of the parent class
- and also pass in additional properties as arguments to the child class. \*/

### Redux Toolkit

- install npm i @reduxjs/toolkit and react-redux
- build our own store
- connect our store to our app
- we'll create a Cart slice
- dispatch an action
- selector

### Types of Testing [ developer]

- Unit Testing
- Integration Testing
- End to End Testing - E2E Testing

### Setting up Testing in our app

- Install react testing librabry => npm install -D @testing-library/react
- Install jest => npm install -D jest
- Install Babel dependdancies => npm install --save-dev babel-jest @babel/core @babel/preset-env
- and create the babel.config.js file inside the src
- Configure babel  add => module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
- Configure parcel config file to disable default babel tranpilation
- jest configuration 
- jest - npx jest --init
- Install jsdom library 
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config


- @babel/preset-react  is basically heping our testing library to covert our jsx code to HTML so that it can be read properly, thats why we use the *preset*

- Install npm i -D @testing-library/jest-dom  [ this is where - *toBeInTheDocument* is coming from]

