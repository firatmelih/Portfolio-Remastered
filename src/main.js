import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
const app = createApp(App)
new WaveUI(app, {
  // Some Wave UI options.
})

app.use(store).use(router).mount('#app')
