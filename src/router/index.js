import { createRouter, createWebHistory } from "vue-router";
import AllQuiz from '../views/AllQuiz.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quiz',
            component: AllQuiz
        }
    ]
})

export default router