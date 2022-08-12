import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/auth/Login.vue'),
        meta: { menu: 'login', title: 'Login', login: true },
    },
    {
        name: 'Layout',
        component: () => import('@/views/Layout.vue'),
        path: "/",
        redirect: '/dashboard',
        meta: { title: 'Admin', auth: true },
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('@/views/dashboard/Main.vue'),
                meta: { menu: 'dashboard', title: "Dashboard", auth: true,},
            },
            {
                name: 'barang',
                path: '/barang',
                component: () => import('@/views/barang/Main.vue'),
                meta: { menu: 'barang', title: "Dataset", auth: true,},
            },
            {
                name: 'rules',
                path: '/rules',
                component: () => import('@/views/rules/Main.vue'),
                meta: { menu: 'rules', title: "Rules", auth: true,},
            },
            {
                name: 'prediksi',
                path: '/prediksi',
                component: () => import('@/views/prediksi/Main.vue'),
                meta: { menu: 'prediksi', title: "Prediksi", auth: true},
            }
        ],
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
})

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters["auth/authenticated"];

    if (to.matched.some((record) => record.meta.auth)) {
        if (!loggedIn) {
            next("/login");
        } else {
            next()
        }
    } else if (to.matched.some((record) => record.meta.login) && loggedIn) {
        next("/dashboard")
    }

    next()
})

export default router