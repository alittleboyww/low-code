export type ComponentType = {
    name: string,
    type: string,
    className?: string,
    children?: ComponentType[]
}

export type OtherProp = {
    padding: number
}

export type CanvasType = {
    width: number,
    height: number,
    scale: number,
    otherProp: OtherProp
}

export interface CanvasStoreType {
    'editCanvas': CanvasType
}

export default {}