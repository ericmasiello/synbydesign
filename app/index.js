require ('./main.css');

var component = require('./component');
var app = document.createElement('div');
app.appendChild(component());

document.body.appendChild(app);