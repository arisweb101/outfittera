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
      class="page-content"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    >
      <div class="preloader" v-if="loading"><img :src="preloader" /></div>
      <Tinybox v-model="imgIdx" :images="galleries"></Tinybox>
      <ArticleBanner
        v-if="!loading"
        :articleCategory="articleBanner.articleCategory"
        :articleTitle="articleBanner.articleTitle"
        :authorName="articleBanner.authorName"
        :authorThumbnail="articleBanner.authorThumbnail"
        :articleDateCreated="articleBanner.articleDateCreated"
        :articleBannerImage="articleBanner.articleBannerImage"
      />
      <SocialMediaLogos v-if="!loading" class="social-logos-float" :title="articleBanner.articleTitle" />
      <div class="article-content" v-if="!loading">
        <v-row
          class="block"
          v-for="(content_block, index) in content_blocks"
          :key="index"
          v-scrollanimation
        >
          <v-col cols="12" md="12" v-if="content_block.content_type == 'text'">
            <div class="initial" v-html="content_block.content_data.copy"></div>
          </v-col>

          <v-col
            cols="12"
            md="12"
            v-if="content_block.content_type == 'poster_image'"
          >
            <v-img
              :src="
                getImageUrl(content_block.content_data.image_file, '_small')
              "
              class="main-image"
            ></v-img>
            <p class="block-title" v-if="content_block.content_data.title">
              {{ content_block.content_data.title }}
            </p>
            <div v-html="content_block.content_data.copy"></div>
          </v-col>

          <v-col
            cols="12"
            md="12"
            v-if="content_block.content_type == 'text_with_title'"
          >
            <p class="block-title" v-if="content_block.content_data.title">
              {{ content_block.content_data.title }}
            </p>
            <div v-html="content_block.content_data.copy"></div>
          </v-col>

          <v-col
            cols="12"
            md="12"
            v-if="content_block.content_type == 'gallery'"
          >
            <div class="light-box">
              <img
                v-for="(img, idx) in content_block.content_data.galleries"
                data-cursor-hover
                :src="getImageUrl(img, '_small')"
                :alt="img.description"
                :caption="img.description"
                class="open-tinybox"
                @click="
                  getGalleryImages(idx, content_block.content_data.galleries)
                "
              />
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12" v-scrollanimation>
            <!-- <buyThis /> -->
            <tags
              :tagItems="tagItems"
              :likeQuantity="likeQuantity"
              :slug="slug"
              @updateHearts="updateHearts"
            />
          </v-col>
        </v-row>
      </div>
    </div>
    <NextStory :nextArticle="nextArticle" v-if="nextArticle" />
    <Footer v-if="!loading" />
  </v-container>
</template>
<script>
import Vue from 'vue';
import Menu from '@/components/menu/AppMenu.vue';
import SearchBar from '@/components/search/AppSearchBar.vue';
import ArticleBanner from '@/components/articleTemplate/ArticleBanner.vue';
import SocialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue';
import BuyThis from '@/components/buyThis/BuyThis.vue';
import Tags from '@/components/tags/tags.vue';
import NextStory from '@/components/nextStory/nextStory.vue';
import Footer from '@/components/footer/AppFooter.vue';
import Tinybox from 'vue-tinybox';
import eventBus from '@/event_bus';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  name: 'Template',
  components: {
    Menu,
    ArticleBanner,
    SearchBar,
    SocialMediaLogos,
    Tinybox,
    BuyThis,
    Tags,
    Footer,
    NextStory,
  },
  data() {
    return {
      menuShow: false,
      searchBarShow: false,
      menuLogo: require('@/assets/images/logo-black.svg'),
      articleBanner: {},
      loading: false,
      preloader: require('@/assets/images/preloader.gif'),
      imgs: '', // Img Url , string or Array
      visible: false,
      index: 0,
      content_blocks: [],
      galleries: [],
      imgIdx: null,
      tagItems: [],
      likeQuantity: 0,
      slug: '',
      article_type: '',
      nextArticle: null,
    };
  },
  watch: {
    $route(to, from) {
      this.article_type = to.params.article_type;
      this.slug = to.params.slug;
      this.getArticle();
    },
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.article_type = this.$route.params.article_type;
    this.getArticle();
  },
  created() {
    const vm = this;
    vm.eventPass();
  },
  methods: {
    updateHearts() {
      const vm = this;
      this.$http.secured
        .post('articles/hearts/' + this.slug, '')
        .then((response) => {
          this.likeQuantity = response.data.hearts;
        })
        .catch((error) => {
          if (error.response) {
            let errors = error.response.data.messages;
            let msg = [];
            Object.keys(errors).forEach((key) => {
              msg.push(errors[key]);
            });
            console.log(msg.join(','));
          }
        });
    },
    getGalleryImages(idx, galleries) {
      this.imgIdx = idx;
      this.galleries = [];
      let i = 0;
      for (i = 0; i < galleries.length; i++) {
        this.galleries.push({
          alt: galleries[i].description,
          caption: galleries[i].description,
          src: this.getImageUrl(galleries[i], '_small'),
          thumbnail: this.getImageUrl(galleries[i], ''),
        });
      }
    },
    getImageUrl(img, imgType) {
      if (imgType == '') {
        imgType = '_thumb';
      }
      if (img) {
        if (typeof img.result.path !== 'undefined') {
          return (
            'http://irp.pww.mybluehost.me/' +
            img.result.path +
            img.result.name +
            imgType +
            img.result.extention +
            '?cb=' +
            img.result.created
          );
        }
      }
      return '';
    },
    getArticle() {
      const vm = this;
      vm.loading = true;
      this.tagItems = [];
      this.likeQuantity = 0;
      this.nextArticle = null;

      let url = 'articles/' + this.article_type + '/' + this.slug;
      console.log('url');
      console.log(url);
      this.$http.plain
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.article = response.data;
          this.content_blocks = this.article.content_blocks;
          this.articleBanner.articleCategory = this.article.articleCategory;
          this.articleBanner.articleTitle = this.article.articleTitle;
          this.articleBanner.articleDateCreated = this.article.articleDateCreated;
          this.articleBanner.articleBannerImage = this.article.articleBannerImage;
          this.articleBanner.authorThumbnail = this.article.authorImg;



          this.articleBanner.authorName = this.article.authorName;

          if (this.article.nextArticle) {
            this.nextArticle = this.article.nextArticle;
          }

          if (this.article.tags.length > 0) {
            this.tagItems = this.article.tags.split(',');
          }

          if (this.article.hearts.length > 0) {
            this.likeQuantity = this.article.hearts;
          }
          vm.loading = false;
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
    closeWindow() {
      let vm = this;
      eventBus.$emit('menuOpen', false);
      eventBus.$emit('isSearchBarOpen', false);
      vm.searchBarShow = false;
      vm.menuShow = false;
    },
  },
};
</script>
<style lang="scss">

