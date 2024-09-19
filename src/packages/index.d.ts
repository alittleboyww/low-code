export enum FetchComponentType {
    VIEW,
    CONFIG
}

export type ConfigType = {
    name: string,
    icon: string | (() => Promise<typeof import('*.svg')>),
    elementType: string,
    comName: string
}
// 将一个类型的属性值设置都为可选的
export type OptionalType<T> = {  
    [P in keyof T]?: T[P]; // 这里的?使得每个属性都变为可选  
};
export type BaseConfig = {
    x: number; 
    y: number; 
    w: number; 
    h: number; 
    zIndex: number; 
    offsetX: number; 
    offsetY: number;
}

export type SubConfig = OptionalType<BaseConfig> & {
    baseClassName: string,
    borderRadius: number,
    contenteditable?: boolean,
    defaultText?: string,
    [key: string]: string | number | boolean
}

export interface PublicConfigType {
    id: string
    config: BaseConfig
    styles: {
      [key: string]: string | number | boolean
    }
  }
  

export interface CreateComponentType extends PublicConfigType {
    key: string
    elementConfig: ConfigType
    subConfig: SubConfig
}
export type ValueOf<T> = T[keyof T];
export type KeyOf<T> = keyof T;

export type ContentConfigType = {
    showGrid: boolean,
    gridColor: string,
    gridLineWidth: number,
    iconImg: string | (() => Promise<typeof import('*.svg')>),
    scale: number,
    width: number,
    height: number,
}

export type ContentConfigKeyType = KeyOf<ContentConfigType>;
export type ContentConfigValueType = ValueOf<ContentConfigType>;

