import { createRouter, createWebHistory } from "vue-router";

import Register from './pages/Register.vue'
import Gallery from './pages/Gallery.vue'

function lazyLoad(view){
    return import(`./pages/${view}.vue`)
}

const routes = [
    {
        path: '',
        name: 'gallery',
        component: lazyLoad("Gallery"),
    },
    { 
        path: '/register', 
        name: 'register', 
        component: lazyLoad("Register"),

    },
    { 
        path: '/register/:id', 
        name: 'edit', 
        component: lazyLoad("Register"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router