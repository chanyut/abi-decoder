module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/abi-decoder.js',
    libraryTarget: 'var',
    library: 'abi-decoder',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
