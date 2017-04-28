var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  historyApiFallback: true,
  stats: { colors: true },
  hot: true,
  inline: true,
  contentBase: './dist'
}));

app.use(hotMiddleware(compiler));

// server static assets normally
app.use('/public', express.static(__dirname + '/public'));


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8080, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
});
