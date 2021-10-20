/*
 * @Author: Zhilong
 * @Date: 2021-06-29 01:21:19
 * @LastEditTime: 2021-07-02 02:35:36
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
import Typed from 'typed.js'

// 使用typed进行处理
const typedHandle = (config) => {
    const tag = document.querySelector(config.selector)
    if (!tag) throw Error('打字稿指定的Selector错误', 'tag => ' + tag)
    const id = 'typed-' + Math.random().toString(36).replace(/0./, '')
    const tagValue = tag.innerText || tag.innerHTML
    // 子标签span化
    tag.innerHTML = `<span class='${id}'>${tagValue}</span>`
    new Typed('.' + id, {
        ...config,
        strings: [''].concat(config.strings), //输入内容, 支持html标签
        typeSpeed: config.typeSpeed || 100, //打字速度
        backSpeed: config.backSpeed || 50 //回退速度
    });
}


// 按需引入
export const typedStart = (config) => {
    if (Array.isArray(config)) {
        config.forEach((item) => typedHandle(item))
    } else {
        typedHandle(config)
    }
}

// 默认暴露
export default typedStart