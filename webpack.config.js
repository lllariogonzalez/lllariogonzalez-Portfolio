module.exports = {
    entry: './public/script.js',
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
}