const path = require("path")

module.exports = {
    entry:'./src/index.js', //文件项目入口
    output:{
        filename : "main.js",
        path: path.resolve(__dirname, 'dist'),
    }
}