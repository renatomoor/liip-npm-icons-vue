import { createApp } from 'vue'
import App from './App.vue'
import npmIcons from '@liip/npm-icons'
import './index.css'


createApp(App)
  .use(npmIcons)
  .mount('#app')
