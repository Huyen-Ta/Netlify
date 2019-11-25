const path = require("path");

module.exports = {
  module: {
    rules: [

      // Load sass
      {
        test: /\.(scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },

      // Load images.
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]'
        }
      },

      // Load fonts.
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }

    ]
  }
};