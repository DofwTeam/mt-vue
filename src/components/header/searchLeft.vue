<template>
    <el-col :span="6" class="search-left">
        <el-row>
            <el-col :span="13">
                <router-link tag="a" to="/"
                    ><img
                        src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                        alt=""
                /></router-link>
            </el-col>
            <el-col :span="11">
                <div class="xxx">NB</div>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>
export default {}
</script>

<style>
.search-left {
    padding: 28px 60px 40px 0;
}
.search-left img {
    /* width: 126px; */
    height: 46px;
    /* border: 1px solid black; */
}
.search-left .xxx {
    /* border: 1px solid black; */
    height: 46px;
    line-height: 46px;
    text-align: center;
}
</style>
