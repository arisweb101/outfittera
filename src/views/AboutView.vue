<template>
  <div class="home">
    <PageTemplate/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTemplate from '@/components/pageTemplate/PageTemplate.vue';
import Menu from '@/components/menu/AppMenu.vue';
export default {
  name: 'PageTemplate',
  components: {
    PageTemplate,
    Menu
  }
}
</script>
