/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
    return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}

export const toScale = (x: number, y: number, scale: number) => {
    return [Math.round(x * scale), Math.round(y * scale)]
}
export const reverseScale = (x: number, y: number, scale: number) => {
    return [Math.round(x / scale), Math.round(y / scale)]
}