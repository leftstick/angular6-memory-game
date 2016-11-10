var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './ts/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].bundle.js'
    },
    debug: true,
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png)$/,
                loader: 'file'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ],
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};