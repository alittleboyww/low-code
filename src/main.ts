import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import baseCss from '@/assets/base.css'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import setUpElementPlus from './plugins/elementPlus'

const app = createApp(App)

app.use(createPinia())

// app.use(ElementPlus)

// setUpElementPlus(app)

app.mount('#app')

window['$vue'] = app;
