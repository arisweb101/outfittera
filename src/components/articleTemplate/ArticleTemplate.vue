<template>
  <v-container fluid no-gutters class="pa-0 height100">
     <Menu/>
    <ArticleBanner :articleCategory="articleBanner.articleCategory"
    :articleTitle="articleBanner.articleTitle" :authorName="articleBanner.authorName" 
    :authorThumbnail="articleBanner.authorThumbnail" :articleDateCreated="articleBanner.articleDateCreated" 
    :articleBannerImage="articleBanner.articleBannerImage"/>
    <socialMediaLogos class="social-logos" />
    <div class="article-content">
      <v-row>
        <v-col cols="12" md="12">
          <p class="initial">{{ contentBlock1.text }}</p>
          <p>{{ contentBlock1.text }}</p>
          <p>{{ contentBlock1.text }}</p>
        </v-col>
      </v-row >
      <v-row>
        <v-col cols="12" md="12">
            <v-img :src="contentBlock2.image"></v-img>
            <p>{{ contentBlock2.text }}</p>
            <p>{{ contentBlock2.text }}</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </v-col>
      </v-row>
      <v-row>
        <div class="block3">
            <p class="initial">{{ contentBlock1.text }}</p>
            <p>{{ contentBlock1.text }}</p>
            <p>{{ contentBlock1.text }}</p>
        </div>
      </v-row>
    </div>
  </v-container>
</template>
<script>
 import Menu from '@/components/menu/AppMenu.vue';
 import ArticleBanner from '@/components/articleTemplate/ArticleBanner.vue'
 import socialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue'
  export default {
    name: 'Template',
    components: {
     Menu,
     ArticleBanner,
     socialMediaLogos
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.png'),
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
        },
        contentBlock3: {
          text: "Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi." +
                "quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis," + 
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam" +
                "interdum sociis tortor sapien. praesent molestie nulla tincidunt. Feugiat mattis",
        }
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
    width:60%;

    .v-image {
      margin:30px 0;
    }
    p {
      text-align:justify;
    }

    .initial:first-child:first-letter {
      float: left;
      font-size: 75px;
      line-height: 60px;
      padding-top: 4px;
      padding-right: 12px;
      padding-left: 3px;
    }
  }
}

</style>