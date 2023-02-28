// 导入node.js中专门操作路径的模块
const path = require('path')

// 导入html插件
const HtmlPlugin = require('html-webpack-plugin')

// 创建html插件实例
const htmlPlugin = new HtmlPlugin({
    template: 'src/index.html',  // 指定源文件存放路径
    filename: 'index.html', // 指定生成文件的存放路径
})


// 使用node.js中的导出语法 向外导出一个webpack 的配置对象
module.exports = {
    // mode 代表webpack运行的模式
    // development 开发环境 不会对打包生成的文件进行代码压缩和性能优化 打包速度快 适合在开发阶段用
    // production 生产环境 会对打包生成的文件进行代码压缩和性能优化 打包速度很慢 仅适合在发布阶段用
    mode: "development", //  mode 用来指定构建模式  可选值 development   production

    // 使用插件
    plugins: [htmlPlugin],
    // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),

    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: "main.js" // 输出文件的名称
    },


    // webpack-dev-server  配置
    devServer: {
        open:true, // 自动打开浏览器
        static: {
            directory: path.join(__dirname, "public"), // 定义 http 默认目录
        },
        port: 9000, // 默认端口
        host:'127.0.0.1' // 运行域名 默认localhost
    },


    module: {


        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ],
    },

}

