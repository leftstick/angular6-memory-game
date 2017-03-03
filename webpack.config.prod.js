const {resolve} = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    entry: {
        polyfills: resolve(__dirname, 'ts', 'core', 'ext', 'polyfills.ts'),
        vendor: resolve(__dirname, 'ts', 'core', 'ext', 'vendor.ts'),
        app: resolve(__dirname, 'ts', 'index.aot.ts')
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
