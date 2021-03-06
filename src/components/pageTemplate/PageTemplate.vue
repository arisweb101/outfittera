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
      <Banner :pageTitle="articleType" :mainBanner="mainBanner" />
      <div no-gutters class="articles-lists">
        <div class="preloader" v-if="loading"><img :src="preloader" /></div>
        <div
          v-for="(item, index) in articles"
          :key="item.id"
          class="items"
          data-aos="zoom-in-up"
          v-if="index < perPage"
        >
          <router-link :to="'/' + articleType + '/' + item.slug">
           <!-- <div
              :class="item.id"
              :eager="forceImages"
              class="article-image"
            ></div> -->
             <v-img :src="item.images" class="article-image"></v-img>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="desc" v-html="item.description"></div>
          </router-link>
        </div>
      </div>
      <div class="pagination" v-if="!loading">
        <paginate
          v-model="pageNumber"
          :page-count="pageCount"
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
  metaInfo () {
    return {
      title: this.meta.title,
      meta: [
        { name: 'description', content: this.meta.description },
        { name: 'keywords', content: this.meta.keywords }
      ],
    }
  },
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
      meta: {
        title: '',
        description: '',
        keywords: ''
      },
      loading: false,
      forceImages: true,
      menuShow: false,
      searchBarShow: false,
      menuLogo: require('@/assets/images/logo-black.svg'),
      pageTitle: '',
      mainBanner: require('@/assets/images/machine.jpg'),
      preloader: require('@/assets/images/preloader.gif'),
      articles: [],
      articleType: '',
      customPagination: {},
      totalRecords: 0,
      pageNumber: 1,
      pageCount: 1,
      perPage: 9,
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
    getArticles(page) {
      this.mainBanner = require('@/assets/images/'+this.articleType+'.jpg')
      const vm = this;
      vm.pageNumber = page ? page : vm.pageNumber;
      vm.loading = true;
      this.articles = [];
      let url = 'articles?article_type=' + this.articleType +
                '&per_page=' +
                vm.perPage +
                '&page=' +
                vm.pageNumber;
      this.$http.plain
        .get(url)
        .then((response) => {
          vm.articles = response.data.results;
          vm.meta = response.data.meta;
          vm.customPagination = response.data.pagination;
          vm.perPage = vm.customPagination.per_page;
          vm.totalRecords = parseInt(vm.customPagination.total_records);
          vm.pageCount = parseInt((vm.totalRecords / vm.perPage).toFixed());
          vm.pageCount = vm.pageCount < 1 ? 1 : vm.pageCount;
          vm.pageCount = vm.pageCount < 1 ? 1 : vm.pageCount;
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
      vm.getArticles(pageNum);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
  beforeDestroy() {
    const vm = this;
    const dataToBeDestroy = ['article', 'customPagination', 'perPage', 'totalRecords', 'pageCount'];
    dataToBeDestroy.forEach(data => {
      vm[data] = null;
      delete vm[data];
    });
  },
  destroyed() {
    this.$destroy();
  }
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
  text-align: center;
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
      background-size: cover;
      background-position: center center;
      border:none;
      outline:none;
      &:hover {
        transform: scale(1.02, 1.02);
	      z-index: 9;
      }
      canvas {
        position: absolute;
        background-color: #fff;
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
      margin: 50px 0 0;

      .desc {
        font-family: 'Libre Baskerville', serif !important;
        padding-bottom: 2em;

        p {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
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
      .items {
        width: 50%;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  // Page Template
  .pagination {
    width: 300px;
    ul {
      padding: 0;
      margin: 0;
      li {
        font-size: 12px;
        &.prevlink a,
        &.nextlink a {
          font-size: 20px;
          top: -7px;
        }
      }
    }
  }
  .page-template {
    .page-title {
      font-size: 20px;
    }
    .articles-lists {
      left: 0;
      right: 0;
      width: 100%;
      top: -100px;
      .items {
        width: 80%;
        margin: 50px auto 0;
      }
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
