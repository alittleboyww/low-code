import type { CreateComponentType } from "@/packages/index.d"
import { useElementStore } from "@/stores/elementStore";
import { toScale } from "@/tools/utils";

const isSpan = (comName: string) => {
    return comName === 'span'
}

const observeMap = new WeakMap<HTMLElement>();
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver((mutationsList, observer) => {
    console.log(mutationsList)
    const elementStore = useElementStore();
    const { scale } = elementStore.getContentConfig
    mutationsList.forEach((mutation) => {
        let target = mutation.target as HTMLElement;
        if (observeMap.has(target)) {
            const item = observeMap.get(target);
            if (item) {
                target.style.height = 'auto';
                item.subConfig.h = Math.round(target.scrollHeight / scale)
            }
        }
    })
});

export default function useStyle() {
    const elementStore = useElementStore();
    const useContentStyle = () => {
        // 更新容器界面上的宽高
        const { width, height, scale } = elementStore.getContentConfig;
        const [endWidth, endHeight] = toScale(width, height, scale);
        return {
            width: `${endWidth}px`,
            height: `${endHeight}px`,
        }
    }
    // 组件宽高
    const useSizeStyle = (item: CreateComponentType) => {
        let w = item.subConfig.w;
        let h = item.subConfig.h;
        if (!(w && h)) {
            return {}
        }
        const { scale } = elementStore.getContentConfig;
        const [endWidth, endHeight] = toScale(w, h, scale);
        if (isSpan(item.elementConfig.comName)) {
            // 对节点进行监听
            nextTick().then(() => {
                const node = document.getElementById(item.id);
                if (node) {
                    if (!observeMap.has(node)) {
                        observeMap.set(node, item)
                        observer.observe(node as HTMLElement, { attributes: true, childList: true, subtree: true })
                    }
                }
            })
        }
        return {
            width: `${endWidth}px`,
            height: `${endHeight}px`
        }
    }
    // 组件x,y坐标位置
    const userPositionStyle = (item: CreateComponentType) => {
        if (item.subConfig.x && item.subConfig.y) {
            const { scale } = elementStore.getContentConfig;
            const [x, y] = toScale(item.subConfig.x, item.subConfig.y, scale);
            return {
                top: `${y}px`,
                left: `${x}px`
            }
        }
        return {};
    }
    const useEditableStyle = (item: CreateComponentType) => {
        return item.subConfig.contenteditable === true ? true : false
    }
    // 组件的border radius
    const useBorderRadiusStyle = (item: CreateComponentType) => {
        // 存在borderRadius
        if (item.subConfig.borderRadius) {
            const { scale } = elementStore.getContentConfig;
            return {
                borderRadius: `${Math.round(item.subConfig.borderRadius * scale)}px`
            }
        }
        return {};
    }
    // 容器背景及参考线
    const useContentBgStyle = () => {
        const { gridColor, gridLineWidth, scale } = toRefs(elementStore.getContentConfig);
        return {
            backgroundImage: `linear-gradient(to right, ${gridColor.value} 1px, transparent 1px),
                linear-gradient(to bottom, ${gridColor.value} 1px, transparent 1px)`,
            backgroundSize: `${Math.round(gridLineWidth.value * scale.value)}px ${Math.round(gridLineWidth.value * scale.value)}px`,
        }
    }
    // 锚点位置
    const usePointPositionStyle = (item: CreateComponentType, point: string, index: number, cursorResize: string[]) => {
        const { w: w, h: h } = item.subConfig

        if (!(w && h)) { return {}}
        const { scale } = elementStore.getContentConfig;
        const [width, height] = toScale(w, h, scale)
        const isTop = /t/.test(point)
        const isBottom = /b/.test(point)
        const isLeft = /l/.test(point)
        const isRight = /r/.test(point)

        //console.log('锚点位置', point, index, attr, cursorResize)

        let newLeft = 0
        let newTop = 0

        // 四个角的点
        if (point.length === 2) {
            newLeft = isLeft ? 0 : width
            newTop = isTop ? 0 : height
        } else {
            // 上下两点的点，宽度居中
            if (isTop || isBottom) {
            newLeft = width / 2
            newTop = isTop ? 0 : height
            }

            // 左右两边的点，高度居中
            if (isLeft || isRight) {
            newLeft = isLeft ? 0 : width
            newTop = Math.floor(height / 2)
            }
        }

        const style = {
            left: `${newLeft}px`,
            top: `${newTop}px`,
            cursor: cursorResize[index] + '-resize'
        }

        return style
    }
    // 引导线位置
    const userGudieLineStyle = (moveFront: 'x' | 'y') => {
        // 先这样直接结构看看能不能会变化，不行用toRefs包一层
        // 结构数据变更会导致组件重新渲染，但是如果改动结构的数据不会触发原始数据更新
        const { x, y } = elementStore.getGuideLineConfig;
        const { scale } = elementStore.getContentConfig;
        const [endX, endY] = toScale(x, y, scale); 
        if (moveFront == 'x') {
            return {
                left: `${endX}px`
            }
        }
        if (moveFront == 'y') {
            return {
                top: `${endY}px`
            }
        }
    }
    return {
        useSizeStyle,
        userPositionStyle,
        useEditableStyle,
        useBorderRadiusStyle,
        useContentBgStyle,
        usePointPositionStyle,
        userGudieLineStyle,
        useContentStyle
    }
}