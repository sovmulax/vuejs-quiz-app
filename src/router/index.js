import { createRouter, createWebHistory } from "vue-router";
import AllQuiz from '../views/AllQuiz.vue'
import Details from '../views/Details.vue'

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
        }
    ]
})

export default router