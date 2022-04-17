module.exports = {
  mode: process.env.production ? 'production' : 'development',
  devServer: {
    port: 3000,
  },
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
    ],
  },
};
