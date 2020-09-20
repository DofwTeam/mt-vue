<template>
    <div class="page-default">
        <el-container>
            <el-header height="" :style="commonStyle">
                <my-header />
            </el-header>
            <el-main height="" :style="commonStyle">
                <router-view />
            </el-main>
            <el-footer height="" :style="commonStyle">
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import myHeader from '../components/header/myHeader'
import myFooter from '../components/footer/myFooter'

export default {
    data() {
        return {
            commonStyle: { padding: '0px', overflow: 'visible' }
        }
    },
    components: {
        myHeader,
        myFooter
    }
}
</script>

<style></style>
