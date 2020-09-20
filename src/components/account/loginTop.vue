<template>
    <div class="login-top">
        <div>
            <router-link tag="a" to="/">
                <img
                    src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                    alt="美团首页"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.login-top {
    width: 980px;
    height: 47px;
    margin: 40px auto 30px;
    // border: 1px solid black;
    a img {
        width: 130px;
        height: 47px;
    }
}
</style>
