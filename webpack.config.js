const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
    entry: {
        index: './ts/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: '@angularclass/hmr-loader!awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style/useable!css'
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
        new TsConfigPathsPlugin( /* { tsconfig, compiler } */ ),
        new ForkCheckerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};