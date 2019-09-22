const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require('path');

module.exports = {
    devServer:{
        port: 5500,
        contentBase: './dist',
        inline: true
    },
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
            template: './src/index.html'

        }),
        new HtmlWebpackPlugin({
            filename: 'all.html',
            template: './src/all.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'new.html',
            template: './src/new.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'week.html',
            template: './src/week.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]

}



