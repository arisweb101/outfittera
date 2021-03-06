<template>
  <v-container fluid no-gutters class="pa-0 height100 home">
    <div
      class="black-screen"
      @click="closeWindow"
      v-show="menuShow || searchBarShow"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    ></div>
    <searchBar />
    <Menu class="menu" />
    <v-row
      no-gutters
      class="page-content height100"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    >
      <div class="preloader" v-if="loading"><img :src="preloader" /></div>
      <slideShows :spotlights="spotlights" :social="social" v-if="!loading" />
      <categories :mainCategories="mainCategories" v-if="!loading" />
    </v-row>
  </v-container>
</template>
<script>
import Menu from '@/components/menu/AppMenu.vue';
import searchBar from '@/components/search/AppSearchBar.vue';
import slideShows from '@/components/home/AppSlideShows.vue';
import categories from '@/components/home/AppCategories.vue';
import searchIcon from '@/components/search/searchIcon.vue';
import eventBus from '@/event_bus';
export default {
  name: 'Home',
  metaInfo () {
    return {
      title: this.meta.title,
      meta: [
        { name: 'description', content: this.meta.description },
        { name: 'keywords', content: this.meta.keywords }
      ],
    }
  },
  components: {
    searchBar,
    searchIcon,
    Menu,
    slideShows,
    categories,
    eventBus,
  },
  data() {
    return {
      meta: {
        title: '',
        description: '',
        keywords: ''
      },
      searchIcon: require('@/assets/images/search.png'),
      menuLogo: require('@/assets/images/logo-black.svg'),
      isActive: '',
      menuShow: false,
      searchBarShow: false,
      spotlights: [],
      social: {},
      mainCategories: [],
      loading: false,
      preloader: require('@/assets/images/preloader.gif'),
    };
  },
  created() {
    const vm = this;
    vm.eventPass();
  },
  mounted() {
    this.getHome();
  },
  methods: {
    getHome() {
      const vm = this;
      vm.loading = true;
      let url = 'home';
      this.$http.secured
        .get(url)
        .then((response) => {
          console.log('HOME');
          console.log(response.data);
          vm.meta = response.data.meta;
          vm.spotlights = response.data.spotlights;
          vm.mainCategories = response.data.objects;
          vm.social = response.data.social;
          vm.loading = false;
        })
        .catch((error) => {
          vm.loading = false;
          console.log(error.response);
        });
    },
    eventPass() {
      let vm = this;
      eventBus.$on('menuOpen', (val) => {
        vm.menuShow = val;
      });
      eventBus.$on('isSearchBarOpen', (val) => {
        vm.searchBarShow = val;
      });
    },
    closeWindow() {
      let vm = this;
      eventBus.$emit('menuOpen', false);
      eventBus.$emit('isSearchBarOpen', false);
      vm.searchBarShow = false;
      vm.menuShow = false;
    },
  },
  beforeDestroy() {
    const vm = this;
    const dataToBeDestroy = ['spotlights', 'mainCategories'];
    dataToBeDestroy.forEach(data => {
      vm[data] = null;
      delete vm[data];
    });
  },
  destroyed() {
    this.$destroy();
  }
};
</script>
<style lang="scss">
#cursor-fx {
  z-index: 999999;
}
.preloader {
  margin: 0 auto;
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  z-index: 2;
  width: 250px;
  img {
    width: 100%;
  }
}
.page-content {
  position: relative;
  min-height: 600px;
  transition: 0.6s ease;
  margin-bottom: 50px;
  left: 0;
  &.open-search {
    transition: 0.6s ease;
  }
  &.open-menu {
    transition: 0.6s ease;
    left: 300px;
  }
}
.home {
  height: 100%;
  .search {
    position: fixed;
  }
  .menu {
    position: fixed;
  }
}
.height100 {
  height: 100%;
}
.slick-slider {
  z-index: 1;
}
.slide-images {
  width: 100%;
  display: block;
  position: relative;
}
.slide-item-container {
  .slide-item {
    background-size: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
}
.search-icon {
  position: absolute;
  right: 20px;
  top: 50px;
  z-index: 4;
  width: 20px;
  cursor: pointer;
}
.black-screen {
  position: fixed;
  width: 0;
  height: 100%;
  display: block;
  z-index: 10;
  opacity: 0;
  left: 0;
  transition: 0.6 ease;
  &.open-menu {
    width: 100%;
    left: 300px;
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    transition: 0.6s ease;
  }
  &.open-search {
    width: 100%;
    top: 60px;
    opacity: 1;
    transition: 0.6s ease;
    background: rgba(0, 0, 0, 0.7);
  }
}

@media screen and (max-width: 992px) {
  // Home
  .home {
    .menu {
      position: absolute !important;
    }
    .height100 {
      height: auto !important;
    }
  }
}
</style>
