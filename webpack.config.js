module.exports = {
    entry: './script.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
}