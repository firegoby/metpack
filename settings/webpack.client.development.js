var config = require('./webpack.client.js')
var webpack = require('webpack')

config.entry.main.unshift('webpack/hot/only-dev-server')
config.entry.main.unshift('webpack-dev-server/client?http://0.0.0.0:9000')
config.output.publicPath = '/build/client/'
config.module.loaders[0].loaders.unshift('react-hot')
config.plugins.push(new webpack.NoErrorsPlugin())

module.exports = config
