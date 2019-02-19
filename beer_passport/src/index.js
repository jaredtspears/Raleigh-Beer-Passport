import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// for reactstrap
import 'bootstrap/dist/css/bootstrap.css';
// requireing the breweryDB Sandbox Key:
require('dotenv').config();

// const keys = require('keys.js');  //still working this out 

//TODO the below might not be how to correctly call this: REF LIRI app with Spotify
// const breweryDB = require(keys.breweryDB); //from the key.js file set up in the .gitIgnore you will pull you the constructor "breweryDB"

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
