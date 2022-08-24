import { createApp } from 'vue'
// import './style.css'
import App from './App'
import { GlobalCmComponent } from "codemirror-editor-vue3";


createApp(App).use(GlobalCmComponent).mount('#app')
