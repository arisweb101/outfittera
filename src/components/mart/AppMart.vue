<template>
  <v-container fluid no-gutters class="pa-0 mart">
    <searchBar />
    <div
      class="black-screen"
      @click="closeWindow"
      v-show="menuShow || searchBarShow"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    ></div>
    <Menu class="menu-mart" />
    <div
      no-gutters
      class="page-content height100"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    >
      <div class="preloader" v-if="loading"><img :src="preloader" /></div>
      <v-row class="header" gutter v-if="!loading">
        <v-img :src="blackLogo" class="logo-center"></v-img>
        <searchIcon :icon="icon" class="search-icon" />
      </v-row>
      <v-row class="content" v-if="!loading">
        <v-row cols="12" class="filter" gutter>
          <v-col col="6" class="filter-title" gutter>
            <span class="content-title">Mart</span>
            <span class="mart-items">{{ quantity }} items</span>
          </v-col>
          <v-col col="6" class="filter-options" gutter>
            <span class="filter-by">
              <span class="filter-label">Filter By</span>
              <v-select
                class="select-product"
                :items="allProducts"
                label="All Products"
                filled
              ></v-select>
            </span>
          </v-col>
        </v-row>
        <v-row class="all-products">
          <ul>
            <li v-for="item in items" v-scrollanimation>
              <v-row>
                <v-col cols="12">
                  <v-img
                    data-cursor-hover
                    :src="item.itemImage"
                    class="item-image"
                  ></v-img>
                </v-col>
                <v-col cols="12" class="item-desc">
                  <div class="item-category">{{ item.category }}</div>
                  <div class="item-name">{{ item.itemName }}</div>
                  <div class="item-option">
                    <div class="item-price">PHP {{ item.price }}</div>
                    <button type="button" class="buy-this-bt">Buy This</button>
                  </div>
                </v-col>
              </v-row>
            </li>
          </ul>
          <div class="pagination">
            <paginate
              :page-count="20"
              :page-range="3"
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
        </v-row>
      </v-row>
    </div>
    <ReadArticles class="read" />
    <Footer />
  </v-container>
