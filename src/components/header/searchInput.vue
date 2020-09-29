<template>
    <el-col :span="18" class="search-input">
        <el-row class="input-position">
            <el-col :span="12">
                <el-input
                    :value="input"
                    @input="searchData"
                    @blur="disappear"
                    @focus="appear"
                    placeholder="请输入内容"
                ></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="hot-word"></div>
            </el-col>
        </el-row>
        <div class="search-box" v-show="searchBox">
            <div class="has" v-if="isHas">
                <el-row class="title">
                    <el-col :span="4">
                        <h4>最近搜索</h4>
                    </el-col>
                    <el-col class="delate-record" :span="6">
                        <span @click="delateCache">删除搜索历史</span>
                    </el-col>
                </el-row>
                <ul>
                    <li v-for="(item, index) in historyData" :key="index">
                        <router-link tag="a" to="/">{{ item }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="no-has" v-else>
                <ul>
                    <li
                        v-for="(item, index) in requestSearch"
                        @click="cacheData"
                        :key="index"
                    >
                        <router-link tag="a" to="/">{{ item }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </el-col>
</template>

<script>
import searchTools from '@/utils/headerSearch/searchInput.js'

export default {
    data() {
        return {
            input: '',
            searchBox: false,
            hasData: false,
            historyData: [],
            requestSearch: ''
        }
    },
    methods: {
        cacheData(e) {
            // 历史记录click处理函数。
            const data = e.target.innerHTML
            this.historyData.push(data)
        },
        searchData(e) {
            // input事件处理函数：
            // 一触发input事件，就只让显示非历史记录。
            this.hasData = false
            this.input = e
            // 防抖请求数据。
            searchTools.debounce(
                this,
                function() {
                    this.$http
                        .get('/api/word', {
                            params: {
                                word: this.input
                            }
                        })
                        .then(res => {
                            this.requestSearch = res
                        })
                },
                200
            )
        },
        appear(e) {
            // focus事件处理函数
            if (this.historyData.length !== 0 && e.target.value === '') {
                this.hasData = true
            } else {
                this.hasData = false
            }
            this.searchBox = true
        },
        disappear() {
            // blur事件处理函数
            setTimeout(() => {
                // 事件也是一个，异步函数哦。理解用
                this.searchBox = false
            }, 200)
        },
        delateCache() {
            // 删除点击事件处理函数
            this.historyData.splice(0)
        }
    },
    computed: {
        isHas() {
            return this.searchBox && this.hasData
        }
    }
}
</script>

<style>
.search-input {
    position: relative;
    padding-top: 28px;
}
.search-input .input-position {
    position: relative;
    left: 30px;
}
.search-input .hot-word {
    position: relative;
    left: 30px;
    padding: 8px 0 0 12px;
    height: 25px;
    box-sizing: border-box;
    width: 535px;
}
.search-input .search-box {
    position: absolute;
    left: 30px;
    top: 66px;
    width: 442px;
    border: 2px solid #ddd;
    border-radius: 3px 3px 5px 5px;
    color: #999;
    background-color: #fff;
    font-size: 12px;
    text-align: left;
    z-index: 10000;
}
.search-input .search-box .deplate-record > span {
    cursor: pointer;
}
.search-input .search-box:hover {
    display: block;
    /* height: 200px; */
}
.search-input .search-box ul {
    padding: 10px;
}
.search-input .search-box ul li > a {
    padding: 0 5px 2px 5px;
    display: block;
    width: 100%;
    box-sizing: border-box;
}
.search-input .search-box ul li > a:hover {
    background-color: cadetblue;
    color: orangered;
}
.search-input .search-box .has > .el-row {
    padding: 2px;
}
.search-input .search-box .has .delate-record {
    /* font-size: 14px; */
    float: right;
}
</style>
