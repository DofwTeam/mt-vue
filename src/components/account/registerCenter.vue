<template>
    <div class="register-center">
        <div class="wrapper">
            <div class="form">
                <form action="">
                    <!-- <div class="reqInfo">
                        <i></i>
                        <span>{{ responseInfo.info }}</span>
                    </div> -->
                    <div class="iphone-inp">
                        <div>
                            <label for="iphone">手机号</label>
                            <input
                                type="text"
                                id="iphone"
                                name="iphone"
                                pattern="[0-9]{11}"
                                required="required"
                                title="请输入11位有效手机号码"
                                @focus="iphoneFocus"
                                @blur="iphoneBlur"
                                v-model="submitData.iphone"
                            />
                            <span v-if="iphoneInpHint.isBlock">
                                <i
                                    class="el-icon-warning"
                                    v-if="iphoneInpHint.isError"
                                ></i>
                                {{ iphoneInpHint.hint }}</span
                            >
                            <i
                                class="el-icon-success"
                                v-if="iphoneInpHint.isYes"
                            ></i>
                        </div>
                        <input type="button" value="免费获取短信动态码" />
                    </div>
                    <div class="dynamicPass-inp">
                        <label for="dynamicPass">短信动态验证</label>
                        <input
                            type="text"
                            id="dynamicPass"
                            name="dynamicPass"
                            @focus="iphoneFocus"
                            @blur="iphoneBlur"
                        />
                        <span v-if="dynamicInpHint.isBlock">
                            <i class="el-icon-warning"></i>
                            {{ dynamicInpHint.hint }}</span
                        >
                        <i
                            class="el-icon-success"
                            v-if="dynamicInpHint.isYes"
                        ></i>
                    </div>
                    <div class="createPass-inp">
                        <div class="create-pass">
                            <label for="createPass">创建密码</label>
                            <input
                                type="password"
                                id="createPass"
                                name="createPass"
                                class="createPass"
                                @focus="iphoneFocus"
                                @blur="iphoneBlur"
                            />
                            <span v-if="createInpHint.isBlock">
                                <i class="el-icon-warning"></i>
                                {{ createInpHint.hint }}</span
                            >
                            <i
                                class="el-icon-success"
                                v-if="createInpHint.isYes"
                            ></i>
                        </div>
                        <div class="security-strength">
                            <span
                                :class="[
                                    {
                                        low: createInpHint.strengthLevel > 0
                                    },
                                    {
                                        mid: createInpHint.strengthLevel > 1
                                    },
                                    {
                                        hight: createInpHint.strengthLevel > 2
                                    }
                                ]"
                                >弱</span
                            >
                            <span
                                :class="[
                                    {
                                        mid: createInpHint.strengthLevel > 1
                                    },
                                    {
                                        hight: createInpHint.strengthLevel > 2
                                    }
                                ]"
                                >中</span
                            >
                            <span
                                :class="[
                                    {
                                        hight: createInpHint.strengthLevel > 2
                                    }
                                ]"
                                >强</span
                            >
                        </div>
                    </div>
                    <div class="affirmPass-inp">
                        <label for="affirmPass">确认密码</label>
                        <input
                            type="password"
                            id="affirmPass"
                            name="affirmPass"
                            @focus="iphoneFocus"
                            @blur="iphoneBlur"
                            v-model="submitData.password"
                        />
                        <span v-if="affirmInpHint.isBlock">
                            <i class="el-icon-warning"></i>
                            {{ affirmInpHint.hint }}</span
                        >
                        <i
                            class="el-icon-success"
                            v-if="affirmInpHint.isYes"
                        ></i>
                    </div>
                    <div class="submit-inp">
                        <input
                            type="text"
                            readonly
                            @click="registerSubmit"
                            value="同意一下协议并注册"
                        />
                    </div>
                </form>
            </div>

            <div class="item">
                <router-link tag="a" to="/"
                    >《美团点评用户服务协议》</router-link
                >
                <router-link tag="a" to="/">《美团点评隐私政策》</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import registerUtils from '@/utils/register/validatorCss.js'
import serverData from '@/utils/register/serverData.js'

