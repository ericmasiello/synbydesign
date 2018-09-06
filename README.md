# Syn By Design

This repository is my personal portfolio, resume, and playground where I experiment with interesting technology.

### Get Started

1. Create an `.envrc` file: `cp dev.envrc .envrc`
2. Update values in .envrc
3. Match the node/npm version `nvm use`
4. Install dependencies `npm i`

### Run development server

```
npm run dev
```

#### Running the client locally with a service worker

By default, the service worker is only invoked in a production environment. This typically done by running `npm run prod:build-client`. However, you can force the service worker to run in a dev environment by running `npm run dev:build-client -- --env.serviceWorker=true`.

#### Run development server with VS Code debugging

You'll need to run the client and server builds in watch mode as two separate tasks

* Run the client watch

```
npm run dev:watch-client
```

* Then in a separate terminal window run

```
npm run dev:watch-server
```

* Then, in VSCode, run the node server using the following configuration

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/build/bundle.js",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ],
      "envFile": "${workspaceFolder}/.envrc",
      "runtimeVersion": "10.7.0"
    }
  ]
}
```

### Build and run in production

```
npm run build
npm start
```

### Analyzing Client Bundle

```
npm run prod:build-client -- --env.analyze=true
```
