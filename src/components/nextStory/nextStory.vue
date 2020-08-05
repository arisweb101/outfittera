<template>
  <v-row class="next-story" no-gutters>
    <v-col cols="12">
      <router-link :to="{ name:'Article', params: { slug: nextArticle.slug, article_type: nextArticle.article_type_slug  } }">
       <v-img data-cursor-hover gradient="to top right, rgba(83, 18, 124, 0.20), rgba(201, 117, 255, 0.20)" class="next-story-bg" :src="nextArticle.image">
         <div class="next-story-label">Next Story</div>
         <div class="next-story-title">{{ nextArticle.name }}</div>
         <div class="next-story-category">{{ nextArticle.article_type_name }}</div>
       </v-img>
       </router-link>
    </v-col>
  </v-row>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import socialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue'
export default {
  name: 'Tags',
  props: ['nextArticle'],
  components: {
    CursorFx,
    socialMediaLogos
  },
  data() {
    return {
      nextStory: '/article/article-2',
      nextStoryImg: '',
      nextStoryTitle: '',
      nextStoryCategory: ''
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.nextStoryImg = require('@/assets/images/next-story-img.png')
      this.nextStoryTitle = 'Grand Ferdinand New Viennese Elegance'
      this.nextStoryCategory = "Lifestyle Markers"
    },
    goToNextStory() {

    }
  },
  computed: {
    currentRouteName() {
        return this.$route.path;
    }
  }
}
</script>
<style lang="scss" scope>
.next-story {
  margin-top:100px;
  .next-story-bg {
    position:relative;
    width:100%;
    max-height:500px;
    color:#fff;
    text-align:center;
    position:relative;
    .next-story-label {
      margin:0 auto;
      font-size:25px;
      position:absolute;
      top:50px;
      left:0;
      right:0;
       font-family: 'Libre Baskerville', serif !important;
    }
    .next-story-title {
       font-family: 'Libre Baskerville', serif !important;
      width:500px;
      margin:0 auto;
      font-size:40px;
      position:absolute;
      top:calc(50% - 40px);
      left:0;
      right:0;
    }
    .next-story-category {
      text-transform:uppercase;
      margin:0 auto;
      font-size:14px;
      position:absolute;
      bottom:50px;
      left:0;
      right:0;
    }
  }
}
@media screen and (max-width:767px){
  .next-story {
  .next-story-bg {
    .next-story-label {
      font-size:22px;
      top:10%;
      display:none;
    }
    .next-story-title {
      width:100%;
      margin:0 auto;
      font-size:16px;
      top:10%;
    }
    .next-story-category {
      text-transform:uppercase;
      margin:0 auto;
      font-size:14px;
      position:absolute;
      bottom:10%;
      left:0;
      right:0;
    }
  }
}
}
</style>
