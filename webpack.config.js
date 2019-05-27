var HtmlWebpackPlugin = require("html-webpack-plugin");
    module.exports = {
      plugins: [
        new HtmlWebpackPlugin({
          hash: true,
          title : 'Weather Forecaster',
          template : './views/index.pug'
        })
      ]
    };