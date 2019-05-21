# Syn By Design API

## Get Started

1. `cp dev.env .env`
2. `npm ci`

## Run the app

1. `npm run build`
2. `npm start`

## Testing

`npm test`

## Deploy via `now`

`npm run deploy`

### Deploy to production

`npm run deploy:prod`

#### Run development server with VS Code debugging

First, run `npm run build`. Then run `Launch API` via VS Code debugger.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch API",
      "program": "${workspaceFolder}/api/build/index.js",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ],
      "envFile": "${workspaceFolder}/api/.env",
      "runtimeVersion": "10.15.3"
    }
  ]
}
```