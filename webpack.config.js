const path    = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'src/bundle.js',
        publicPath: 'http://localhost:8080'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader']
            }
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            { from: './src/icons/', to: 'src/icons/' }
        ]),
    ]
};