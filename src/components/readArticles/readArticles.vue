<template>
  <v-container fluid no-gutters class="pa-0 height100 read-articles">
    <div class="page-title">{{ title }}</div>
    <v-row cols="6" md="6" class="">
      <v-col
        col="2"
        md="6"
        class="article"
        v-for="article in articles"
        :key="article.id"
      >
        <v-list-item
          class="article-items"
          :to="'/' + article.article_type_slug + '/' + article.slug"
        >
          <v-list-item-content v-scrollanimation>
            <v-img
              data-cursor-hover
              :src="article.image"
              class="article-images"
            >
              <div class="article-title">{{ article.category }}</div>
              <div class="article-label">{{ article.title }}</div>
            </v-img>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  name: 'ReadArticles',
  components: {
    CursorFx,
  },
  data() {
    return {
      title: 'Read Articles',
      articles: [],
    };
  },
  methods: {
    getArticles() {
      this.$http.plain
        .get('articles/mart')
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
<style lang="scss">
.read-articles {
  position: relative;
  .page-title {
    color: #53127c;
    font-size: 42px;
    margin: 20px auto;
    text-align: center;
    font-family: 'Libre Baskerville', serif !important;
  }
  .article-items:before {
    background: none;
  }
  .article {
    .article-images {
      transition: 0.2s;
      text-align: center;
      .article-title {
        max-width: 150px;
        background: #8526dc;
        text-align: center;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        top: calc(45% - 16px);
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 2px 10px;
      }
      .article-label {
        font-weight: bold;
        font-size: 42px;
        color: #fff;
        position: absolute;
        top: calc(55% - 16px);
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      &:hover {
        transition: 0.2s;
        transform: translate3d(0, -6px, 0);
        position: relative;
        opacity: 0.7;
      }
    }
  }
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.8s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
