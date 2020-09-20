<template>
    <el-row class="my-nav">
        <el-col :span="10">
            <nav-left />
        </el-col>
        <el-col :span="14">
            <nav-right />
        </el-col>
    </el-row>
</template>

<script>
import navLeft from './navLeft'
import navRight from './navRight'

export default {
    data() {
        return {
            abc: '123'
        }
    },
    components: {
        navLeft,
        navRight
    }
}
</script>

<style>
.my-nav {
    /* position: relative; */
    font-size: 12px;
    color: #999;
    height: 40px;
    line-height: 40px;
    width: 1190px;
    margin: 0px auto;
}
</style>
