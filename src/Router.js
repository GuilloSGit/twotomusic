import Vue from 'vue'
import VueRouter from 'vue-router'
import * as page from './pages';

Vue.use(VueRouter)

// Pages
const routes = [
    { path: '/', component: page.WellcomePage },
    { path: '/music', component: page.MusicPage },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
})

export default router