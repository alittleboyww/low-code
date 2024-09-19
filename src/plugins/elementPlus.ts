import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 首先 1. 理清楚有哪些组件需要使用
// 引入组件后 如果发现组件不存在，则需要注册组件

export default function setupElementPlus(app: App) {
    app.use(ElementPlus)
}

// export function useElementPlus(app: App) {
//     app.use(ElButton)
// }

// export function installElementPlus(app: App) {
//     setupElementPlus(app)
//     useElementPlus(app)
//     return app
// }