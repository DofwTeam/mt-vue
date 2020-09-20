<template>
    <div class="login-center">
        <div class="left-img">
            <img
                src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
                alt=""
            />
        </div>
        <div class="enter">
            <form action="" class="common">
                <div class="validateInfo">
                    <div v-if="resInfo.isBlock">
                        <i class="el-icon-warning"></i>
                        <span>{{ resInfo.info }}</span>
                    </div>
                </div>
                <div class="login-type">
                    <span>账号登陆</span>
                    <router-link tag="a" to="/account/register">
                        手机动态码登录
                        <i class="el-icon-mobile-phone"></i>
                    </router-link>
                </div>
                <div class="login-id">
                    <span>
                        +86
                        <i class="el-icon-arrow-right"></i>
                    </span>
                    <input type="hidden" value="86" />
                    <input
                        type="text"
                        id="login-iphone"
                        placeholder="手机号"
                        name="iphone"
                        maxlength="15"
                        class="iphone"
                        @focus="focusHide"
                        v-model="loginData.iphone"
                    />
                </div>
                <div class="login-password">
                    <i class="el-icon-lock"></i>
                    <input
                        type="password"
                        id="login-password"
                        placeholder="密码"
                        name="password"
                        class="password"
                        @focus="focusHide"
                        v-model="loginData.password"
                    />
                </div>
                <div class="forget-password">
                    <router-link tag="a" to="/account/register"
                        >忘记密码？</router-link
                    >
                </div>
                <div class="submit-btn">
                    <input
                        type="text"
                        readonly
                        name="commit"
                        value="登录"
                        @click="loginSubmit"
                    />
                </div>
                <div class="register">
                    还没有账号？
                    <router-link tag="a" to="/account/register"
                        >免费注册</router-link
                    >
                </div>
            </form>
            <div class="thirdPlat">
                <span class="title">用合作网站账号登录</span>
                <div>
                    <span class="qq">QQ</span>
                    <span class="weibo">WB</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import serverData from '@/utils/login/serverData.js'
export default {
    data() {
        return {
            loginData: {
                iphone: '',
                password: ''
            },
            resInfo: {
                info: '',
                isBlock: false
            }
        }
    },
    methods: {
        focusHide() {
            this.resInfo.isBlock = false
        },
        loginSubmit() {
            // 提交数据，整理
            const data = serverData()
            // 请求前，判断是否为空 3中情况
            if (this.loginData.iphone && this.loginData.password) {
                this.$http
                    .post('/api/mt/login', {
                        data: data
                    })
                    .then(res => {
                        if (res.isSuccess) {
                            // 跳转
                            this.$router.push({
                                name: 'homePage'
                            })
                        } else {
                            this.resInfo.isBlock = true
                            this.resInfo.info = res.message
                        }
                    })
            } else {
                if (!this.loginData.iphone) {
                    this.resInfo.info = '请输入账号'
                } else if (!this.loginData.password) {
                    this.resInfo.info = '请输入密码'
                } else {
                    this.resInfo.info = '请输入账号和密码'
                }
                this.resInfo.isBlock = true
            }
        }
    }
}
</script>

<style lang="scss">
.login-center {
    width: 980px;
    height: 370px;
    margin: 0px auto 70px;
    // border: 1px solid black;
    .left-img {
        float: left;
        margin-right: 115px;
        img {
            width: 480px;
            height: 370px;
        }
    }
    .enter {
        float: left;
        margin: 0 auto;
        width: 270px;
        border-radius: 20px;
        // background: #FFF;
        form {
            div.validateInfo {
                width: 100%;
                height: 30px;
                margin-bottom: 8px;
                div {
                    background-color: goldenrod;
                    border-radius: 10px;
                    padding: 5px;
                    box-sizing: border-box;
                    i {
                        font-size: 20px;
                        vertical-align: -2px;
                    }
                    span {
                        margin-left: 5px;
                        font-size: 13px;
                        color: brown;
                    }
                }
            }
            div.login-type {
                position: relative;
                height: 18px;
                width: 100%;
                span {
                    font-size: 14px;
                    position: absolute;
                    left: 0;
                }
                a {
                    font-size: 13px;
                    position: absolute;
                    right: 0;
                }
            }
            input {
                border: 0;
                outline: none;
            }
            div.login-id {
                width: 268px;
                height: 34px;
                margin: 8px 0;
                font-size: 14px;
                line-height: 32px;
                border: 1px solid #cccccc;
                input {
                    width: 200px;
                    height: 30px;
                    padding: 5px;
                    border: none;
                    border-style: none;
                    max-width: 200px !important;
                    box-sizing: border-box;
                    background-color: #f8f8f8;
                }
            }
            div.login-password {
                position: relative;
                width: 270px;
                height: 36px;
                padding: 8px 0;
                font-size: 14px;
                line-height: 36px;
                i {
                    position: absolute;
                    left: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 20px;
                }
                input {
                    width: 100%;
                    height: 100%;
                    line-height: 24px;
                    // text-align: center;
                    padding: 5px 5px 5px 33px;
                    border: 1px solid #cccccc;
                    box-sizing: border-box;
                    background-color: #f8f8f8;
                }
            }
            div.forget-password {
                width: 100%;
                height: 18px;
                padding-bottom: 8px;
                overflow: hidden;
                a {
                    font-size: 12px;
                    float: right;
                    margin-right: 10px;
                    color: darkorange;
                }
            }
            div.submit-btn {
                width: 100%;
                height: 35px;
                padding: 8px 0;
                input {
                    width: 100%;
                    height: 35px;
                    padding: 7px 20px 6px;
                    box-sizing: border-box;
                    color: #222;
                    background-image: linear-gradient(
                        135deg,
                        #ffd000 0,
                        #ffbd00 100%
                    );
                    border-width: 0;
                    box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
                    background-size: 100%;
                    cursor: pointer;
                    text-align: center;
                }
            }
            div.register {
                width: 100%;
                font-size: 14px;
                a {
                    color: darkorange;
                }
            }
        }
        .thirdPlat {
            position: relative;
            width: 270px;
            height: 49px;
            margin-top: 20px;
            color: #666;
            border-top: 1px solid #ccc;
            span.title {
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 150px;
                text-align: center;
                font-size: 14px;
                font-weight: 400;
                background: #fff;
            }

            > div {
                padding-left: 100px;
                width: 182px;
                height: 18px;
                position: absolute;
                bottom: 0;
                overflow: hidden;
                span {
                    float: left;
                    width: 24px;
                    height: 24px;
                    font-size: 14px;
                    margin-right: 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    &:nth-of-type(1) {
                        background-color: darkgoldenrod;
                    }
                    &:nth-of-type(2) {
                        background-color: darkcyan;
                    }
                }
            }
        }
    }
}
</style>
