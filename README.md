# Boilerplate for react project
Basic setup for react based project. After spending sometime looking on web for various setups i decided that some of them are either too heavy or are lacking some functionality. So i decided to make my own with all the features i knew were possible to have with it.
* It bundled with webpack
* Has hotloading feature enabled for development environment, so you dont need to refresh the page after you do change in code, and page is not reloaded.
* It is isomorphic, will work with no javascript enabled.
* Uses Flux for data model
* Uses Jest for testing
* Uses React Route v4

## How to run

To run it in dev mode, run in two terminals:
* for server
```
  npm run server-watch
```
* for frontend
```
  npm run client-watch
```
it will run it in hot load mode


To build and run server and client for production just run
```
npm run all-run
```

To build server and client for production run
```
npm run all-build
```

To build server for production run
```
npm run server-build
```

To build client for production run
```
npm run client-build
```
