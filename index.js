var choo = require('choo');
var html = require('choo/html');
var app = choo();
var homeView = require('./views/home');

app.model(require('./model/main'));

app.router(['/', homeView])

var tree = app.start();
var el = document.querySelector('#choo-app');
el && el.remove();
document.body.appendChild(html`<div id="choo-app">${tree}</div>`);


// app
if(module.hot) {
	module.hot.accept(function(err) {
		err && console.error("Cannot apply hot update", err);
	});
}
