/*
 * @Author: Zhilong
 * @Date: 2021-06-30 00:06:23
 * @LastEditTime: 2021-07-02 11:54:52
 * @Description: 
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */

import typedStart from './typed'
/** define 配置之后 拿取变量 */
const options = GLOBAL_PLUGIN_TYPED_OPTION

export default () => {
    window.addEventListener('load',typedStart.bind(this,options))
}