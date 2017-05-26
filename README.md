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
```
$ npm run prod
```

Edit src/main.re and check the changes on the results on __localhost:3001__
