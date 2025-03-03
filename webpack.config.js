const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        script: path.resolve(__dirname, 'src/script.js'),
        menuOperatorScript: path.resolve(__dirname, 'src/menuOperatorScript.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        compress: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'e-Commerce',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['script'],
        }),
        new htmlWebpackPlugin({
            title: 'e-Commerce',
            filename: 'menuOperator.html',
            template: 'src/menuOperator.html',
            chunks: ['menuOperatorScript'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
 
            },
        ],
    },
}