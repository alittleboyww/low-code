import { PublicConfigClass } from '@/packages/public/publicConfig';
import { SpanElementConfig } from './index'
import { cloneDeep, merge } from 'lodash';
import type { CreateComponentType, SubConfig } from '@/packages/index.d';

const SpanConfig: SubConfig = {
    baseClassName: 'span-box',
    w: 300,
    h: 21,
    borderRadius: 0,
    contenteditable: true,
    defaultText: '请输入文本',
}
// 可能还有一部分公共配置，后面写基类进行抽离
export default class Config extends PublicConfigClass implements CreateComponentType{
    public key = SpanElementConfig.comName;

    public elementConfig = cloneDeep(SpanElementConfig);

    public subConfig = merge({}, this.config, SpanConfig);
} 