<template>
  <el-row class="main-continer">
    <main-left />
    <main-center />
    <main-right />
  </el-row>
</template>

<script>
import mainLeft from './mainLeft'
import mainCenter from './mainCenter'
import mainRight from './mainRight'

export default {
  components: {
    mainLeft,
    mainCenter,
    mainRight
  }
}
</script>

<style>
.main-continer{
  position: relative;
  width: 1190px;
  height: 425px;
  margin:0 auto;
  padding-top: 10px;
  /* border: 1px solid black; */
  overflow: visible;
}
</style>
