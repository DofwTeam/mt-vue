import Vue from 'vue'
import VueRouter from 'vue-router'
import pageDefault from '../layout/default.vue'
import Home from '@/components/main/home/home.vue'
import pageAccount from '@/layout/account.vue'
import loginTop from '@/components/account/loginTop.vue'
import loginBottom from '@/components/account/loginBottom.vue'
import loginCenter from '@/components/account/loginCenter.vue'
import registerCenter from '@/components/account/registerCenter.vue'
import registerTop from '@/components/account/registerTop.vue'
import registerBottom from '@/components/account/registerBottom.vue'
import userinfo from '@/components/account/userinfo.vue'
import other from '@/components/other.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/other',
            name: 'other',
            component: other
        },
        {
            path: '/',
            name: 'pageDefault',
            redirect: '/home',
            component: pageDefault,
            children: [
                {
                    path: 'home',
                    name: 'homePage',
                    props: true,
                    component: Home
                }
            ]
        },
        {
            path: '/account',
            name: 'pageAccount',
            component: pageAccount,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    components: {
                        top: loginTop,
                        center: loginCenter,
                        bottom: loginBottom
                    }
                },
                {
                    path: 'register',
                    name: 'register',
                    components: {
                        top: registerTop,
                        center: registerCenter,
                        bottom: registerBottom
                    }
                }
            ]
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            redirect: '/userinfo/info',
            component: pageDefault,
            meta: { verify: true },
            children: [
                {
                    path: 'info',
                    component: userinfo
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    const isVerify = to.matched.some(item => {
        return item.meta.verify === true
    })

    if (isVerify) {
        localStorage.token !== undefined ? next() : next('/account/login')
    } else {
        next()
    }
})

export default router