export default {
    data() {
        return {
            iphoneInpHint: {
                hint: '注册成功后 , 全美团通用',
                isBlock: true,
                isError: false,
                isYes: false
            },
            dynamicInpHint: {
                hint: '请输入短信验证码',
                isBlock: false,
                isYes: false
            },
            createInpHint: {
                hint: '请输入密码',
                isBlock: false,
                isYes: false,
                strengthLevel: 0
            },
            affirmInpHint: {
                hint: '两次输入的密码证不一致，请核对！',
                isBlock: false,
                isYes: false
            },
            submitData: {
                iphone: '',
                password: ''
            }
        }
    },
    methods: {
        registerSubmit() {
            const arrResult = [
                this.iphoneInpHint.isYes,
                this.dynamicInpHint.isYes,
                this.createInpHint.isYes,
                this.affirmInpHint.isYes
            ]
            const body = serverData(this.submitData)

            const isRequest = arrResult.every((item, index) => {
                if (!item) {
                    switch (index) {
                        case 0:
                            alert('手机号输入有误')
                            break
                        case 1:
                            alert('验证码有误')
                            break
                        case 2:
                            alert('创建密码有误')
                            break
                        case 3:
                            alert('确认密码有误')
                            break
                    }
                }
                return item
            })
            if (isRequest) {
                this.$http
                    .post('/api/mt/register', {
                        data: body
                    })
                    .then(res => {
                        alert(res.info)
                    })
            }
        },
        iphoneFocus(e) {
            registerUtils.focusChange(this, e)
        },
        iphoneBlur(e) {
            const inputName = e.target.name
            const value = e.target.value
            if (inputName === 'iphone') {
                registerUtils.isEleven(value, data => {
                    this.iphoneInpHint.hint = data.hint
                    this.iphoneInpHint.isBlock = data.isBlock
                    this.iphoneInpHint.isError = data.isError
                    this.iphoneInpHint.isYes = data.isYes
                })
            } else if (inputName === 'dynamicPass') {
                registerUtils.verifyCode(value, data => {
                    this.dynamicInpHint.hint = data.hint
                    this.dynamicInpHint.isBlock = data.isBlock
                    this.dynamicInpHint.isYes = data.isYes
                })
            } else if (inputName === 'createPass') {
                registerUtils.createPass(value, data => {
                    this.createInpHint.hint = data.status
                    this.createInpHint.isBlock = data.isSpanBlock
                    this.createInpHint.isYes = data.isYes
                    this.createInpHint.strengthLevel = data.strengthLevel
                })
            } else if (inputName === 'affirmPass') {
                const createIputValue = document.getElementsByClassName(
                    'createPass'
                )[0].value

                registerUtils.affirmPass(value, createIputValue, data => {
                    this.affirmInpHint.hint = data.hint
                    this.affirmInpHint.isYes = data.isYes
                    this.affirmInpHint.isBlock = data.isBlock
                })
            }
        }
    }
}
</script>

<style lang="scss">
.register-center {
    width: 980px;
    padding-top: 30px;
    margin: 0 auto 30px auto;
    .wrapper {
        width: 100%;
        div.item {
            padding: 3px 10px 3px 110px;
            margin-bottom: 8px;
            a {
                font-size: 13px;
                color: coral;
            }
        }
        div.form {
            input {
                border: 0;
                outline: none;
            }
            @mixin outermostShell-div {
                width: 870px;
                padding: 8px 0 8px 110px;
                height: 36px;
                line-height: 36px;
                position: relative;
            }
            @mixin common-label-input-sapn {
                label {
                    position: absolute;
                    left: 0px;
                    top: 11px;
                    width: 100px;
                    height: 20px;
                    line-height: 20px;
                    text-align: right;
                    font-size: 14px;
                    padding-top: 6px;
                }
                input {
                    width: 248px;
                    height: 24px;
                    padding: 5px;
                    border: 1px solid #ccc;
                }
                span {
                    width: 132px;
                    height: 24px;
                    font-size: 12px;
                    color: #999;
                    margin-left: 4px;
                }
                i {
                    font-size: 20px;
                    vertical-align: middle;
                }
            }
            div.iphone-inp {
                @include outermostShell-div;
                height: 60px;
                > div {
                    @include common-label-input-sapn;
                }
                > input {
                    cursor: pointer;
                    color: #333;
                    background-color: #dedede;
                    background-size: 100%;
                    background-image: linear-gradient(
                        to bottom,
                        #f7f7f7,
                        #dedede
                    );
                    border: 1px solid #e3e3e3;
                    border-bottom: 1px solid #aaa;
                    padding: 1px 8px;
                }
            }
            div.dynamicPass-inp {
                @include outermostShell-div;
                @include common-label-input-sapn;
            }
            div.createPass-inp {
                @include outermostShell-div;
                height: 60px;
                div.create-pass {
                    @include common-label-input-sapn;
                }
                div.security-strength {
                    display: flex;
                    justify-content: space-between;
                    width: 248px;
                    padding: 10px 5px 5px 5px;
                    flex-grow: 1;
                    span {
                        width: 33%;
                        height: 20px;
                        font-size: 12px;
                        line-height: 20px;
                        text-align: center;
                        background-color: #cccccc;
                        box-sizing: border-box;
                        &.low {
                            background-color: wheat;
                        }
                        &.mid {
                            background-color: goldenrod;
                        }
                        &.hight {
                            background-color: green;
                        }
                    }
                }
            }
            div.affirmPass-inp {
                @include outermostShell-div;
                @include common-label-input-sapn;
            }
            div.submit-inp {
                @include outermostShell-div;
                input {
                    vertical-align: middle;
                    text-align: center;
                    // width: 258px;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 7px 20px 8px;
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
                }
            }
        }
    }
}
</style>
