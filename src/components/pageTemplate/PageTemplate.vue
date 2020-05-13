<template>
  <v-container fluid no-gutters class="pa-0 height100">
     <Menu/>
    <Banner :pageTitle="pageTitle" :mainBanner="mainBanner"/>
      <div no-gutters class="articles-lists">
        <div v-scrollanimation v-for="(item, index) in articles" :key="item.id" class="items">
          <router-link :to="'/article/'+item.id">
            <v-img :src="item.images" eager="true" class="article-image"></v-img>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.description }}</div>
          </router-link>
        </div>
    </div>
    <Footer/>
  </v-container>
</template>
<script>
 import Menu from '@/components/menu/AppMenu.vue';
 import Banner from '@/components/pageTemplate/PageBanner.vue'
 import Footer from '@/components/footer/AppFooter.vue'
  export default {
    name: 'Template',
    components: {
     Banner,
     Menu,
     Footer
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.png'),
        pageTitle: "Fashion Modes",
        mainBanner : require('@/assets/images/banner-image.png'),
        articles: []
     }
    },
    created() {
      let vm = this;
      vm.initialize();
    },
    mounted() {
      this.initialize()
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
      }
    } 

  }
</script>
<style lang="scss">
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