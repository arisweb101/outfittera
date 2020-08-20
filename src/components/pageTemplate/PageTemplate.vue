<template>
  <v-container fluid no-gutters class="pa-0 height100">
    <div
      class="black-screen"
      @click="closeWindow"
      v-show="menuShow || searchBarShow"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    ></div>
    <SearchBar />
    <Menu />
    <div
      no-gutters
      class="page-content height100"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    >
      <Banner :pageTitle="pageTitle" :mainBanner="mainBanner" />
      <div no-gutters class="articles-lists">
        <div class="preloader" v-if="loading"><img :src="preloader" /></div>
        <div
          v-for="(item, index) in articles"
          :key="item.id"
          class="items"
          data-aos="zoom-in-up"
        >
          <router-link :to="'/' + articleType + '/' + item.slug">
            <div
              :class="item.id"
              :eager="forceImages"
              class="article-image"
            ></div>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="desc" v-html="item.description"></div>
          </router-link>
        </div>
      </div>
      <div class="pagination" v-if="!loading">
        <paginate
          :page-count="customPagination.total_records || 0"
          :page-range="customPagination.per_page"
          :margin-pages="2"
          :click-handler="paginateSearch"
          :prev-class="'prevlink'"
          :next-class="'nextlink'"
          :container-class="'pagination'"
          :prev-text="'<'"
          :next-text="'>'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>
    </div>
    <Footer />
  </v-container>
</template>
<script>
import Menu from '@/components/menu/AppMenu.vue';
import Paginate from 'vuejs-paginate';
import Banner from '@/components/pageTemplate/PageBanner.vue';
import SearchBar from '@/components/search/AppSearchBar.vue';
import Footer from '@/components/footer/AppFooter.vue';
import eventBus from '@/event_bus';
import hoverEffect from 'hover-effect';
export default {
  name: 'Template',
  components: {
    Paginate,
    Banner,
    Menu,
    Footer,
    eventBus,
    SearchBar,
  },
  data() {
    return {
      loading: false,
      forceImages: true,
      menuShow: false,
      searchBarShow: false,
      menuLogo: require('@/assets/images/logo-black.svg'),
      pageTitle: 'Fashion Modes',
      mainBanner: require('@/assets/images/banner-image.png'),
      preloader: require('@/assets/images/preloader.gif'),
      articles: [],
      articleType: '',
    };
  },
  async mounted() {
    const vm = this;
    this.articleType = this.$route.params.article_type;
    vm.eventPass();
    await vm.getArticles();
    await vm.hoverEffect();
  },
  methods: {
    getArticles() {
      const vm = this;
      vm.loading = true;
      this.articles = [];
      let url = 'articles?article_type=' + this.articleType;
      this.$http.plain
        .get(url)
        .then((response) => {
          this.articles = response.data.results;
          this.customPagination = response.data.pagination;
          vm.hoverEffect();
          vm.loading = false;
        })
        .catch((error) => {
          vm.loading = false;
          console.log(error.response);
        });
    },
    initialize() {
      let vm = this;
    },
    paginateSearch(pageNum) {
      const vm = this;
      vm.loading = true;
      this.articles = [];
      let url = '';
      if (pageNum === 1) {
        url = 'articles?article_type=' + this.articleType;
      } else {
        url =
          'articles?article_type=' +
          this.articleType +
          '&per_page=6&page' +
          pageNum;
      }
      this.$http.plain
        .get(url)
        .then((response) => {
          vm.articles = response.data.results;
          vm.customPagination = response.data.pagination;
          vm.hoverEffect();
          vm.loading = false;
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        })
        .catch((error) => {
          vm.loading = false;
          console.log(error.response);
        });
    },
    eventPass() {
      let vm = this;
      eventBus.$on('menuOpen', (val) => {
        vm.menuShow = val;
      });
      eventBus.$on('isSearchBarOpen', (val) => {
        vm.searchBarShow = val;
      });
    },
    hoverEffect() {
      let vm = this;
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
      });
    },
    closeWindow() {
      let vm = this;
      eventBus.$emit('menuOpen', false);
      eventBus.$emit('isSearchBarOpen', false);
      vm.searchBarShow = false;
      vm.menuShow = false;
    },
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log('to');
      this.articleType = to.params.article_type;
      this.getArticles();
    },
    articles: function(val) {
      let vm = this;
      setTimeout(() => {
        vm.hoverEffect();
      }, 300);
    },
  },
};
</script>
<style lang="scss">
.page-content {
  position: relative;
  min-height: 600px;
  transition: 0.6s ease;
  margin-bottom: 50px;
  left: 0;
  &.open-search {
    transition: 0.6s ease;
  }
  &.open-menu {
    transition: 0.6s ease;
    left: 300px;
  }
}
.preloader {
  margin: 0 auto;
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  z-index: 2;
  width: 250px;
  img {
    width: 100%;
  }
}
.pagination {
  margin: 20px auto 0;
  width: 400px;
  ul {
    display: flex;
    list-style: none;
    li {
      flex: 1;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      list-style: none;

      &.page-item.active {
        a {
          color: #53127c;
        }
      }

      &.prevlink {
        a {
          font-size: 30px;
          position: relative;
          top: -14px;
          font-weight: normal;
        }
      }
      &.nextlink {
        a {
          font-size: 30px;
          position: relative;
          top: -14px;
          font-weight: normal;
        }
      }

      a {
        color: #000;
        outline: none;
        border: none;
      }
    }
  }
}
.page-template {
  .articles-lists {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -180px;
    .article-image {
      transition: 0.2s;
      width: 100%;
      height: 300px;
      canvas {
        position: absolute;
        background-color: #fff;
      }
      &:hover {
        transition: 0.2s;
        transform: translate3d(0, -6px, 0);
        position: relative;
        opacity: 0.9;
      }
    }
    a {
      color: #000;
      text-decoration: none;
    }
    .source {
      text-transform: uppercase;
      padding: 20px 0 0;
      letter-spacing: 0.05em;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }
    .title {
      font-family: 'Libre Baskerville', serif !important;
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      padding: 15px 0;
    }
    .items {
      width: 33%;
      padding: 0 20px;
      margin: 100px 0;

      .desc {
        font-family: 'Libre Baskerville', serif !important;
        padding-bottom: 2em;
        height: 100px;
      }
    }
  }
}
.black-screen {
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 10;
  transition: 0.6s ease;
  &.open-menu {
    left: 300px;
    transition: 0.6s ease;
    background: rgba(0, 0, 0, 0.7);
  }
  &.open-search {
    top: 60px;
    transition: 0.6s ease;
    background: rgba(0, 0, 0, 0.7);
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

@media screen and (max-width: 992px) {
  .page-template {
    .articles-lists {
      column-count: 2 !important;
    }
  }
}

@media screen and (max-width: 767px) {
  // Page Template

  .page-template {
    .page-title {
      font-size: 26px;
    }
    .articles-lists {
      column-count: 1 !important;
    }
  }

  // Article

  .article-template {
    .article-content {
      width: 80% !important;
    }
  }

  // Footer
  .footer {
    .footer-container {
      .footer-menu {
        padding: 0;
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
