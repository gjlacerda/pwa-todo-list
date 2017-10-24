const path    = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'src/js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader?presets[]=react,presets[]=es2015']
            }
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/icons/', to: 'src/icons/' },
            { from: './src/sw.prod.js/', to: 'sw.js'},
        ])
    ]
};
