import { createApp } from 'vue'
import { useStore } from './store/store'
import router from './router'
import 'es6-promise/auto'
// @ts-ignore
import App from './App'

const app = createApp(App)

app.use(useStore).use(router).mount('#app')
