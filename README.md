# Metpack

### A Meteor/Webpack/React Ecosystem

Version: **0.1.0** - Status: **Alpha**

This project setup enables the use of Webpack to build React and supporting bundles for client, shared & server javascript for a Meteor application. In development mode it enables the Webpack Dev Server and proxies relevant requests to it automatically, allowing Hot Code Reloading (and by extension React Hot Loader).

The use of Webpack allows the full NPM ecosystem of packages to be used in a Meteor app, providing support for ES6 & Common JS Modules, Babel JS(X) ES6+ transpiling and all the other benefits provided by both NPM and Webpack.

### Install

1. Clone/copy the project to where you want it
2. `cd` to the project root
3. `npm install`
4. `./metpack`
5. Open `http://localhost:3000`

### Usage

##### The `./metpack` Command-line Script

1. `./metpack` - starts the webpack development servers, builds & watches app entry points and starts the Meteor app

2. `./metpack production` or `./metpack prod` - build webpack bundles (no watching or dev server) and start the Meteor app

3. `./metpack <command>` - works exactly as the normal `meteor` command, just forwards commands to hte Meteor app in `meteor/` directory

##### NPM Commands (not usually needed, just use `./metpack`)

1. `npm start` - Start the webpack-dev-server, build & start watching the app entry-points

1. `npm run build` - compile the app entry-points into the `meteor/build` directory

### Architecture

The Meteor app in the `meteor/` directory is just a standard app, nothing special. All that the surrounding files and folders really do is take the three main app entry-points - `lib/main.js`, `server/main.js` & `client/main.js` - and bundles them into the Meteor app under `meteor/build/` directory. When run in development mode, the package `firegoby:metpack` in the `meteor/packages` directory automatically proxies requests for `build/client/bundle.js` on to webpack-dev-server and auto-injects the necessary `bundle.js` file into the pages' `<head>`

### Important Caveats

1. If the client bundle `meteor/build/client/bundle.js` is present when the webpack-dev-server is running, it will **override** the request to dev-server, therefore it needs to be removed before starting the dev-server. Both the `./metpack` command and the `npm start` command do this automatically so you shouldn't need to concern with it, however it's important to know in case you run into trouble somehow.

2. React packages from the Meteor package system are unlikely to work in conjunction with this setup - that's because they will bundle their own copy of React. The two versions of React are incompatible, if we use Meteor's version then we can't get React Hot Loader to work, if we use NPM's React we can't get Meteor's package versions to work. Fixing this catch-22 is beyond my abilities :D

### Similar Projects

A number of folks have been working hard on a similar project [meteor-webpack-react](https://github.com/jedwards1211/meteor-webpack-react) that you should also take a look at. They are using a different structure and project setup to Metpack but sharing the same general end goal. Their project has been around longer than Metpack with more eyes on the code so it's entirely possible they've crushed more bugs than Metpack, and/or have extra features I'm not aware of. Definitely go check it out :)

### License

All component parts retain their original licenses and rights remain with their original authors. Anything added by this project on top is MIT License (MIT).
<F37>
