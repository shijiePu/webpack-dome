const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        static: './dist',  //将./dist 视为项目根路径进行访问
        hot: true
    },
    // 多入口
    entry: {
        index: './src/index.js',
        author: './src/author.js',
    }, //文件项目入口
    output: {
        filename: "[name].bunder.js",
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'codeSplit'
        })
    ],
    optimization: {
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },
}