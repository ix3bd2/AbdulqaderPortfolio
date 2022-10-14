import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
library.add(faAddressCard, faBriefcase)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')