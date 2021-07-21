# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Debugging node JS scripts

1. install https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en
2. visit chrome://inspect/
3. run your `node ....` script as `node --inspect-brk ...`
4. click the "inspect" link that shows up in your chrome tab
5. use command+P to target your module
6. place breakpoints
7. continue to your breakpoints with cmd+\


## Using Bootstrap classes vs. react-bootstrap

Since bootstrap CSS is included as a global stylesheet, we have the option to use bootstrap CSS classes OR using react-bootstrap components.

We don't really have enough experience with react-bootstrap to know when to use it vs. just using classes. If you can get away only using classes, do that.

1. If you're using pure CSS, simple features or components  (e.g. the grid system, margin utils, alerts, buttons), stick with CSS classes.
2. If a bootstrap component is not pure CSS, such as a modal, use react-bootstrap. 
3. If you need to customize the styles for an interaction heavy feature, use react-bootstrap and [explore options in the docs](https://react-bootstrap.github.io/getting-started/theming/)