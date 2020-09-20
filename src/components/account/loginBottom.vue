<template>
    <div class="login-bottom">
        <div class="list">
            <ul>
                <li>关于美团</li>
                <li>加入我们</li>
                <li>商家入驻</li>
                <li>帮助中心</li>
                <li>美团手机版</li>
            </ul>
        </div>
        <p>
            ©2020 <a href="#">美团网团购</a> 美团网团购 meituan.com
            京ICP证070791号京公网安备11010502025545号
        </p>
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
.login-bottom {
    width: 980px;
    height: 88px;
    margin: 0px auto 30px;
    // border: 1px solid black;
    div.list {
        width: 100%;
        height: 24px;
        padding: 12px 0;
        margin-bottom: 20px;
        color: #999999;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        ul {
            overflow: hidden;
            li {
                float: left;
                // width: 48px;
                font-size: 12px;
                padding: 0 16px;
                margin: 5px 0;
                border-right: 1px solid #ccc;
                &:nth-of-type(1) {
                    padding-right: 16px;
                }
            }
        }
    }
    p {
        font-size: 12px;
        color: #999999;
    }
}
</style>
