<template>
  <div class="search-result">
    <SearchResult />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchResult from '@/components/search/AppSearchResult.vue';

export default {
  name: 'SearchResultView',
  components: {
    SearchResult
  }
};
</script>
