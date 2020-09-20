<template>
    <div class="navLeft">
        <div class="adress">
            <i class="el-icon-location"></i>
            <span>{{ city }}</span>
            <router-link tag="a" class="change-city" to="/"
                >切换城市</router-link
            >
            <div class="ditail">
                [
                <a href="#">彰化</a>
                <a href="#">宜兰</a>
                <a href="#">太仓</a>
                ]
            </div>
        </div>
        <div class="register">
            <template v-if="isTokenExist">
                <router-link tag="a" class="enter" to="/account/login">{{
                    loginStatus
                }}</router-link>
                <router-link tag="a" to="/" @click.native="logout"
                    >退出</router-link
                >
            </template>
            <template v-else>
                <router-link tag="a" class="enter" to="/account/login">{{
                    loginStatus
                }}</router-link>
                <router-link tag="a" to="/account/register">注册</router-link>
            </template>
        </div>
    </div>
</template>

<script>
import jsk from 'jsonwebtoken'

export default {
    data() {
        return {
            isTokenExist: false,
            city: '上海',
            iphone: ''
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.isTokenExist = false
        }
    },
    computed: {
        loginStatus() {
            if (this.isTokenExist) {
                const token = jsk.decode(localStorage.token)
                return token.iphone
            }
            return '立即登录'
        }
    },
    created() {
        if (localStorage.token !== undefined) {
            this.isTokenExist = true
        } else {
            this.isTokenExist = false
        }
    }
}
</script>

<style>
.my-nav .navLeft {
    display: flex;
    /* justify-content: space-between; */
}
.my-nav .navLeft .ditail {
    display: inline-block;
}
.my-nav .navLeft a {
    margin: 0 4px;
}
.my-nav .navLeft a.change-city {
    padding: 0 2px;
    background: #f4f4f4;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    color: #666;
}
.my-nav .navLeft a:hover {
    color: red;
}

/* register登录 */
.my-nav .navLeft div.register {
    margin-left: 15px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}
.my-nav .navLeft div.register a {
    float: left;
    margin-left: 5px;
}
.my-nav .navLeft div.register a.enter {
    width: 80px;
    color: red;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}
</style>
