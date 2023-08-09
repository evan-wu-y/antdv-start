import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)

Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})

app.use(createPinia())
app.use(router)

app.mount('#app')
