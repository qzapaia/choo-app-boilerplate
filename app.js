const choo = require('choo');
const html = require('choo/html');
const resume = require('./helpers/choo-resume');
const app = choo();
const DEV = process.env.NODE_ENV === 'development';

// global.css
require('./css/base.css');

// Views
var homeView = require('./views/home')('sub');

// Model
app.use(require('./stores/main'));

// Routes
app.route('/', homeView);

// Setup
var tree = resume(app).start();
var el = document.querySelector('#choo-app');
el && el.remove();
document.body.appendChild(html`<div id="choo-app">${tree}</div>`);

// HMR
if(module.hot) {
	module.hot.accept(function(err){
		err && console.error("Cannot apply hot update", err);
	});
}
