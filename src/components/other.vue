<template>
    <div class="other">
        <h1>哈哈！想吃没门！！！</h1>
        <h1>哈哈！想看没门！！</h1>
        <h1>哈哈！想玩没门！</h1>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
div.other {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    background-color: #000;
    background-image: url(../assets/img/toux.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    h1 {
        color: green;
        font-size: 50px;
    }
}
</style>
