<template>
  <v-layout>
    <v-img :src="whiteLogo" class="white-logo"></v-img>
    <searchIcon :icon="icon" class="search-icon" />
    <v-img
      :src="mainBanner"
      gradient="to top right, rgba(83, 18, 124, 0.44), rgba(201, 117, 255, 0.57)"
      class="banner"
    >
      <div class="page-title">{{ pageTitle | titleFormat }}</div>
    </v-img>
  </v-layout>
</template>
<script>
import searchIcon from '@/components/search/searchIcon.vue';
export default {
  props: ['pageTitle', 'mainBanner'],
  name: 'PageBanner',
  components: {
    searchIcon,
  },
  data() {
    return {
      whiteLogo: require('@/assets/images/logo-white.svg'),
      icon: require('@/assets/images/search.png'),
    };
  },
  mounted() {},
  methods: {},
  filters: {
    titleFormat: function(value) {
      return value.split('-').join(' ');
    },
  },
};
</script>
<style lang="scss" scope>
.page-template {
  .page-title {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    position: relative;
    top: 100px;
    font-family: 'Libre Baskerville', serif;
  }
  .search-icon {
    position: absolute;
    z-index: 2;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }
  .white-logo {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 20px;
    width: 112px;
  }
  .page-title {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 120px;
    max-width: 600px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    text-transform: capitalize;
  }
  .banner {
    max-height: 322px;
    text-align: center;
  }
}
</style>
