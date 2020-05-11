<template>
  <div class="article-template">
    <ArticleTemplate/>
  </div>
</template>
<script>
// @ is an alias to /src
import ArticleTemplate from '@/components/articleTemplate/ArticleTemplate.vue';
export default {
  name: 'TemplateView',
  components: {
    ArticleTemplate
  }
}
</script>
