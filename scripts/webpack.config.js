const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

// 使用依赖图形分析插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

module.exports = {
    mode: 'development',
    devServer: {
        static: './dist',  //将./dist 视为项目根路径进行访问
        hot: true
    },
    entry: {
        index: './src/indexImport.js',
    }, //文件项目入口
    output: {
        filename: "[name].bunder.js",
        path: path.resolve(__dirname, '../dist'),
        clean: true // 在每次构建前清理 /dist 文件夹
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '动态导入'
        }),
        new BundleAnalyzerPlugin()
    ],
}