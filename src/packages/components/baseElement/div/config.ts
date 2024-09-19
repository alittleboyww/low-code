import { PublicConfigClass } from '@/packages/public/publicConfig';
import { DivElementConfig } from './index'
import { cloneDeep, merge } from 'lodash';
import type { CreateComponentType, SubConfig } from '@/packages/index.d';

const divConfig: SubConfig = {
    baseClassName: 'div-box',
    w: 100,
    h: 100,
    borderRadius: 8,
}
// 可能还有一部分公共配置，后面写基类进行抽离
export default class Config extends PublicConfigClass implements CreateComponentType{
    public key = DivElementConfig.comName;

    public elementConfig = cloneDeep(DivElementConfig);

    public subConfig = merge({}, this.config , divConfig);
} 