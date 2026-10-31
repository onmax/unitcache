import { createApp } from 'vue'
import '@va/ui/styles/ui-base.css'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
