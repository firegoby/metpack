var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: ['./server/main.js']
    },
    output: {
        filename: 'bundle.js',
        path: './meteor/build/server'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'], include: path.join(__dirname, '../server') },
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}

