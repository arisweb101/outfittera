<template>
  <div class="page-template">
    <PageTemplate/>
  </div>
</template>
<script>
// @ is an alias to /src
import PageTemplate from '@/components/pageTemplate/AppTemplate.vue';
export default {
  name: 'TemplateView',
  components: {
    PageTemplate
  }
}
</script>