#cursor-fx {
  z-index: 999999px;
}
.page-content {
  position: relative;
  min-height: 600px;
  transition: 0.6s ease;
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
.article-template {
  .articles-lists {
    column-count: 3;
    column-gap: 2em;
    margin-top: 20px;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -80px;
    .source {
      text-transform: uppercase;
      padding: 10px 0 0;
    }
    .title {
      font-weight: bold;
      font-size: 21px;
      line-height: 24px;
      padding: 10px 0;
    }
    .items {
      display: inline-block;
      margin: 0 20px 1em;
      width: 100%;
    }
  }
  .social-logos-float {
    width: 100px;
    position: relative;
    left: 70px;
    top: 160px;
  }
  .social-logos {
    width: 100px;
    position: relative;
    left: 70px;
    top: 160px;
  }
  .article-content {
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50px;
    width: 50%;

    .main-image {
      margin: 0 0 30px;
    }
    .initial:first-child:first-letter {
      float: left;
      font-size: 75px;
      line-height: 60px;
      padding-top: 12px;
      padding-right: 12px;
      padding-left: 3px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight: normal;
    }
  }
  .block {
    margin: 0 0 0;

    .block-title {
      font-size: 28px;
      text-align: left;
      line-height: 40px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight: bold;
    }
  }
  .light-box {
    padding: 0;
    margin: 30px 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
    .open-tinybox {
      width: 30%;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
      margin: 8px;
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

@media screen and (max-width: 1200px) {
  // Article
  .article-template {
    .banner-desc {
      .article-image {
        left: 0;
        margin: 0 auto;
        width: fit-content;
        right: 0;
        position: relative;
      }
      .author {
        position: absolute;
        bottom: 70px !important;
        color: #000;
        left: 0;
        width: 100px;
        text-align: center;
        right: 0;
        margin: 0 auto;
        z-index: 9;
      }
      .article-desc {
        .artitle-titles {
          position: relative;
          top: 95px !important;
          left: 0;
          color: #fff;
          line-height: 40px;
          right: 0;
          color: #000 !important;
          margin: 0 auto;
          text-align: center;
          .artitle-title {
            font-size: 30px;
          }
          .artitle-author {
            font-size: 30px;
          }
        }
      }
    }
    .article-content {
      width: 80% !important;
      top: 360px !important;
      margin-bottom: 400px;
    }
    .social-logos-float {
      width: fit-content !important;
      position: relative;
      left: 0 !important;
      top: 345px !important;
      text-align: center;
      right: 0;
      margin: 0 auto;
      ul {
        li {
          display: inline-block !important;
          margin: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  // Article
  .article-template {
    .banner-desc {
      .article-image {
        left: 0;
        margin: 0 auto;
        width: fit-content;
        right: 0;
        position: relative;
      }
      .author {
        position: absolute;
        bottom: 70px !important;
        color: #000;
        left: 0;
        width: 100px;
        text-align: center;
        right: 0;
        margin: 0 auto;
        z-index: 9;
      }
      .article-desc {
        .artitle-titles {
          position: relative;
          top: 95px !important;
          left: 0;
          color: #fff;
          line-height: 40px;
          right: 0;
          color: #000 !important;
          margin: 0 auto;
          text-align: center;
          .artitle-title {
            font-size: 30px;
          }
          .artitle-author {
            font-size: 30px;
          }
        }
      }
    }
    .article-content {
      width: 80% !important;
      top: 360px !important;
    }
    .social-logos-float {
      width: fit-content !important;
      position: relative;
      left: 0 !important;
      top: 345px !important;
      text-align: center;
      right: 0;
      margin: 0 auto;
      ul {
        li {
          display: inline-block !important;
          margin: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 997px) {
  // Article
  .article-template {
    .article-content {
      width: 80% !important;
      margin-bottom: 400px;
    }
  }
}
@media screen and (max-width: 480px) {
  // Article
  .article-template {
    .banner {
      height: auto;
    }
  }
}
</style>
