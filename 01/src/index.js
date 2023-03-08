// 使用es6 导入语法导入jQuery
import $ from 'jquery'

// 导入样式 在webpack中一切皆模块 都可以通过ES6语法进行导入 和使用
import './css/index.css'

// 导入less
import './less/index.less'

// 定义jQuery的入口函数
$(function () {


    // 实现隔行变色

    // 奇数行
    $('li:odd').css('background-color', 'green')
    // 偶数行
    $('li:even').css('background-color', 'yellow')


})