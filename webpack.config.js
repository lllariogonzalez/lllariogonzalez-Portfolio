module.exports = {
  entry: './public/script.js',
  output: {
    // eslint-disable-next-line n/no-path-concat
    path: __dirname + '/public/dist',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map'
}
