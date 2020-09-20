<template>
    <div class="navRight">
        <ul class="list">
            <li class="mt">
                <router-link tag="a" :to="{ name: 'userinfo' }"
                    >我的美团</router-link
                >
                <dl>
                    <dt><a href="#">我的账单</a></dt>
                    <dt><a href="#">我的收藏</a></dt>
                    <dt><a href="#">兑换券</a></dt>
                    <dt><a href="#">账户设置</a></dt>
                </dl>
            </li>
            <li class="phone">
                <router-link tag="a" to="/">手机APP</router-link>
            </li>
            <li class="shop">
                <router-link tag="a" to="/">商家中心</router-link>
                <dl>
                    <dt>
                        <!-- <router-link tag="a" to="/">美团餐饮商户中心</router-link> -->
                        <a href="#">美团餐饮商户中心</a>
                    </dt>
                    <dt><a href="#">登录商家中心</a></dt>
                    <dt><a href="#">美团智能收银</a></dt>
                </dl>
            </li>
            <li class="rule">
                <router-link tag="a" to="/">美团规则</router-link>
                <dl>
                    <dt><a href="#">规则中心</a></dt>
                    <dt><a href="#">规则目录</a></dt>
                    <dt><a href="#">规则评议院</a></dt>
                </dl>
            </li>
            <li class="website">
                <router-link tag="a" to="/">网站导航</router-link>
                <div>
                    <dl class="hotel">
                        <dt><a href="#">酒店旅游</a></dt>
                        <dd><a href="#">国际机票</a></dd>
                        <dd><a href="#">火车票</a></dd>
                        <dd><a href="#">民宿</a></dd>
                        <dd><a href="#">经济型酒店</a></dd>
                        <dd><a href="#">主题酒店</a></dd>
                        <dd><a href="#">商务酒店</a></dd>
                    </dl>
                    <dl class="foot">
                        <dt><a href="">吃美食</a></dt>
                        <dd><a href="">烤鱼</a></dd>
                        <dd><a href="">特色小吃</a></dd>
                        <dd><a href="">烧烤</a></dd>
                        <dd><a href="">自助餐</a></dd>
                    </dl>
                    <dl class="movie">
                        <dt><a href="">看电影</a></dt>
                        <dd><a href="">热映电影</a></dd>
                        <dd><a href="">热门影院</a></dd>
                        <dd><a href="">热映电影口碑榜</a></dd>
                        <dd><a href="">最受期待电影</a></dd>
                    </dl>
                    <dl class="cellPhone">
                        <dt><a href="#">手机应用</a></dt>
                        <dd>
                            <img
                                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                                alt=""
                            />
                        </dd>
                        <dd>
                            <img
                                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                                alt=""
                            />
                        </dd>
                        <dd>
                            <img
                                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                                alt=""
                            />
                        </dd>
                        <dd>
                            <img
                                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                                alt=""
                            />
                        </dd>
                        <dd>
                            <img
                                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                                alt=""
                            />
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style>
.my-nav .navRight {
    position: relative;
}
.my-nav .navRight ul.list {
    position: absolute;
    right: 0;
}
.my-nav .navRight ul.list li {
    position: relative;
    float: left;
    height: 100%;
    padding: 0 14px;
    text-align: center;
}
.my-nav .navRight ul.list li:hover {
    background-color: #fff;
    border-color: #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
.my-nav .navRight ul.list li:hover dl,
.my-nav .navRight ul.list li.website:hover div {
    display: block;
    z-index: 1000;
}
.my-nav .navRight ul.list li a:hover {
    color: red;
}
.my-nav .navRight ul.list li > dl {
    display: none;
    position: absolute;
    background-color: #fff;
    border-color: #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
.my-nav .navRight ul.list li.mt dl {
    left: 0px;
    width: 100%;
}
.my-nav .navRight ul.list li.shop dl {
    right: 0px;
    width: 140px;
}
.my-nav .navRight ul.list li.rule dl {
    left: 0px;
    width: 100%;
}
.my-nav .navRight ul.list li.website > div {
    display: none;
    position: absolute;
    background-color: #fff;
    border-color: #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    right: 0px;
    width: 1190px;
    box-sizing: border-box;
    /* height: auto; */
    padding: 30px 36px 36px 40px;
}
.my-nav .navRight ul.list li > dt {
    padding: 0 14px;
    height: 35px;
    line-height: 35px;
}
.my-nav .navRight ul.list li.website div > dl {
    float: left;
    margin-right: 47px;
}
.my-nav .navRight ul.list li.website div > dl.hotel {
    width: 234px;
}
.my-nav .navRight ul.list li.website div > dl.foot {
    width: 156px;
}
.my-nav .navRight ul.list li.website div > dl.movie {
    width: 90px;
}
.my-nav .navRight ul.list li.website div > dl.cellPhone {
    /* display: flex;
  justify-content: space-between; */
    float: right;
    width: 380px;
}
.my-nav .navRight ul.list li.website div > dl dt {
    font-size: 14px;
    width: 100%;
    margin-bottom: 26px;
}
.my-nav .navRight ul.list li.website div > dl dt > a {
    color: black;
}
.my-nav .navRight ul.list li.website div > dl dd {
    float: left;
    height: 16px;
    line-height: 16px;
    padding: 5px 0;
    width: 78px;
}
.my-nav .navRight ul.list li.website div > dl.movie dd {
    width: 90px;
}
.my-nav .navRight ul.list li.website div > dl.cellPhone dd {
    width: 76px;
    height: 70px;
}
.my-nav .navRight ul.list li.website div > dl dd img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-position: center;
}
</style>
