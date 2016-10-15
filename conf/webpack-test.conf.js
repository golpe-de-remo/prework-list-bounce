module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?limit=100000' 
      }
    ]
  },
  plugins: [],
  debug: true,
  devtool: 'source-map',
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
