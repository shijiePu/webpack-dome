const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    devServer: {
        static: './dist',  //将./dist 视为项目根路径进行访问
        hot: true
    },
    entry: {
        index: './src/index.js',
    }, //文件项目入口
    output: {
        filename: "[name].[contenthash].bunder.js",
        path: path.resolve(__dirname, '../dist'),
        clean: true // 在每次构建前清理 /dist 文件夹
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack caching'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        moduleIds: 'deterministic',  // 使vendor 的哈希值都应保持一致
        // splitChunks.cacheGroups 缓存第三方库
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}