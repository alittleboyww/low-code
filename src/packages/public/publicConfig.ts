import { getUUID } from "@/tools/utils";
import type { PublicConfigType } from '@/packages/index.d'

const elementInitConfig = {
    x: 50,
    y: 50,
    w: 500,
    h: 300,
    // 不建议动 offset
    offsetX: 0,
    offsetY: 0,
}

export class PublicConfigClass implements PublicConfigType {
    public id = getUUID();

    public config = { ...elementInitConfig, zIndex: -1 }
    // 基本样式配置
    public styles = {
        // 透明
        opacity: 1,

        // 旋转
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,

        // 倾斜
        skewX: 0,
        skewY: 0,
    }
}