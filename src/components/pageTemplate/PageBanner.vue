<template>
  <v-layout>
    <v-img :src="whiteLogo" class="white-logo"></v-img>
    <div class="search-icon">
      <v-img :src="searchIcon"></v-img>
    </div>
    <v-img :src="mainBanner" gradient="to top right, rgba(83, 18, 124, 0.44), rgba(201, 117, 255, 0.57)" class="banner"></v-img>
  </v-layout>
</template>
<script>

export default {
  props: ['pageTitle', 'mainBanner'],
  name: 'PageBanner',
  components: {
    
  },
  data() {
    return {
      whiteLogo: require('@/assets/images/logo-white.png'),
      searchIcon: require('@/assets/images/search.png'),
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scope>
.page-template {
  .search-icon {
    position:absolute;
    z-index:2;
    right:30px;
    top:30px;
    cursor:pointer;
  }
  .white-logo {
    position: absolute;
    z-index:2;
    left:0;
    right:0;
    margin:0 auto;
    top:20px;
    width:112px;
  }
  .page-title {
    position: absolute;
    z-index:2;
    left:0;
    right:0;
    margin:0 auto;
    top:120px;
    max-width:400px;
    line-height:40px;
    text-align:center;
    color:#fff;
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
  }
  .banner {
    max-height:322px;
    text-align:center;
  }
}
</style>