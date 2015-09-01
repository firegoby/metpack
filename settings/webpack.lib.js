var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: ['./lib/main.js']
    },
    output: {
        filename: 'bundle.js',
        path: './meteor/build/lib'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'], include: path.join(__dirname, '../lib') },
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}

