<template>
  <v-container fluid no-gutters class="pa-0 height100">
    <div class="black-screen" @click="closeWindow" v-show="menuShow || 
     searchBarShow" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"></div>
     <SearchBar/>
     <Menu/>
     <div no-gutters class="page-content height100" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }">
        <Banner :pageTitle="pageTitle" :mainBanner="mainBanner"/>
          <div no-gutters class="articles-lists">
            <div v-for="(item, index) in articles" :key="item.id" class="items">
              <router-link :to="'/article/'+item.id">
                <v-img :src="item.images" :class="item.id" :eager="forceImages" class="article-image"></v-img>
                <div class="source">{{ item.source }}</div>
                <div class="title">{{ item.title }}</div>
                <div class="desc">{{ item.description }}</div>
              </router-link>
            </div>
        </div>
      </div>
    <Footer/>
     <cursor-fx color="#000" config outside-size="100" color-hover="#ffffff"/>
  </v-container>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
 import Menu from '@/components/menu/AppMenu.vue';
 import Banner from '@/components/pageTemplate/PageBanner.vue'
 import SearchBar from '@/components/search/AppSearchBar.vue'
 import Footer from '@/components/footer/AppFooter.vue'
 import eventBus from '@/event_bus';
 import hoverEffect from 'hover-effect';
  export default {
    name: 'Template',
    components: {
     CursorFx,
     Banner,
     Menu,
     Footer,
     eventBus,
     SearchBar
    },
    data() {
      return{
        forceImages: true,
        menuShow: false,
        searchBarShow: false,
        menuLogo: require('@/assets/images/logo-black.svg'),
        pageTitle: "Fashion Modes",
        mainBanner : require('@/assets/images/banner-image.png'),
        articles: []
     }
    },
   async mounted() {
      const vm = this;
      vm.eventPass();
      await vm.initialize();
      await vm.hoverEffects();
    },
    methods: {
      initialize() {
        let vm = this;
        vm.articles = [
            { 
                id: 'article-1',
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-2',
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-3',
                images: require('@/assets/images/cat3.png'),
                source: 'Lifestyle Markers5',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-4',
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers4 ',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-5',
                images: require('@/assets/images/cat5.png'),
                source: 'Lifestyle Markers3',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-6',
                images: require('@/assets/images/cat6.png'),
                source: 'Lifestyle Markers 2',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
        ]
      },
      eventPass() {
        let vm = this;
        eventBus.$on('menuOpen', val => {
          vm.menuShow = val;
        })
        eventBus.$on('isSearchBarOpen', val => {
          vm.searchBarShow = val;
        })
      },
      hoverEffects() {
        let vm = this;
        setTimeout(function() {
          vm.articles.forEach((item, i) => {
              let selector = '.' + item.id;
              new hoverEffect({
                  parent: document.querySelector(selector),
                  intensity: 0.5,
                  image1: item.images,
                  image2: item.images,
                  imagesRatio: 0.6,
                  displacementImage: require('@/assets/images/displacement/4.png'),
              });
          })
        },2000)
      },
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

.page-content {
    position:relative;
    min-height:600px;
    transition: .2s;
    margin-bottom:50px;
    left:0;
    &.open-search {
      transition:.2s;
    }
    &.open-menu {
      transition:.2s;
      left:300px;
    }
}
.page-template {
  .articles-lists {
    column-count: 3;
    column-gap: 2em;
    margin-top:20px;
    width:80%;
    margin:0 auto;
    position:relative;
    top:-80px;
   
    .article-image {
        transition:.2s;
        canvas {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          background-color: #fff;
        }
        &:hover {
          transition:0.2s;
          transform: translate3d(0,-6px,0);
          position:relative;
          opacity:.9;
        }
      }
    a {
      color:#000;
      text-decoration:none;
    }
    .source {
      text-transform:uppercase;
      padding:20px 0 0;
      letter-spacing:0.5em;
      font-family: 'Poppins', sans-serif;
      font-weight:600;
    }
    .title {
      font-family: 'Libre Baskerville', serif !important;
      font-weight:bold;
      font-size: 21px;
      line-height:30px;
      padding:15px 0;
    }
    .items {
      display: inline-block;
      margin: 0;
      width: 100%;

      .desc {
        font-family: 'Libre Baskerville', serif !important;
        padding-bottom:2em;
      }
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


@media screen and (max-width:992px){
  .page-template  {
    .articles-lists {
      column-count: 2 !important;
    }
  }
}

@media screen and (max-width:767px){ 
  // Page Template

  .page-template  {
    .page-title {
      font-size:26px;
    }
    .articles-lists {
      column-count: 1 !important;
    }
  }

  // Article 

  .article-template {
    .article-content {
      width:80% !important;
    }
  }

  // Footer
  .footer {
    .footer-container {
      .footer-menu {
        padding:0;
        ul.menu {
          li {
            display: block !important;
          }
        }
      }
    }
  }
}
</style>