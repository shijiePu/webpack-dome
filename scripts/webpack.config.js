const path = require("path")

//使用HtmlWebpackPlugin 生成自己需要的html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist'),
        clean: true, //在每次构建前清理 /dist 文件夹
    },
    // module loader 可以链式调用。链中的每个 loader 都将对资源进行转换，不过链会逆序执行。
    //第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
    //最后，webpack 期望链中的最后的 loader 返回 JavaScript。
    //请确保 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。
    //如果不遵守此约定，webpack 可能会抛出错误。
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出2',
        }),
    ],
}