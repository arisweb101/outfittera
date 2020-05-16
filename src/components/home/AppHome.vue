<template>
  <v-container fluid no-gutters class="pa-0 height100">
    <v-row no-gutters class="height100">
    <div class="black-screen" @click="closeWindow" v-show="menuShow || searchBarShow" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"></div>
     <searchBar/>
     <slideShows/>
     <categories/>
    </v-row>
  </v-container>
</template>
<script>
import searchBar from '@/components/search/AppSearchBar.vue'
import slideShows from '@/components/home/AppSlideShows.vue'
import categories from '@/components/home/AppCategories.vue'
import eventBus from '@/event_bus';
  export default {
    name: 'Home',
    components: {
     searchBar,
     slideShows,
     categories,
     eventBus
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.svg'),
        isActive: '',
        menuShow: false,
        searchBarShow: false,
        }
     },
      mounted() {
        let vm = this;
        eventBus.$on('menuOpen', val => {
          vm.menuShow = val;
        })
        eventBus.$on('isSearchBarOpen', val => {
          vm.searchBarShow = val;
        })
      },
      methods: {
        closeWindow() {
          let vm = this;
          eventBus.$emit('menuOpen', false) 
          eventBus.$emit('isSearchBarOpen', false)
          vm.searchBarShow = false;
          vm.menuShow = false;
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
.black-screen {
  position:fixed;
  width:100%;
  height:100%;
  display:block;
  z-index:10;
  transition: .2s;
  &.open-menu {
    left:300px;
    transition: .2s;
    background: rgba(0,0,0,.7);
  }
  &.open-search {
    top:60px;
    transition: .2s;
    background: rgba(0,0,0,.7);
  }
}

</style>