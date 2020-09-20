<template>
    <div class="top-box">
        <div class="register-top">
            <div class="wrapper">
                <router-link tag="a" to="/">
                    <img
                        src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                        alt=""
                    />
                </router-link>
                <div>
                    <span>已经有了美团账号？</span>
                    <router-link tag="a" to="/account/login">登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-box {
    border-bottom: 2px solid #cccccc;
    .register-top {
        width: 980px;
        margin: 0 auto;
        padding: 10px 0;
        color: #666666;

        .wrapper {
            overflow: hidden;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            img {
                float: left;
                left: 0;
                height: 36px;
            }
            div {
                float: right;
                span {
                    margin-right: 10px;
                }
                a {
                    padding: 3px 10px;
                    background-color: gold;
                    border-radius: 3px;
                }
            }
        }
    }
}
</style>
