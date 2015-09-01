var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: ['./client/main.js']
    },
    output: {
        filename: 'bundle.js',
        path: './meteor/build/client'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'], include: path.join(__dirname, '../client') }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}
