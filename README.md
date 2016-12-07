# ReactStarterKit
A React Starter Kit Scaffold that uses webpack configurations without gulp


##### Instructions

### Development
1. Run `npm install` to install required node modules
2. Run `npm start` to run application on localhost:8080

### Production
1. Comment out the `webpack-hot-middleware/client` line from the webpack.config.
2. Run `npm run build` to build the bundle.js file which is placed in the `dist` folder.
3. Run `npm run deploy` to run the application forever in a production environment.

[Here][1] is a link to the pm2 documentation for managing the pm2 process that is created from step 3.

[1]: https://github.com/Unitech/pm2

### Style Loaders

- This project is using the loaders (sass, css, and style loaders) to control style.
In order to style pages you can require a sass file in the component and it will
receive the styling of that particular sass file. An example of this can be seen in the main.jsx
react component.


### Type Definitions

- After installing a package, remember to also install the types definition file for that node package.
e.g.
1. `npm install --save-dev react`
2. Then to install the types definition file would be: `npm install --save-dev @types/react`
