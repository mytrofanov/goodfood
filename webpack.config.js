const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let target = 'web';
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist'; // in production-mode we use browserslist
}
const plugins = [
    new HTMLWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

if (process.env.SERVE) { // use plugin only for devServer
    plugins.push(new ReactRefreshWebpackPlugin());
}


module.exports = {
    mode,
    target,
    entry:  './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean:true,
    },
    devServer: {
        port: 3000
    },
    plugins,
    module: {
        rules: [{test: /\.(html)$/, use: ['html-loader']},
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource', // in production-mode
                // pictures less than 8kb would be inlined in code
                // in production-mode all images would be in dist/assets
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // don't work with files in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // use cache in order not to recompile
                        // on each start
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    }
}
