import type {
    CreateComponentType,
    ConfigType,
} from './index.d';
import { FetchComponentType } from './index.d' 
// 公共加载类  将包中的组件都加载出来
const configModules = import.meta.globEager('./components/**/config.vue');
const indexModules = import.meta.globEager('./components/**/index.vue');

/**
 * * 获取目标组件配置信息
 * @param targetData
 */
export const createComponent = async (targetData: ConfigType): Promise<CreateComponentType> => {
    const { elementType, comName } = targetData
    const chart = await import(`./components/${elementType}/${comName}/config.ts`)
    return new chart.default()
  }
  

// 获取组件
const fetchComponent = (compontentName: string, flag: FetchComponentType) => {
    const module = flag === FetchComponentType.VIEW ? indexModules : configModules;
    console.log(module);
    for (const key in module) {
        let keyArr = key.split('/');
        let name = keyArr[keyArr.length - 2];
        if (name === compontentName) {
            return module[key];
        }
    }
}

// 获取展示组件
export const fetchViewComponent = (compontentName: string) => {
    return fetchComponent(compontentName, FetchComponentType.VIEW)?.default;
}
// 获取配置组件

export const fetchConfigComponent = (compontentName: string) => {
    return fetchComponent(compontentName, FetchComponentType.CONFIG)?.default;
}