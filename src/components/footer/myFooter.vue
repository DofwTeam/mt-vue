<template>
  <div class="my-footer">
    <div class="footer-container">
      <div v-for="(item, index) in footerData1" :key="index">
        <dl v-for="(domDl, num) in item" :key="num">
          <dt>{{domDl.title}}</dt>
          <dd v-for="(domDd, num1) in domDl.content" :key="num1"><a href="#">{{domDd}}</a></dd>
        </dl>
      </div>
    </div>
    <div class="footer-end">
      <div class="left">
        <p>
          <a href="#">©美团网团购 meituan.com</a>
          <a href="#">京ICP证070791号</a>
          <a href="#">京ICP备10211739号</a>
        </p>
        <p>
          <a href="#">广播电视节目制作经营许可证（京）字第03889号</a>
        </p>
        <p>
          <a href="#">食品经营许可证互联网</a>
          <a href="#">药品信息服务资格证</a>
        </p>
        <p>
          <a href="#">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
        </p>
      </div>
      <div class="right">
        <div>
          <a href=""><img src="https://p0.meituan.net/travelcube/d0289dc0a46fc5b15b3363ffa78cf6c719256.png" alt=""></a>
          <a href="#">京公网安备 11000002002052号</a>
        </div>
        <div>
          <a href="#"><img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e" alt=""></a>
          <a>北京三快科技有限公司</a>
          <a href="#">雪碧图（不处理啦）</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerData1 from '@/assets/data/footerData1'

export default {
  data () {
    return {
      footerData1
    }
  }
}
</script>

<style>
.my-footer{
  width: 1190px;
  margin: 40px auto 0 auto;
}
.my-footer .footer-container {
  padding: 40px 45px;
  display: flex;
  width: 100%;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  box-sizing: border-box;
  justify-content: space-between;
}
.my-footer .footer-container div{
  width: 220px;
  /* border: 1px solid black; */
  margin-bottom: 20px;
}
.my-footer .footer-container div dl{
  padding-bottom: 20px;
}
.my-footer .footer-container div dl dt{
  height: 28px;
  line-height: 28px;
  color: #333;
  font-size: 14px;
  font-weight: 800;
  text-align: left;
}
.my-footer .footer-container div dl dd{
  color: #666666;
  width: 100%;
  /* height: 24px; */
  font-size: 12px;
  line-height: 2;
  text-align: left;
  cursor: pointer;
}
.my-footer .footer-container div dl dd:hover a{
  color: red;
}
.my-footer .footer-end{
  padding: 15px 0 30px 20px;
  overflow: hidden;
}
.my-footer .footer-end div{
  float: left;
  color: #999999;
  font-size: 12px;
}
.my-footer .footer-end div p{
  height: 18px;
}
.my-footer .footer-end div a{
  margin-right: 20px;
}
.my-footer .footer-end div a:hover{
  color: coral;
}
.my-footer .footer-end div:nth-of-type(1){
}
.my-footer .footer-end div.right{
  position: relative;
  float: right;
}
.my-footer .footer-end div.right div:nth-of-type(1){
  width: 210px;
  position: absolute;
  right: 0;
}
.my-footer .footer-end div.right div:nth-of-type(1) a img{
  width: 15px;
}
.my-footer .footer-end div.right div:nth-of-type(1) a:nth-of-type(1){
  position: absolute;
  left: 0px;
}
.my-footer .footer-end div.right div:nth-of-type(1) a:nth-of-type(2){
  position: absolute;
  right: 0px;
}
.my-footer .footer-end div.right div:nth-of-type(2){
  position: absolute;
  width: 305px;
  top: 30px;
  line-height: 38px;
  right: 0;
}
.my-footer .footer-end div.right div:nth-of-type(2) img{
  width: 38px;
}
.my-footer .footer-end div.right div:nth-of-type(2) a{
  float: left;
  margin: 0 5px;
}
</style>
