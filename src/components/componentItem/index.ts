// 层级最多大于四级
export const MAX_DEEP: number = 4;

// 根据DragEvent获取 目标元素 index 和 deep
export function getTargetIndexAndDeep(e: DragEvent) {
    const target = e.target as HTMLElement;
    const index = target.dataset.index;
    const indexArrStr = index?.split('-');
    // 将indexArr 转换成数字
    const indexArr = [] as number[];
    indexArrStr?.forEach((item, index) => {
        indexArr[index] = Number(item)
    })
    return {
        indexArr
    }
}