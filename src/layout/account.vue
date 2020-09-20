<template>
    <div class="login">
        <el-container>
            <el-header height="" style="padding:0">
                <router-view name="top" />
            </el-header>
            <el-main height="" style="overflow:visible">
                <router-view name="center" />
            </el-main>
            <el-footer height="">
                <router-view name="bottom" />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss"></style>
