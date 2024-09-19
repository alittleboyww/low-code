import type { CreateComponentType } from "@/packages/index.d"
import { useElementStore } from "@/stores/elementStore"

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

export function useWatchSubConfig() {
    const elementStore = useElementStore();

    watchEffect(() => {
        // 监听所有的组件
        const componentList = elementStore.getComponentList;
        console.log('watchEffect============')
        // 先判断是否选择了组件
        if (elementStore.getTargetId) {
            const targetId = elementStore.getTargetId;
            const target = elementStore.getTargetComponent(elementStore.getTargetId);
            if (!target) {
                return;
            }
            for (let i = 0; i < componentList.length; i++) {
                let nearComponent = componentList[i];
                if (nearComponent.id !== targetId) {
                    let result = isSamePosition(target, nearComponent);
                    elementStore.setGuideLineConfig(result.x, result.y)
                }
            }
        }
    })
}