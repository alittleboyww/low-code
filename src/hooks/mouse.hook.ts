import type { CreateComponentType } from "@/packages/index.d"
import { throttle } from "lodash"
import { useElementStore } from "@/stores/elementStore"
import { reverseScale } from "@/tools/utils"

// 一个方法，判断两个item 边界是否相等，比如item.subConfig.x == item1.subConfig.x || item.subConfig.x == item1.subConfig.x
const isSamePosition = (item: CreateComponentType, item1: CreateComponentType) => {
    const { x: sx, y: sy, w, h } = item.subConfig;
    const { x: sx1, y: sy1, w: w1, h: h1 } = item1.subConfig;
    let result = {
        x: -99999,
        y: -99999,
        isSame: false
    };
    // 先保证属性都存在
    if (sx && sy && w && h && sx1 && sy1 && w1 && h1) {
        // 组件右侧或者下边的边界
        let ex = sx + w, ey = sy + h, ex1 = sx1 + w1, ey1 = sy1 + h1;
        // 组件中心点
        let cx = Math.round((sx + ex) / 2), cy = Math.round((sy + ey) / 2);
        let cx1 = Math.round((sx1 + ex1) / 2), cy1 = Math.round((sy1 + ey1) / 2);

        let pointX = [sx, ex, cx], pointY = [sy, ey, cy];
        let pointX1 = [sx1, ex1, cx1], pointY1 = [sy1, ey1, cy1];
        console.log(cx, cx1)
        for(let x in pointX) {
            for(let x1 in pointX1) {
                if (pointX[x] == pointX1[x1]) {
                    result.x = pointX[x];
                    result.isSame = true;
                    break;
                }
            }
        }

        for(let y in pointY) {
            for(let y1 in pointY1) {
                if (pointY[y] == pointY1[y1]) {
                    result.y = pointY[y];
                    result.isSame = true;
                    break;
                }
            }
        }
    }
    return result;
}
export default function useMouse() {
    const elementStore = useElementStore();
    // mouseClickHandle, mousedownHandle, mouseenterHandle, mouseleaveHandle

    const mouseClickHandle = (e: MouseEvent, item: CreateComponentType) => {
        // 选择组件
        // 鼠标按下 给组件加一个 active样式
        e.preventDefault()
        e.stopPropagation()
        console.log('mouseClickHandle')
        elementStore.setTargetId(item.id);
    }
    const mousedownHandle = (e: MouseEvent, item: CreateComponentType) => {
        e.preventDefault()
        e.stopPropagation()
        let startX = e.clientX;
        let startY = e.clientY;
        let x = item.subConfig.x;
        let y = item.subConfig.y;
        // TODO 这块可能要改 先完成容器的响应式
        elementStore.setTargetId(item.id);
        const { scale } = elementStore.getContentConfig;
        // 选择之后的移动
        const mouseMove = throttle((e) => {
            const targetId = elementStore.getTargetId;
            const target = elementStore.getTargetComponent(targetId);
            //e.clientX - startX + target.subConfig.x;
            const [endX, endY] = reverseScale(e.clientX - startX, e.clientY - startY, scale)
            if (target && x !== undefined && y != undefined) {
                target.subConfig.x = x + endX;
                target.subConfig.y = y + endY;
            }
        }, 16)

        const mouseUp = () => {
            console.log('down -> mouseUp')
            // 移动结束 ，移除事件
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
        }

        // 点击之后，添加事件
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }
    const mouseenterHandle = (e: MouseEvent, item: CreateComponentType) => {
        // 鼠标进入 给组件加一个 hover样式
        e.preventDefault()
        e.stopPropagation()
        console.log('mouseenterHandle')
        elementStore.setHoverTargetId(item.id)
    }
    const mouseleaveHandle = (e: MouseEvent, item: CreateComponentType) => {
        // 鼠标移出 移除hover样式
        e.preventDefault()
        e.stopPropagation()
        console.log('mouseleaveHandle')
        elementStore.setHoverTargetId('')
    }

    const mousedownHandleUnStop = (e: MouseEvent, item: CreateComponentType) => {
        if (item) {
            elementStore.setTargetId(item.id)
        }
        elementStore.setTargetId('')
        elementStore.setGuideLineConfigDefualt()
    }

    const useMousePointHandle = (e: MouseEvent, point: string, item: CreateComponentType) => {
        e.stopPropagation()
        e.preventDefault()

        const itemAttrX = item.subConfig.x
        const itemAttrY = item.subConfig.y
        const itemAttrW = item.subConfig.w
        const itemAttrH = item.subConfig.h
        if (!(itemAttrY && itemAttrX && itemAttrW && itemAttrH)) { return {}}

        // 记录点击初始位置
        const startX = e.screenX
        const startY = e.screenY

        const { scale } = elementStore.getContentConfig 

        const mousemove = throttle((moveEvent: MouseEvent) => {

            let currXs = Math.round(moveEvent.screenX - startX)
            let currYs = Math.round(moveEvent.screenY - startY)

            let [currX, currY] = reverseScale(currXs, currYs, scale)

            const isTop = /t/.test(point)
            const isBottom = /b/.test(point)
            const isLeft = /l/.test(point)
            const isRight = /r/.test(point)

            const newHeight = itemAttrH + (isTop ? -currY : isBottom ? currY : 0)
            const newWidth = itemAttrW + (isLeft ? -currX : isRight ? currX : 0)

            item.subConfig.h = newHeight > 0 ? newHeight : 0
            item.subConfig.w = newWidth > 0 ? newWidth : 0
            item.subConfig.x = itemAttrX + (isLeft ? currX : 0)
            item.subConfig.y = itemAttrY + (isTop ? currY : 0)

        }, 16)

        const mouseup = (upEvent: MouseEvent) => {
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
        }

        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)
    }
    return { 
        mouseClickHandle, 
        mousedownHandle,
        mouseenterHandle, 
        mouseleaveHandle, 
        mousedownHandleUnStop, 
        useMousePointHandle 
    }
}