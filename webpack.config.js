var path = require('path');
var webpack = require('webpack');
var development = process.env.NODE_ENV == 'development' ;
var port = process.env.PORT || 4566;
var devPublicPath = 'http://localhost:' + port;
var hotMiddlewareScript = 'webpack-hot-middleware/client?path='+devPublicPath+'/__webpack_hmr';


var entries = ['./index.js'];

development && entries.push(hotMiddlewareScript);

module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: devPublicPath+'/',
    filename: '[name].js'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: [
            ['es2015',{ "modules": false }]
          ],
        }
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader?modules',
          {
            loader:'postcss-loader',
            options:{
              plugins:function(){
                return [require("postcss-import")({ addDependencyTo: webpack }),
                require("postcss-url")(),
                require("postcss-mixins")(),
                require("postcss-cssnext")()]
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
