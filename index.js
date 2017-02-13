var choo = require('choo');
var html = require('choo/html');
var app = choo();

// Views
var homeView = require('./views/home');

// Model
app.model(require('./model/main'));

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
