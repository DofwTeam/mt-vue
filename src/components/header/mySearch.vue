<template>
    <el-row class="my-search" style="box-sizing:content-box">
        <search-left />
        <search-input />
    </el-row>
</template>

<script>
import SearchLeft from './searchLeft'
import SearchInput from './searchInput'

export default {
    components: {
        SearchLeft,
        SearchInput
    }
}
</script>

<style>
.my-search {
    width: 1190px;
    height: 122px;
    margin: 0 auto;
    padding-bottom: 35px;
    /* border: 1px solid black; */
}
</style>
