const choo = require('choo');
const html = require('choo/html');
const mount = require('choo/mount');
const resume = require('./helpers/choo-resume');
const app = choo();
const DEV = process.env.NODE_ENV === 'development';

// Hot Reload
DEV && app.use(resume());

// global.css
require('./css/base.css');

// Views
var homeView = require('./views/home')('sub');

// Model
app.model(require('./models/main'));

// Routes
app.router(['/', homeView]);

// Setup
var tree = app.start();
var el = document.querySelector('#choo-app');
el && el.remove();
document.body.appendChild(html`<div id="choo-app">${tree}</div>`);

// HMR
if(module.hot) {
	module.hot.accept(function(err){
		err && console.error("Cannot apply hot update", err);
	});
}
