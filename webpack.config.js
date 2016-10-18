var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");


module.exports = [
    {
        devtool: 'eval',
        context: path.join(__dirname, './src'),
        entry: {
            jsx: './index.js',
            vendor: [
                'react',
                'react-dom',
                'flux',
                'react-router',
                'react-router-bootstrap',
                'react-bootstrap'
            ]
        },
        output: {
            publicPath: '/',
            path: path.join(__dirname, './build'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: [
                        'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
                        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                    ]
                },
                {
                    test: /\.css$/,
                    loaders: [
                        'style-loader',
                        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loaders: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new CopyWebpackPlugin([
                {from: 'images', to: 'img', force: true}
            ]),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new HtmlWebpackPlugin({
                chunksSortMode: 'dependency',
                hash: true,
                inject: 'body',
                template: 'index.html'
            })
        ]
    }
];