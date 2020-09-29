<template>
    <div class="userinfo">
        <h3>想要有吃饭，必须表达心情！</h3>
        <div class="comment">
            <ul>
                <li v-for="(item, index) in message" :key="index">
                    <span>{{ item.date }}</span>
                    <span>{{ item.text }}</span>
                </li>
            </ul>
        </div>
        <div class="message">
            <el-input
                placeholder="请输入20字符以内"
                :value="value"
                @input="input"
                @keyup.enter.native="keydown"
                style="width:450px"
            ></el-input>
            <el-button type="primary" @click="click">
                Message
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.fetch()
    },
    data() {
        return {
            value: '',
            message: []
        }
    },
    methods: {
        input(e, value) {
            e = e.slice(0, 20)
            this.value = e
        },
        async keydown(e) {
            // console.log(e)
            await this.add()
            await this.fetch()
        },
        async click() {
            await this.add()
            await this.fetch()
        },
        async fetch() {
            await this.$http.get('/api/message/get').then(res => {
                res.forEach(item => {
                    item.date = item.date.substring(0, 19)
                })
                this.message = res.reverse()
            })
        },
        async add() {
            if (this.value !== '') {
                await this.$http.post('/api/message/add', {
                    data: {
                        value: this.value
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
.userinfo {
    width: 980px;
    height: 500px;
    margin: 0 auto;
    background-color: burlywood;
    border-radius: 20px;
    h3 {
        width: 100%;
        text-align: center;
        padding: 10px;
        border-bottom: 2px solid #999;
        box-sizing: border-box;
        cursor: pointer;
    }
    div.comment {
        width: 500px;
        height: 300px;
        margin: 0 auto;
        ul {
            margin-top: 20px;
            li {
                padding: 0 20px;
                height: 35px;
                line-height: 35px;
                span {
                    margin-right: 20px;
                }
            }
            li:not(:last-of-type) {
                border-bottom: 2px solid #999;
            }
        }
    }
    div.message {
        padding-top: 40px;
        width: 550px;
        margin: 0 auto;
        button {
            width: 100px;
            height: 40px;
            border: none;
            border-radius: 5px 5px 5px 5px;
        }
    }
}
</style>
