// 使用es6 导入语法导入jQuery
import $ from 'jquery'

// 导入样式 在webpack中一切皆模块 都可以通过ES6语法进行导入 和使用
// 如果某个模块中 使用from接收到的成员为undefined 则没必要进行接收
// 皮哥说 引入组件 引入方法的时候才用from进行接收
// import a from './css/index.css'
import './css/index.css'

// 导入less
// import b from './less/index.less'
import './less/index.less'

// 导入图片
import logo from './images/logo.png'

console.log(logo)
// 给img标签的src动态赋值
$('.box').attr('src', logo)


// 定义jQuery的入口函数
$(function () {


    // 实现隔行变色

    // 奇数行
    $('li:odd').css('background-color', 'green')
    // 偶数行
    $('li:even').css('background-color', 'yellow')


})