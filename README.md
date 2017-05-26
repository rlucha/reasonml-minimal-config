# Minimal reasonml config

This repo contains the minimum amount of configuration to run:
* reasonml to javascript transpilation
* webpack-dashboard & bundle reports
* browser-sync server with automatic reloading on source changes

## Fork the repo and run these commands
```
$ git clone https://github.com/rlucha/reasonml-minimal-config .
$ npm i
```

## Running the development environment
```
$ npm run dev
```

## Creating a production bundle
Minifies & drops dead code
```
$ npm run prod
```

## Check the bundle details
With every compilation a stats.json file is produced in the root, visit https://webpack.github.io/analyse/ and drop that file to get a good insight of your bundle.

Edit src/main.re and check the changes on __localhost:3001__
