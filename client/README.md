# Syn By Design Client

## Get Started

1. `cp dev.env .env`
2. `npm ci`

## Run locally for development

1. `npm run build`
2. `npm run dev`

## Run app for production
1. `npm run build`
2. `npm start`

## Testing

`npm test`

## Deploy via `now`

`npm run deploy`

### Deploy to production

`npm run deploy:prod`

#### Run development server with VS Code debugging

First, run `npm run build`. Then run `Launch Client` via VS Code debugger.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Client",
      "cwd": "${workspaceFolder}/client",
      "program": "${workspaceFolder}/client/build/app.js",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ],
      "runtimeVersion": "10.15.3"
    },
  ]
}
```