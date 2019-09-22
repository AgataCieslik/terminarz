const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require('path');





const indexTarget = {
    entry:{
        app: './src/js/app.js'
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const newTarget = {
    entry:{
        new: './src/js/new.js'
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'new.html',
            template: './src/html/new.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const weekTarget = {
    entry:{
        week: './src/js/week.js'
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'week.html',
            template: './src/html/week.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const allTarget = {
    entry:{
        all: './src/js/all.js'
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'all.html',
            template: './src/html/all.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

const mutualOptions = {
    devServer:{
        port: 5500,
        contentBase: './dist',
        inline: true
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
    
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: 'style.css'
    //     })
    // ]

}

ob1 = Object.assign({},mutualOptions, indexTarget);
ob2 = Object.assign({},mutualOptions, newTarget)
ob3 = Object.assign({},mutualOptions, weekTarget)
ob4 = Object.assign({},mutualOptions, allTarget)

module.exports = [
    ob1, ob2, ob3, ob4
]

// module.exports = {
//     devServer:{
//         port: 5500,
//         contentBase: './dist',
//         inline: true
//     },
//     entry: {
//         app: './src/app.js',
//         // new: './src/new.js'
//     },
//     output: {
//         filename: '[name].js',
//         path: resolve(__dirname, './dist')
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.css/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader, 
//                     },
//                     'css-loader',

                    
//                 ]
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [
//                   {
//                     loader: 'file-loader',
//                   },
//                 ],
//             },
//             {
//                 test: /\.svg$/,
//                 loader: 'svg-inline-loader'
//             },     
//             {
//                 test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//                 use: [
//                   {
//                     loader: 'file-loader',
//                     options: {
//                       name: '[name].[ext]',
//                       outputPath: 'fonts/'
//                     }
//                   }
//                 ]
//               }   
//         ],
        
//     },
    
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'all.html',
//             template: './src/all.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './src/index.html'

//         }),
//         new HtmlWebpackPlugin({
//             filename: 'new.html',
//             template: './src/new.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'week.html',
//             template: './src/week.html'
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'style.css'
//         })
//     ]

// }