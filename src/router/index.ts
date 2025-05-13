import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Saved from '@/pages/Saved.vue'
import Backoffice from "@/pages/Backoffice.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/saved', component: Saved },
        { path: '/backoffice', component: Backoffice }
    ]
})
