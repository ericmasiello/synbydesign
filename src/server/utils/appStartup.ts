import app from '../app';

const appStartup = () => console.log(`Listening on port: ${app.get('port')}`);

export default appStartup;
