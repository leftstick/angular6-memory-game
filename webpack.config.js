const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: resolve(__dirname, 'ts', 'core', 'ext', 'polyfills.ts'),
        vendor: resolve(__dirname, 'ts', 'core', 'ext', 'vendor.ts'),
        app: resolve(__dirname, 'ts', 'index.ts')
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    devtool: '#eval',
    devServer: {
        historyApiFallback: false,
        stats: 'minimal'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts!tslint'
            },
            {
                test: /\.(png)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: resolve(__dirname, 'index.html'),
            favicon: resolve(__dirname, 'img', 'favicon.ico'),
            hash: false
        })
    ]
};