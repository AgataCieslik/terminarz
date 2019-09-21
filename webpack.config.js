const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require('path');

module.exports = {
    entry: {
        app: './frontend/app.js'
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
            template: './frontend/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]

}