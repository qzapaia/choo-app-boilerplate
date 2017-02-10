const express = require('express');
const colors = require('colors');
const webpack = require('webpack');

const app = express();
const port = process.env.PORT || 4566;
const development = process.env.NODE_ENV == 'development';

const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

if(development){
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'));
app.use(express.static('build'));
app.get('/',function(req,res){ res.sendFile(__dirname + '/index.html'); })

app.listen(port,function(){
  var showPort = port == '80'? '/' : (':'+port+'/');
  var hostname = 'http://localhost' + showPort;
  console.log('Running on ' + hostname.green + ' ¯\\_(ツ)_/¯ \n'.magenta);
});
