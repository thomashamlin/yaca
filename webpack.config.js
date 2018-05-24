const path = require('path');


module.exports = {
  entry: {
    app: './src/App.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.js$/,
        // only process local scripts, not node_modules
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      }
    ]
  }
};
