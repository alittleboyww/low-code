import { PublicConfigClass } from '@/packages/public/publicConfig';
import { ElButtonConfig } from './index'
import { cloneDeep, merge } from 'lodash';
import type { CreateComponentType, SubConfig } from '@/packages/index.d';
import loadingSlots from './slots/loadingSlots.vue';

const elBtnConfig: SubConfig = {
    baseClassName: 'el-button-box',
    w: 100,
    h: 100,
    borderRadius: 8
}

const slotsConfig = [{
    // 插槽名称
    name: 'default',
    // 默认插槽对应的组件 动态的渲染组件，只展示按钮两个字
    component: shallowRef(
        {
            render() {  
                // 使用h函数来创建VNode（虚拟DOM节点）  
                return h('span', '按钮');  
            }
        }
    ),
    // 是否显示插槽
    isShow: "true"
}, {
    // 插槽名称
    name: 'loading',
    // 默认插槽对应的组件
    component: shallowRef(loadingSlots),
    // 是否显示插槽
    isShow: "true"
}]
// 可能还有一部分公共配置，后面写基类进行抽离
export default class Config extends PublicConfigClass implements CreateComponentType{
    public key = ElButtonConfig.comName;

    public elementConfig = cloneDeep(ElButtonConfig);

    public subConfig = merge({}, this.config , elBtnConfig);

    public slotsConfig = cloneDeep(slotsConfig);
} 