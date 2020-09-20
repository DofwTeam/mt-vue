<template>
    <el-row>
        <home-main />
        <home-movie />
    </el-row>
</template>

<script>
import HomeMain from '@/components/main/home/homeMain'
import HomeMovie from '@/components/main/home/homeMovie'

export default {
    components: {
        HomeMain,
        HomeMovie
    }
}
</script>

<style></style>
