<template>
    <el-col :span="4">
        <div class="main-right">
            <div class="top">
                <div>
                    <img
                        src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                        alt=""
                    />
                </div>
                <p>Hi！你好</p>
                <div>
                    <el-button class="button" round>
                        <router-link tag="a" to="/account/register"
                            >注册</router-link
                        >
                    </el-button>
                    <el-button class="button" round>
                        <router-link tag="a" to="/account/login"
                            >立即登录</router-link
                        >
                    </el-button>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <img
                        src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                        alt=""
                    />
                </div>
                <div>
                    <p>美团APP手机版</p>
                    <p><span>1元起</span>吃喝玩乐</p>
                </div>
            </div>
        </div>
    </el-col>
</template>

<script>
export default {}
</script>

<style>
.main-right {
    position: relative;
    width: 100%;
    height: 416px;
}
.main-right .top {
    width: 100%;
    height: 240px;
    padding-top: 30px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
}
.main-right .top > div {
    text-align: center;
    margin-bottom: 4px;
}
.main-right .top > div img {
    width: 55px;
    height: 55px;
    margin: 4px;
}
.main-right .top p {
    margin: 0px 65px;
}
.main-right .top .button {
    width: 118px;
    height: 38px;
    margin: 10px 0 15px 0;
}
.main-right .top .button:nth-of-type(2) {
    margin: 0;
}
.main-right .bottom {
    margin: 10px 0 0 0;
    width: 100%;
    height: 165px;
    box-sizing: border-box;
    background-color: #fff;
}
.main-right .bottom div:nth-of-type(1) {
    margin-top: 10px;
    text-align: center;
}
.main-right .bottom div:nth-of-type(1) img {
    width: 95px;
    height: 95px;
}
.main-right .bottom div:nth-of-type(2) {
    text-align: center;
    font-size: 12px;
}
.main-right .bottom div:nth-of-type(2) span {
    color: red;
    margin-right: 5px;
}
</style>
