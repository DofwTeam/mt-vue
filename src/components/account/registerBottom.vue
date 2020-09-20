<template>
    <div class="register-bottom">
        <div>
            <router-link tag="a" to="/">©meituan.com </router-link>&nbsp;
            <router-link tag="a" to="/">京ICP证070791号</router-link>&nbsp;
            <p>京公网安备11010502025545号</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.register-bottom {
    position: relative;
    text-align: center;
    height: 20px;
    div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        color: #999;
        font-size: 13px;
        a {
            float: left;
            margin-right: 5px;
        }
        p {
            float: left;
        }
    }
}
</style>
