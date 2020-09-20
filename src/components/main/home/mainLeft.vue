<template>
    <el-col :span="5">
        <div class="main-left">
            <dl class="list">
                <dt><h3>全部分类</h3></dt>
                <router-link
                    tag="dd"
                    to="/other"
                    v-for="(item, num) in leftListDetail"
                    :key="item.ID"
                    @mouseover.native="getDetail(num)"
                    @mouseout.native="evanishDetail(num)"
                >
                    <i :class="item.icon"></i>
                    <span v-for="(name, index) in item.title" :key="index"
                        >{{ name }}{{ item.title | bslashShow(index) }}</span
                    >
                    <span class="hotKey" v-if="item.hot">HOT</span>
                    <i class="el-icon-caret-right"></i>
                </router-link>
            </dl>
            <div
                class="detail"
                v-if="showDetail"
                @mouseenter="clearTimer"
                @mouseleave="isEvanish"
            >
                <template v-for="(item, index) in detail">
                    <dl :key="index">
                        <dt>
                            <router-link tag="a" to="/other">{{
                                item.title
                            }}</router-link>
                            <router-link tag="a" to="/other">
                                更多<i
                                    class="el-icon-position"
                                    style="fontSize:13px"
                                ></i>
                            </router-link>
                        </dt>
                        <dd v-for="(name, num) in item.content" :key="num">
                            <router-link to="/other">{{ name }}</router-link>
                        </dd>
                    </dl>
                </template>
            </div>
        </div>
    </el-col>
</template>

<script>
export default {
    created() {
        this.$http.get('/api/page/leftList').then(res => {
            this.leftListDetail = res
        })
    },
    data() {
        return {
            leftListDetail: [],
            detail: [],
            showDetail: false,
            timer: null
        }
    },
    filters: {
        bslashShow(val, index) {
            if (val.length > 1 && index < val.length - 1) {
                return ' /'
            } else {
                return ''
            }
        }
    },
    methods: {
        getDetail(num) {
            clearTimeout(this.timer)
            this.detail = this.leftListDetail[num].children
            this.showDetail = true
        },
        evanishDetail() {
            const seft = this
            this.timer = setTimeout(() => {
                seft.showDetail = false
            }, 200)
        },
        clearTimer() {
            // 为了解决时间到了，直接消失。
            clearTimeout(this.timer)
        },
        isEvanish() {
            this.showDetail = false
        }
    },
    components: {}
}
</script>

<style>
.main-left {
    position: relative;
    background-color: #fff;
    height: 416px;
    /* border: 1px solid #E5E5E5; */
}
.main-left .list {
    position: absolute;
    top: -60px;
    width: 100%;
    height: 476px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    /* border-bottom: none; */
}
.main-left .list dt {
    padding: 15px 0 0 0;
    margin-bottom: 10px;
    height: 50px;
    box-sizing: border-box;
}
.main-left .list dt h3 {
    margin-left: 15px;
}
/* dd 样式 */
.main-left .list dd {
    position: relative;
    padding: 2px 12px;
}
.main-left .list dd:hover {
    background-color: #ff960014;
}
.main-left .list dd i::before {
    font-size: 13px;
}
.main-left .list dd i:nth-of-type(2) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
}
.main-left .list dd span {
    margin: 0 0 0 7px;
    color: #646464;
    font-size: 13px;
}
.main-left .list dd:hover span {
    color: #222222;
    font-weight: bold;
}
.main-left .list dd span.hotKey {
    color: #222222;
    font-size: 12px;
    background-color: #fff3cc;
    border-radius: 10px;
    padding: 0 7px;
    margin-left: 5px;
    transform: scale(0.9);
}
.main-left .list dd:hover span.hotKey {
    font-weight: 400;
    background: linear-gradient(to bottom right, #ffd000, #ffbd00);
}
/* detail 部分样式 */
.main-left .detail {
    position: relative;
    left: 100%;
    width: 400px;
    height: 416px;
    padding: 0 30px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-left: none;
    z-index: 1000;
}
.main-left .detail dl::after {
    content: '';
    clear: both;
    display: block;
}
.main-left .detail dt {
    position: relative;
    width: 100%;
    height: 22px;
    margin-top: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
}
.main-left .detail dt a:nth-of-type(1) {
    /* position: absolute;
  left: 0; */
    float: left;
    font-size: 16px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
}
.main-left .detail dt a:nth-of-type(2) {
    /* position: absolute;
  right: 0; */
    float: right;
    font-size: 13px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
}
.main-left .detail dd {
    font-size: 12px;
    float: left;
    margin: 10px 16px 0 0px;
}
.main-left .detail dd a:hover {
    color: red;
}
</style>
