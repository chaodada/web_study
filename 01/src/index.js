// 使用es6 导入语法导入jQuery
import $ from 'jquery'

// 定义jQuery的入口函数
$(function () {


    // 实现隔行变色

    // 奇数行
    $('li:odd').css('background-color', 'red')
    // 偶数行
    $('li:even').css('background-color', 'pink')


})