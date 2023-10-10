import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import AddCourseView from '../views/AddCourseView.vue'
import UpdateCourseView from '../views/UpdateCourseView.vue'

        const routes = [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/about',
                name: 'about',
                component: AboutView
            },
            {
                path: '/services',
                name: 'services',
                component: ServicesView
            },
            {
                path: '/addcourse',
                name: 'addcourse',
                component: AddCourseView
            },
            {
                path: '/updatecourse/:course',
                name: 'updatecourse',
                component: UpdateCourseView
            }
        ];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
