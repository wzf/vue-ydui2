<template>
    <yd-layout title="Slider">
        <div class="demo-small-pitch">

            <yd-slider autoplay="3000">
                <yd-slider-item>
                    <div class="banner_item">
                        <a href="http://www.ydcss.com">
                            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                        </a>
                    </div>

                </yd-slider-item>
                <yd-slider-item >
                    <div class="banner_item">
                        <a href="http://www.ydcss.com">
                            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                        </a>
                    </div>

                </yd-slider-item>
                <yd-slider-item >
                    <div class="banner_item">
                        <a href="http://www.ydcss.com">
                            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                        </a>
                    </div>

                </yd-slider-item>
            </yd-slider>

        </div>
    </yd-layout>
</template>

<script>
export default {
    mounted() {
        // this.$refs.banner.cloneItem();
    }
}
</script>


<style scoped>
.banner_item {
    padding: 0 .2rem;
    border-radius: .08rem;
}
</style>

