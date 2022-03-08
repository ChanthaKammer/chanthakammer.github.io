import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
    el: '#app',
    data: {
      greeting: 'Hello World!',
    },
  });
