<template>
    <div class="movie-container">
        <div class="movie-title">
            <ul>
                <li>
                    <router-link tag="span" to="/other">猫眼电影</router-link>
                </li>
                <li @mouseenter="showImg" :class="{ active: showCarousel }">
                    <router-link tag="span" to="/other">正在热映</router-link>
                </li>
                <li @mouseenter="showImg" :class="{ active: !showCarousel }">
                    <router-link tag="span" to="/other">即将上映</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/other">
                        <span>全部<i>></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="movie-carousel">
            <div class="hot" v-if="showCarousel">
                <el-carousel
                    indicator-position="none"
                    :autoplay="false"
                    height="297px"
                >
                    <el-carousel-item
                        v-for="(item, index) in hotData"
                        :key="index"
                    >
                        <div
                            class="img-container"
                            v-for="(img, num) in item"
                            :key="num + '1'"
                        >
                            <router-link to="/other">
                                <img :src="img.imgUrl" alt="" />
                                <img class="mark" :src="img.imgMark" alt="" />
                                <div class="info">
                                    <p>
                                        <b v-if="img.amount">
                                            <span> {{ img.amount }}</span>
                                            人想看</b
                                        >
                                        <b v-else-if="img.score"
                                            >观众评
                                            <span> {{ img.score }}</span>
                                        </b>
                                    </p>
                                    <p>{{ img.name }}</p>
                                </div>
                            </router-link>
                            <router-link
                                class="buyTicket"
                                tag="span"
                                to="/other"
                                >购票</router-link
                            >
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="coming" v-else>
                <el-carousel
                    indicator-position="none"
                    :autoplay="false"
                    height="297px"
                >
                    <el-carousel-item
                        v-for="(item, index) in comingData"
                        :key="index"
                    >
                        <div
                            class="img-container"
                            v-for="(img, num) in item"
                            :key="num"
                        >
                            <router-link to="/other">
                                <img :src="img.imgUrl" alt="" />
                                <img class="mark" src="img.imgMark" alt="" />
                                <div class="info">
                                    <p>
                                        <b
                                            >观众评
                                            <span v-if="img.amount">{{
                                                img.amount
                                            }}</span>
                                            <span v-else-if="img.isPresell">{{
                                                img.isPresell
                                            }}</span>
                                            人想看</b
                                        >
                                    </p>
                                    <p>{{ img.name }}</p>
                                </div>
                            </router-link>
                            <router-link
                                class="buyTicket"
                                tag="span"
                                to="/other"
                                >购票</router-link
                            >
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get('/api/page/homeMovie').then(res => {
            this.carouselData = res
        })
    },
    data() {
        return {
            carouselData: [],
            showCarousel: true
        }
    },
    computed: {
        hotData() {
            return this.carouselData.hot
        },
        comingData() {
            return this.carouselData.coming
        }
    },
    methods: {
        showImg(e) {
            if (e.target.className) {
                return ''
            } else {
                this.showCarousel = !this.showCarousel
            }
        }
    }
}
</script>

<style>
.movie-container {
    width: 1190px;
    margin: 40px auto 0 auto;
    /* border: 1px solid black; */
}
.movie-container .movie-title {
    width: 100%;
    background: linear-gradient(
            to right,
            rgb(250, 60, 104) 2%,
            rgb(254, 70, 77) 97%
        )
        rgb(250, 60, 104);
    border-radius: 5px 5px 0 0;
}
.movie-container .movie-title ul::after {
    /* overflow: hidden; */
    content: '';
    display: block;
    clear: both;
}
.movie-container .movie-title ul li {
    position: relative;
    float: left;
    padding: 0 5px;
    font-size: 14px;
    color: #ffffff;
    height: 44px;
    line-height: 44px;
}
.movie-container .movie-title ul li.active::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0px;
    content: '';
    display: block;
    border: 7px solid rgb(250, 60, 104);
    border-bottom-color: #fff;
    z-index: 100;
}
.movie-container .movie-title ul li:nth-of-type(1) {
    margin: 0 10px 0 13px;
    font-size: 18px;
}
.movie-container .movie-title ul li:nth-last-of-type(1) {
    float: right;
    margin-right: 15px;
}
.movie-container .movie-carousel > div {
    margin: 0 12px;
}
/* 让，展示一个未完全进入的图片 */
.el-carousel__item {
    width: 10000px !important;
}
.movie-container .movie-carousel .img-container {
    height: 297px;
    width: 214px;
    float: left;
    margin-right: 16px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
}
.movie-container .movie-carousel .img-container img {
    height: 297px;
    width: 100%;
    border: 0px;
    border-radius: 4px;
}
.movie-container .movie-carousel .img-container img.mark {
    position: absolute;
    top: 10px;
    z-index: 99;
    left: -6px;
    height: 20px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    width: auto;
    border: 0px;
}
.movie-container .movie-carousel .img-container div.info {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* border: 1px solid black; */
}
.movie-container .movie-carousel .img-container div.info p {
    text-align: left;
    color: #fff;
    padding-left: 10px;
    font-weight: 500;
}
.movie-container .movie-carousel .img-container div.info p span {
    font-size: 16px;
    color: #fd9827;
    font-weight: 500;
}
.movie-container .movie-carousel .img-container div.info p:nth-of-type(2) {
    font-size: 16px;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
}
.movie-container .movie-carousel .img-container div.info p:nth-of-type(1) {
    font-size: 12px;
    margin: 48px 0 10px 0;
}
.movie-container .movie-carousel .img-container span.buyTicket {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: coral;
    border-radius: 100px;
    color: #fff;
    padding: 2px 12px 3px 12px;
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
}
</style>
