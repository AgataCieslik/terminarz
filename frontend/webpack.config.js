const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    'css-loader',

                    
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },     
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }   
        ],
        
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.html'

        }),
        new HtmlWebpackPlugin({
            filename: 'all.html',
            template: './frontend/all.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'new.html',
            template: './frontend/new.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'week.html',
            template: './frontend/week.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]

}