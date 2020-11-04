import { createRouter, createWebHistory } from 'vue-router'

//Instantiate router
import dash from "@/components/dashboard.vue"
import view from "@/components/viewEmployee.vue"
import newEm from "@/components/newEmployee.vue"
import edit from "@/components/edit.vue"
import Profile from "@/components/profile.vue"



export const router = createRouter({
    routes: [
        {
            path: '/',
            component: dash,
            name: 'dash'
        },
        {
            path: '/view',
            component: view,
            name: 'view'
        },
        {
            path: '/new',
            component: newEm,
            name: 'new'
        },
        {
            path: '/edit/:employee_id',
            component: edit,
            name: 'edit'
        },
        {
            path: '/edit/:name',
            component: Profile,
            name: 'Profile'
        },
    ],
    history: createWebHistory()
})
