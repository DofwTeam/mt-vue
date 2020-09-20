<template>
  <div class="my-header">
    <el-row><my-nav /></el-row>
    <el-row class="search-bg"><my-search /></el-row>
  </div>
</template>

<script>
import myNav from './myNav.vue'
import mySearch from './mySearch.vue'

export default {

  components: {
    myNav,
    mySearch
  }
}
</script>

<style>
.my-header .search-bg{
  background-color: #fff;
}
</style>
