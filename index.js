/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:03:28
 * @LastEditTime: 2021-07-02 10:45:53
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

const path = require('path');
module.exports = (pluginOptions, context) => ({
    define: {
        GLOBAL_PLUGIN_TYPED_OPTION: pluginOptions,
    },
    name: 'vuepress-plugin-typing',
    enhanceAppFiles:[
        path.resolve(__dirname, 'lib/enhanceApp.js'),
    ],
})