/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:06:23
 * @LastEditTime: 2021-07-02 11:54:52
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

import { typedStart } from './typed'
/** define 配置之后 拿取变量 */
const options = GLOBAL_PLUGIN_TYPED_OPTION
// 检索次数
let count = 10
// 轮询标签
const querySelector = () => {
    setTimeout(() => {
        try {
            typedStart(options)
        } catch (error) {
            if (--count > 0) querySelector()
            else console.error(error)
        }
    }, 100)
}
export default {
    mounted() {
        querySelector()
    }
}