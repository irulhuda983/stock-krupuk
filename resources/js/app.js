require("./bootstrap")
require("./store/subscriber")

window.Vue = require("vue").default
import App from './App.vue'
import router from './router'
import store from './store'
import VueTailwind from "vue-tailwind"
import vtconfigs from "@/config/vtconfigs.js"
import Notifications from "vue-notification";

Vue.use(VueTailwind, vtconfigs)
Vue.use(Notifications)

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app")
})
