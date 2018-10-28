const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const commonConfig = require('./webpack.common.js')


const vueLoaderPlugin = new VueLoaderPlugin()
const providePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
  })

module.exports = [
    {
        mode: 'development',
        entry: commonConfig.entries.jsEntries,
        output: {
            path: path.resolve(__dirname, '../../public/static'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.vue$/,
                    use: 'vue-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                        },
                    }],
                },
            ],
        },

        plugins: commonConfig.plugins.concat([
            vueLoaderPlugin,
            providePlugin,
        ]),

        resolve: {
            extensions: ['.js','.vue','.json'],
            alias: {
                '@':path.join(__dirname, './js/')
            }
        }
    }
]