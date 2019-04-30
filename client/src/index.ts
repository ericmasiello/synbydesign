import app from './server/app';
import appStartup from './server/utils/appStartup';

app.listen(app.get('port'), appStartup);
