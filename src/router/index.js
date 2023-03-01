import { createRouter, createWebHistory } from "vue-router";
import AllQuiz from '../views/AllQuiz.vue'
import Details from '../views/Details.vue'
import ERROR404 from '../views/404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quiz',
            component: AllQuiz
        },
        {
            path: '/quiz/:id',
            name: 'details',
            component: Details,
            // children: [
            //     {
            //         path: "otherdetails",
            //         component: Details
            //     }
            // ]
        },
        {
            path:'/test',
            redirect: '/'
        },
        {
            path: '/:catchall(.*)*',
            name: 'not found',
            component: ERROR404
        }
    ]
})

export default router