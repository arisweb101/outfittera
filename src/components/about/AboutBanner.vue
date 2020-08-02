<template>
  <v-layout>
    <v-img :src="whiteLogo" class="white-logo"></v-img>
    <SearchIcon :icon="icon" class="search-icon" />
    <v-img
      data-cursor-hover
      :src="aboutBannerImage"
      gradient="to top right, rgba(83, 18, 124, 0.44), rgba(201, 117, 255, 0.57)"
      class="banner"
    >
    </v-img>
    <v-row class="banner-desc" no-gutters>
      <v-col class="about" cols="7" md="7" lg="7" sm="10" center>
        <div class="about-title">{{ aboutTitle }}</div>
        <div class="about-description">{{ aboutDescription }}</div>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import SearchIcon from '@/components/search/searchIcon.vue';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  props: [
    'pageTitle',
    'mainBanner',
    'aboutBannerImage',
    'aboutDescription',
    'aboutTitle',
    'authorName',
    'authorThumbnail',
    'aboutDateCreated'
  ],
  name: 'AboutBanner',
  components: {
    SearchIcon
  },
  data() {
    return {
      whiteLogo: require('@/assets/images/logo-white.svg'),
      icon: require('@/assets/images/search.png')
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scope>
.about-template {
  .search-icon {
    position: absolute;
    z-index: 5;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }
  .white-logo {
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 20px;
    width: 112px;
  }
  .banner-desc {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    max-height: 400px;
    height: 400px;
    .about {
      color: #fff;
      margin: 0 auto;
      text-align: center;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .about-title {
        clear: both;
        display: block;
        margin: 30px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
      }
      .about-description {
        font-family: 'Libre Baskerville', serif !important;
        text-align: center;
        line-height: 32px;
      }
    }
  }
  .banner {
    height: 400px;
    max-height: 400px;
    text-align: center;
    overflow: hidden;
    .v-image__image {
      filter: blur(15px);
      padding: 10px 10px;
      -webkit-filter: blur(12px);
      transform: scale(1.2);
    }
  }
  .about-image {
    position: absolute;
    left: 5%;
    width: 44%;
    max-height: 450px;
    z-index: 2;
  }
}
</style>
