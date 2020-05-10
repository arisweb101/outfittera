<template>
  <v-container fluid no-gutters class="pa-0 height100">
     <Menu/>
    <Banner :pageTitle="pageTitle" :mainBanner="mainBanner"/>
      <div no-gutters class="articles-lists">
        <div v-for="item in articles" class="items">
          <router-link :to="'/article/'+item.id">
            <v-img :src="item.images"></v-img>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.description }}</div>
          </router-link>
        </div>
    </div>
  </v-container>
</template>
<script>
 import Menu from '@/components/menu/AppMenu.vue';
 import Banner from '@/components/pageTemplate/PageBanner.vue'
  export default {
    name: 'Template',
    components: {
     Banner,
     Menu
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.png'),
        pageTitle: "Fashion Modes",
        mainBanner : require('@/assets/images/banner-image.png'),
        articles: [
              { 
                id: 'article-1',
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-2',
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-3',
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-4',
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-5',
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-6',
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
            ]
     }
    },
    mounted: function () {

       
        
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

</style>