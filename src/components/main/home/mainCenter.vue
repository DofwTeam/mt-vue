<template>
    <el-col :span="15">
        <div class="main-center">
            <el-row class="theme">
                <ul>
                    <li class="font-color1">
                        <router-link tag="a" to="/other">美团外卖</router-link>
                    </li>
                    <li class="font-color2">
                        <router-link tag="a" to="/other">猫眼电影</router-link>
                    </li>
                    <li class="font-color3">
                        <router-link tag="a" to="/other">美团酒店</router-link>
                    </li>
                    <li class="font-color4">
                        <router-link tag="a" to="/other"
                            >民宿／公寓</router-link
                        >
                    </li>
                    <li class="font-color5">
                        <router-link tag="a" to="/other">商家入驻</router-link>
                    </li>
                    <li class="font-color6">
                        <router-link tag="a" to="/other">美团公益</router-link>
                    </li>
                </ul>
            </el-row>
            <el-row class="middle">
                <div class="carousel">
                    <el-carousel height="240px">
                        <el-carousel-item
                            v-for="(item, index) in images"
                            :key="index"
                        >
                            <router-link to="/other"
                                ><img :src="item.url" alt=""
                            /></router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <router-link
                    tag="div"
                    class="right-area-pic"
                    to="/other"
                ></router-link>
            </el-row>
            <el-row class="bottom">
                <router-link class="pic-1" tag="div" to="/other"></router-link>
                <router-link class="pic-2" tag="div" to="/other"></router-link>
                <router-link class="pic-3" tag="div" to="/other"></router-link>
            </el-row>
        </div>
    </el-col>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    url:
                        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                },
                {
                    url:
                        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
                },
                {
                    url:
                        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                },
                {
                    url:
                        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                }
            ]
        }
    }
}
</script>

<style>
.main-center {
    position: relative;
    height: 416px;
    /* border: 1px solid black; */
}
.main-center .theme {
    position: absolute;
    top: -45px;
    left: 20px;
}
.main-center .theme ul {
    overflow: hidden;
}
.main-center .theme ul li {
    float: left;
}
.main-center .theme ul li a {
    margin: 0 20px;
    color: #222;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
}
.main-center .theme ul li.font-color1 a:hover {
    color: yellowgreen;
}
.main-center .theme ul li.font-color2 a:hover {
    color: red;
}
.main-center .theme ul li.font-color3 a:hover {
    color: lightcoral;
}
.main-center .theme ul li.font-color4 a:hover {
    color: coral;
}
.main-center .theme ul li.font-color5 a:hover {
    color: aquamarine;
}
.main-center .theme ul li.font-color6 a:hover {
    color: lightgreen;
}
/* cacousel 部分 */
.main-center .middle .carousel {
    width: 570px;
    height: 240px;
    box-sizing: border-box;
}
.main-center .middle .carousel img {
    width: 570px;
    height: 240px;
}
.main-center .middle .right-area-pic {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10px;
    width: 150px;
    height: 240px;
    background-image: url('http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg');
    background-size: cover;
    background-position: center center;
}
.main-center .bottom {
    position: absolute;
    top: 240px;
    left: 0;
}
.main-center .bottom::after {
    content: '';
    clear: both;
    display: block;
}
.main-center .bottom div {
    float: left;
    margin: 10px 10px 0 0;
    height: 165px;
    background-size: cover;
    background-position: center center;
    box-sizing: border-box;
}
.main-center .bottom div.pic-1 {
    left: 0;
    width: 280px;
    background-image: url('http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png');
}
.main-center .bottom div.pic-2 {
    width: 282px;
    background-image: url('http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg');
}
.main-center .bottom div.pic-3 {
    width: 150px;
    background-image: url('http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg');
}
</style>
