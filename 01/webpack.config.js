

// 导入node.js中专门操作路径的模块
const path =require('path')


// 使用node.js中的导出语法 向外导出一个webpack 的配置对象
module.exports ={
    entry: path.join(__dirname,'./src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname,'./dist'), // 输出文件的存放路径
        filename: "bundle.js" // 输出文件的名称
    },


    // mode 代表webpack运行的模式
    // development 开发环境 不会对打包生成的文件进行代码压缩和性能优化 打包速度快 适合在开发阶段用
    // production 生产环境 会对打包生成的文件进行代码压缩和性能优化 打包速度很慢 仅适合在发布阶段用
    mode: "development" //  mode 用来指定构建模式  可选值 development   production
}

