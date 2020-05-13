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
     categories,
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.png'),
        isActive: '',
        menuShow: false,
        }
     },
      mounted() {

      },
      methods: {
        isMenuOpen() {
          const vm = this;
          vm.menuShow = !vm.isActive;
          vm.isActive = !vm.isActive;
        }
      }
  }
</script>
<style lang="scss">
.home {
  height:100%;
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