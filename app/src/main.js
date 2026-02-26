import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
    
.use(createPinia())
app.mount('#app')
app.use(router)
app.use(pinia)