</template>
<script>
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import searchBar from '@/components/search/AppSearchBar.vue';
import Menu from '@/components/menu/AppMenu.vue';
import searchIcon from '@/components/search/searchIcon.vue';
import ReadArticles from '@/components/readArticles/readArticles.vue';
import Footer from '@/components/footer/AppFooter.vue';
import eventBus from '@/event_bus';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  name: 'Template',
  components: {
    Paginate,
    CursorFx,
    Menu,
    searchIcon,
    searchBar,
    Footer,
    eventBus,
    ReadArticles,
  },
  data() {
    return {
      dense: true,
      menuShow: false,
      searchBarShow: false,
      blackLogo: require('@/assets/images/logo-black.svg'),
      icon: require('@/assets/images/search-gray.png'),
      allProducts: ['Product A', 'Product B', 'Product C', 'Product D'],
      loading: false,
      preloader: require('@/assets/images/preloader.gif'),
      items: [
        {
          category: 'Technology',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
        {
          category: 'Technology',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
        {
          category: 'Technology',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
        {
          category: 'Fashion',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
        {
          category: 'Technology',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
        {
          category: 'Technology',
          itemImage: require('@/assets/images/buy-this-item.png'),
          itemName: 'Winter Set Clothes NY',
          price: 23000,
        },
      ],
      quantity: 236,
    };
  },
  mounted() {
    let vm = this;
    vm.eventPass();
  },
  methods: {
    paginateSearch(pageNum) {
      console.log(pageNum);
    },
    eventPass() {
      const vm = this;
      eventBus.$on('isSearchBarOpen', (val) => {
        vm.searchBarShow = val;
      });
      eventBus.$on('menuOpen', (val) => {
        vm.menuShow = val;
        vm.isActive = val;
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
.mart {
  transition: 0.6 ease;
  .menu-mart {
    #burger-menu span {
      background: #000 !important;
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
  .page-content {
    position: relative;
    min-height: 600px;
    transition: 0.6s ease;
    margin-bottom: 50px;
    &.open-search {
      transition: 0.6s ease;
    }
    &.open-menu {
      transition: 0.6s ease;
      left: 300px;
    }
    .header {
      margin: 0 !important;
      height: 60px;
    }
    .content {
      width: 80%;
      margin: 0 auto;
      height: 100%;
      position: relative;
      top: 60px;
      .content-title {
        font-size: 40px;
        color: #53127c;
        font-weight: bold;
        position: relative;
        top: 10px;
        font-family: 'Libre Baskerville', serif !important;
      }
      .mart-items {
        color: #b6b6b6;
        position: relative;
        top: 4px;
        left: 10px;
      }
      .filter {
        position: absolute;
        width: 100%;
      }
      .filter-by {
        width: 100%;
        display: block;
        height: 70px;
        background: rgba(196, 196, 196, 0.3);
        position: relative;
        .filter-label {
          position: absolute;
          left: 15px;
          top: 24px;
          color: #53127c;
          text-transform: uppercase;
        }
        .v-text-field--box .v-input__slot,
        .v-text-field--outline .v-input__slot {
          min-height: 56px;
        }
        .v-input__slot {
          position: absolute;
          right: 20px;
          top: 10px;
          border: 1px solid #53127c;
          border-radius: 0;
          min-height: 50px;
          max-height: 50px;
          width: 180px;
        }
      }
    }
    .all-products {
      position: relative;
      top: 150px;
      clear: both;
      width: 100%;
      margin-bottom: 200px;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          flex: 0 0 31%;
          list-style: none;
          margin: 10px;
          .item-image {
            width: 100%;
            transition: 0.2s;
            &:hover {
              transition: 0.2s;
              transform: translate3d(0, -6px, 0);
              position: relative;
              opacity: 0.7;
            }
          }
          .item-desc {
            text-align: left;
            padding-left: 20px;
            min-height: 100px;

            .item-option {
              .item-price {
                float: left;
                position: relative;
                top: 30px;
              }
              .buy-this-bt {
                float: right;
                position: relative;
                width: 122px;
                height: 40px;
                box-sizing: border-box;
                transition: 0.2s;
                margin: 20px 0;
                outline: none;
                text-align: left;
                &:before {
                  content: '';
                  border: solid black;
                  border-width: 0 3px 3px 0;
                  display: inline-block;
                  padding: 3px;
                  position: absolute;
                  right: 5px;
                  top: 15px;
                  transform: rotate(-45deg);
                  -webkit-transform: rotate(-45deg);
                  &:hover:before {
                    background: #53127c;
                  }
                }
                &:after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 1px;
                  display: block;
                  margin-top: 5px;
                  right: 0;
                  background: #53127c;
                  transition-delay: 0.3s;
                  transition: width 0.5s ease;
                  -webkit-transition: width 0.5s ease;
                }
                &:hover:after {
                  width: 0;
                  left: 1000;
                  background: #53127c;
                }
                &:hover {
                  transition: 0.2s;
                  color: #53127c;
                }
              }
            }
            .item-category {
              font-size: 12px;
              margin-bottom: 15px;
              text-transform: uppercase;
            }
            .item-name {
              font-family: 'Libre Baskerville', serif !important;
              font-size: 18px;
            }
          }
        }
      }
      .pagination {
        margin: 20px auto 0;
        ul {
          display: flex;
          li {
            flex: 1;
            color: #000;
            font-size: 14px;
            font-weight: bold;

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
    }
  }
  .read {
    width: 80%;
    margin: 150px auto;
  }
  .search-icon {
    position: absolute;
    right: 26px;
    top: 22px;
    margin: 0 auto;
    width: 20px;
  }
  .logo-center {
    position: absolute;
    left: 0;
    right: 0;
    top: 18px;
    margin: 0 auto;
    width: 100px;
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

@media screen and (max-width: 1080px) {
  .mart .page-content .all-products ul li {
    flex: 0 0 47%;
  }
}
@media screen and (max-width: 820px) {
  .mart .page-content .all-products ul li {
    flex: 0 0 100%;
  }
  .filter {
    margin: 0;

    .filter-title {
      width: 100%;
      clear: both;
      flex: auto;
      padding: 0;
    }
    .filter-options {
      width: 100%;
      clear: both;
      flex: auto;
      padding: 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .mart .page-content .all-products ul li {
    flex: 0 0 100%;
  }
  .read-articles .article .article-images .article-label {
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: calc(55% - 6px);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
@media screen and (max-width: 360px) {
  .filter-by {
    text-align: center;
    height: 100px !important;

    .v-input__slot {
      position: absolute;
      /* right: 20px; */
      top: 10px;
      border: 1px solid #53127c;
      border-radius: 0;
      min-height: 50px;
      max-height: 50px;
      width: 80% !important;
      margin: 0 auto;
      left: 0 !important;
      right: 0 !important;
    }
  }
  .select-product {
    width: 100%;
  }
  .filter-label {
    position: relative !important;
    left: 0 !important;
    font-size: 12px !important;
    top: 6px !important;
    color: #53127c;
    text-transform: uppercase;
    right: 0;
    margin: 0 auto;
  }
}
</style>
