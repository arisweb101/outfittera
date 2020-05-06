<template>
  <v-col cols="6" sm="6" md="6" lg="6" class="slide-images height100">
    <img class="logo" :src="mainLogo">
    <div class="slider-container">
      <VueSlickCarousel v-bind="settings" class="height100">
        <div class="slide-item-container" v-for="item in slideShows">
          <img class="slide-item" v-bind:style="{ 'background-image': 'url(' + item.image + ')' }">
        </div>
      </VueSlickCarousel>
    </div>
  </v-col>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'Home',
    components: {
     VueSlickCarousel 
    },
    data() {
      return {
        mainLogo: require('@/assets/images/outfittera.png'),
        settings: {
          arrows: true,
          autoplay: true,
          dots: false,
          adaptiveHeight: true,
          autoplay: true
        },
        slideShows: [
          {
            image: require('@/assets/images/slideshow1.jpg'),
          },
          {
            image: require('@/assets/images/slideshow1.jpg'),
          },
          {
            image: require('@/assets/images/slideshow1.jpg'),
          },
          {
            image: require('@/assets/images/slideshow1.jpg'),
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
.home {
  height:100%;
}
.logo {
  position:absolute;
  left:0;
  right:0;
  top:10px;
  margin:0 auto;
  z-index:2;
}
.height100 {
  height:100%;
}
.slider-container {
  position:fixed;
  user-select:none;
}
.slick-slider {
  z-index:1;
}
.slick-list {
  position:fixed !important;
  width:50%;
}
.slide-images {
  width:100%;
  display:block;
  position:fixed;
  div {
    height:100vh;
  }
}
.slide-item-container {
  height:100vh !important;
  .slide-item {
    background-size: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
}



</style>