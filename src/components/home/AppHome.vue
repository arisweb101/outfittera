<template>
  <v-container fluid no-gutters class="pa-0 height100">
    <v-row no-gutters class="height100">
     <slideShows/>
     <categories/>
    </v-row>
  </v-container>
</template>
<script>
 import slideShows from '@/components/home/AppSlideShows.vue'
 import categories from '@/components/home/AppCategories.vue'
  export default {
    name: 'Home',
    components: {
     slideShows,
     categories
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
.slick-slider {
  z-index:1;
}
.slide-images {
  width:100%;
  display:block;
  position:relative;
  div {
    height:100%;
  }
}
.slide-item-container {
  .slide-item {
    background-size: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
}



</style>