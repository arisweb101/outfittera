<template>
  <v-container fluid no-gutters class="pa-0 height100">
     <div class="black-screen" @click="closeWindow" v-show="menuShow || 
     searchBarShow" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"></div>
     <SearchBar/>
     <Menu/>
     <div no-gutters class="page-content" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }">
       <Tinybox v-model="contentBlock2.index" :images="contentBlock2.imageList"></Tinybox>
       <ArticleBanner :articleCategory="articleBanner.articleCategory"
       :articleTitle="articleBanner.articleTitle" :authorName="articleBanner.authorName" 
       :authorThumbnail="articleBanner.authorThumbnail" :articleDateCreated="articleBanner.articleDateCreated" 
       :articleBannerImage="articleBanner.articleBannerImage"/>
       <SocialMediaLogos class="social-logos" />
       <div class="article-content">
          <v-row class="block" v-scrollanimation>
            <v-col cols="12" md="12">
              <p class="initial">{{ contentBlock1.text }}</p>
              <p>{{ contentBlock1.text }}</p>
              <p>{{ contentBlock1.text }}</p>
            </v-col>
          </v-row >
          <v-row class="block" v-scrollanimation>
            <v-col cols="12" md="12">
                <v-img :src="contentBlock2.image" class="main-image"></v-img>
                <p class="block-title">{{ contentBlock2.title }}</p>
                <p>{{ contentBlock2.text }}</p>
                <p>{{ contentBlock2.text }}</p>
                <div class="light-box">
                  
                      <img v-for="(img, idx) in contentBlock2.imageList"
                        :src="img.src"
                        :alt="img.alt"
                        :caption="img.caption"
                        class="open-tinybox"
                        @click="contentBlock2.index = idx"
                      >
                </div>
            </v-col>
          </v-row>
          <v-row class="block" v-scrollanimation>
            <v-col cols="12" md="12">
              <p class="block-title">{{ contentBlock3.title }}</p>
              <p>{{ contentBlock3.text }}</p>
              <p>{{ contentBlock3.text }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" v-scrollanimation>
              <buyThis/>
              <tags/>
            </v-col>
          </v-row>
        </div>
      </div>
       <NextStory/>
    <Footer/>
  </v-container>
</template>
<script>
import Vue from 'vue'
import Menu from '@/components/menu/AppMenu.vue';
import SearchBar from '@/components/search/AppSearchBar.vue'
import ArticleBanner from '@/components/articleTemplate/ArticleBanner.vue'
import SocialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue'
import BuyThis from '@/components/buyThis/BuyThis.vue'
import Tags from '@/components/tags/tags.vue'
import NextStory from '@/components/nextStory/nextStory.vue'
import Footer from '@/components/footer/AppFooter.vue'
import Tinybox from "vue-tinybox";
import eventBus from '@/event_bus';
export default {
    name: 'Template',
    components: {
     Menu,
     ArticleBanner,
     SearchBar,
     SocialMediaLogos,
     Tinybox,
     BuyThis,
     Tags,
     Footer,
     NextStory
    },
    data() {
      return{
        menuShow: false,
        searchBarShow: false,
        menuLogo: require('@/assets/images/logo-black.svg'),
        articleBanner: {
          articleCategory: "Lifestyle Markers",
          articleTitle: "The Lifestyle",
          authorName: "July Palafox",
          authorThumbnail: require('@/assets/images/thumbnail.png'),
          articleDateCreated: "May 10, 2020",
          articleBannerImage: require('@/assets/images/banner-image.png'),
        },
        contentBlock1: {
          text: "Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi." +
                "quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis," + 
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "interdum sociis tortor sapien. praesent molestie nulla tincidunt. Feugiat mattis",
        },
        contentBlock2: {
          image: require('@/assets/images/content-image.png'),
          title: "Consequat vulputate tincidunt. Faucibus morbi neque, vulputate sed.",
          text: "Consequat et eu lectus egestas dolor urna, diam molestie nibh. Arcu nulla placerat massa at." +
                "Scelerisque consequat quam facilisis enim placerat luctus euismod. Dictum sit amet enim," +
                "congue augue. Odio facilisis ullamcorper pharetra, consequat tristique vitae mauris sodales" +
                "urna. Libero pellentesque ipsum elit convallis massa, consequat. Gravida et vestibulum turpis" + 
                "placerat ipsum, malesuada ullamcorper donec. Vitae phasellus sodales turpis aliquet. Tortor leo" +
                "aenean lacus diam. Massa facilisis vitae lectus convallis at convallis aliquam, et facilisis. Molestie" +
                "vitae nulla volutpat, velit. Et enim maecenas vestibulum eget pretium viverra egestas.",
          imageList: [
            { alt: 'Image 1', caption:"Image 1" ,src: require('@/assets/images/content-image.png'), thumbnail: require('@/assets/images/content-image.png') },
            { alt: 'Image 2', caption:"Image 2", src: require('@/assets/images/content-image.png'), thumbnail: require('@/assets/images/content-image.png') },
            { alt: 'Image 3', caption:"Image 3", src: require('@/assets/images/content-image.png'), thumbnail: require('@/assets/images/content-image.png') }
          ],
          index: null,
        },
        imgs: '',  // Img Url , string or Array
        visible: false,
        index: 0,
        contentBlock3: {
          title: "Consequat vulputate tincidunt. Faucibus morbi neque, vulputate sed.",
          text: "Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi." +
                "quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis," + 
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "interdum sociis tortor sapien. praesent molestie nulla tincidunt. Feugiat mattis",
        }
      }
     },
     created(){
       const vm = this;
       vm.eventPass();
     },
     methods: {
       eventPass() {
        let vm = this;
        eventBus.$on('menuOpen', val => {
          vm.menuShow = val;
        })
        eventBus.$on('isSearchBarOpen', val => {
          vm.searchBarShow = val;
        })
      },
      closeWindow() {
        let vm = this;
        eventBus.$emit('menuOpen', false) 
        eventBus.$emit('isSearchBarOpen', false)
        vm.searchBarShow = false;
        vm.menuShow = false;
        }
      },
    }
</script>
<style lang="scss">
.page-content {
  position:relative;
  min-height:600px;
  transition: .2s;
  transition:.2s;
  left:0;
  &.open-search {
    transition:.2s;
  }
  &.open-menu {
    transition:.2s;
    left:300px;
  }
}
.article-template {
  .articles-lists {
    column-count: 3;
    column-gap: 2em;
    margin-top:20px;
    width:80%;
    margin:0 auto;
    position:relative;
    top:-80px;
    .source {
      text-transform:uppercase;
      padding:10px 0 0;
    }
    .title {
      font-weight: bold;
      font-size: 21px;
      line-height:24px;
      padding:10px 0;
    }
    .items {
      display: inline-block;
      margin: 0 20px 1em;
      width: 100%;
    }
  }
  .social-logos {
    width:100px;
    position:relative;
    left:70px;
    top:160px;
  }
  .article-content {
    position:relative;
    margin:0 auto;
    left:0;
    right:0;
    top:50px;
    width:50%;

    .main-image {
      margin:0 0 30px;
    }
    .initial:first-child:first-letter {
      float: left;
      font-size: 75px;
      line-height: 60px;
      padding-top: 12px;
      padding-right: 12px;
      padding-left: 3px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight:normal;
    }
  }
  .block {
    margin:0 0 0;

    .block-title {
      font-size:28px;
      text-align:left;
      line-height:40px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight:bold;
    }
  }
  .light-box{
    padding: 0;
    margin: 30px 0;
    list-style: none;
    display: flex;
    justify-content:space-between;
    .open-tinybox {
      width: 32%;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    }
  }
}
.before-enter {
  opacity:0;
  transform: translateY(100px);
  transition:all 0.8s ease-out;
}
.enter {
  opacity:1;
  transform:translateY(0px);
}
</style>