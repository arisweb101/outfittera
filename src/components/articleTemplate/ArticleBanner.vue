<template>
  <v-layout>
    <v-img :src="whiteLogo" class="white-logo"></v-img>
    <SearchIcon :icon="icon" class="search-icon" />
    <v-img
      data-cursor-hover
      :src="articleBannerImage"
      gradient="to top right, rgba(83, 18, 124, 0.44), rgba(201, 117, 255, 0.57)"
      class="banner"
    >
    </v-img>
    <v-row class="banner-desc" no-gutters>
      <v-col cols="12" md="12" lg="6" sm="12">
        <v-img
          data-cursor-hover
          :src="articleBannerImage"
          data-cursor-hover
          class="article-image"
        ></v-img>
      </v-col>
      <v-col cols="12" md="12" lg="6" sm="12" class="article-desc">
        <div class="artitle-titles">
          <div class="artitle-category">{{ articleCategory }}</div>
          <div class="artitle-title">{{ articleTitle }}</div>
          <!-- <div class="artitle-author">feat. {{ authorName }}</div> -->
        </div>
        <div class="author">
          <v-avatar>
            <v-img
              data-cursor-hover
              :src="authorThumbnail"
              class="article-thumbnail"
            ></v-img>
          </v-avatar>

          <div class="author-name">{{ authorName }}</div>
          <div class="date-created">{{ articleDateCreated }}</div>
        </div>
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
    'articleBannerImage',
    'articleCategory',
    'articleTitle',
    'authorName',
    'authorThumbnail',
    'articleDateCreated',
  ],
  name: 'ArticleBanner',
  components: {
    SearchIcon,
    CursorFx,
  },
  data() {
    return {
      whiteLogo: require('@/assets/images/logo-white.svg'),
      icon: require('@/assets/images/search.png'),
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scope>
.article-template {
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
    max-height: 330px;
    height: 330px;
    .article-desc {
      position: relative;
      .artitle-titles {
        position: absolute;
        top: 30%;
        left: 50px;
        color: #fff;
        line-height: 40px;
        .artitle-category {
          font-size: 14px;
          text-transform: uppercase;
          margin: 0 0 10px;
          letter-spacing: 0.5em;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        .artitle-title {
          font-family: 'Libre Baskerville', serif !important;
          font-size: 45px;
          font-weight: bold;
          margin: 0 0 10px;
        }
        .artitle-author {
          font-size: 45px;
          margin: 0 0 10px;
          font-family: 'Libre Baskerville', serif !important;
        }
      }
    }
    .author {
      position: absolute;
      bottom: -70px;
      color: #000;
      left: 50px;
      width: 100px;
      text-align: center;
      .article-thumbnail {
        width: 65px;
        margin: 0 auto;
      }
      .author-name {
        margin-top: 10px;
        font-size: 14px;
        text-transform: uppercase;
      }
      .date-created {
        font-size: 12px;
      }
    }
  }
  .banner {
    height: 322px;
    max-height: 322px;
    text-align: center;
    overflow: hidden;
    .v-image__image {
      filter: blur(15px);
      padding: 10px 10px;
      -webkit-filter: blur(12px);
      transform: scale(1.2);
    }
  }
  .article-image {
    position: absolute;
    left: 5%;
    width: 44%;
    max-height: 450px;
    z-index: 2;
  }
}
</style>
