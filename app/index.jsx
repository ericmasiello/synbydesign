require('synbydesign.design');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main(){
  ReactDOM.render(<App />, document.getElementById('app'));
}