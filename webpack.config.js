var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './assets/bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader?browsers=last 2 versions"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!postcss-loader?browsers=last 2 versions!sass-loader"
            }
        ]
    }
}