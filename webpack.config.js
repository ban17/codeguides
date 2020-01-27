const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts'],
        alias: {
            '@/components': path.resolve(__dirname, './src/components')
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
}