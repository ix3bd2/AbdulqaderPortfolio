import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faBriefcase, faBrain, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
library.add(faAddressCard, faBriefcase, faBrain, faGraduationCap)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(AOS.init())
    .mount('#app')