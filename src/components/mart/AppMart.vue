<template>
  <v-container fluid no-gutters class="pa-0 height100 mart">
  <div class="black-screen" @click="closeWindow" v-show="menuShow || 
     searchBarShow" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"></div>
     <searchBar/>
    <div no-gutters class="page-content height100" v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }">
      <v-row class="header">
        <v-img :src="blackLogo" class="logo-center"></v-img>
        <searchIcon :icon="icon" class="search-icon"/>
        <Menu class="menu-mart"/>
      </v-row>
      <v-row class="content">
        <v-row cols="12" class="filter">
          <v-col col="6">
            <span class="content-title">Mart</span>
            <span class="mart-items">{{ quantity }} items</span>
          </v-col>
          <v-col col="6">
            <span class="filter-by">
            <span class="filter-label">Filter By</span>
            <v-select class="select-product" :items="allProducts" label="All Products" filled
          ></v-select>
          </span>
          </v-col>
        </v-row>
        <v-row class="all-products">
        <ul>
          <li v-for="item in items" v-scrollanimation>
           <v-row>
              <v-col cols="12">
                <v-img :src="item.itemImage" class="item-image"></v-img>
              </v-col>
              <v-col cols="12" class="item-desc">
                <div class="item-name">{{ item.itemName }}</div>
                <div class="item-option">
                  <div class="item-price"> PHP {{ item.price }}</div>
                  <button type="button" class="buy-this-bt">Buy This</button>
                </div>
              </v-col>
            </v-row>
          </li>
        </ul>
        </v-row>
      </v-row>
   </div>
   <ReadArticles class="read"/>
   <Footer/>
  </v-container>
</template>
<script>
import Vue from 'vue'
import searchBar from '@/components/search/AppSearchBar.vue'
import Menu from '@/components/menu/AppMenu.vue';
import searchIcon from '@/components/search/searchIcon.vue'
import ReadArticles from '@/components/readArticles/readArticles.vue'
import Footer from '@/components/footer/AppFooter.vue'
import eventBus from '@/event_bus';

export default {
    name: 'Template',
    components: {
     Menu,
     searchIcon,
     searchBar,
     Footer,
     eventBus,
     ReadArticles
    },
    data() {
      return{
        dense:true,
        menuShow: false,
        searchBarShow: false,
        blackLogo: require('@/assets/images/logo-black.svg'),
        icon: require('@/assets/images/search-gray.png'),
        allProducts: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        items:[
           {
            itemImage: require('@/assets/images/buy-this-item.png'),
            itemName: "Winter Set Clothes NY",
            price: 23000
          },
          {
            itemImage: require('@/assets/images/buy-this-item.png'),
            itemName: "Winter Set Clothes NY",
            price: 23000
          },
          {
            itemImage: require('@/assets/images/buy-this-item.png'),
            itemName: "Winter Set Clothes NY",
            price: 23000
          },
          {
            itemImage: require('@/assets/images/buy-this-item.png'),
            itemName: "Winter Set Clothes NY",
            price: 23000
          },
          {
            itemImage: require('@/assets/images/buy-this-item.png'),
            itemName: "Winter Set Clothes NY",
            price: 23000
          },
        ],
        quantity: 236
      }
     },
     mounted() {
       let vm = this;
        eventBus.$on('menuOpen', val => {
          vm.menuShow = val;
        })
        eventBus.$on('isSearchBarOpen', val => {
          vm.searchBarShow = val;
        })
     },
     methods: {
        closeWindow() {
          let vm = this;
          eventBus.$emit('menuOpen', false) 
          eventBus.$emit('isSearchBarOpen', false)
          vm.searchBarShow = false;
          vm.menuShow = false;
        }
      },
    }
</script>
<style lang="scss">
.mart {
  .menu-mart {
    #burger-menu span {
      background:#000 !important;
    }
  }
  .page-content {
    position:relative;
    min-height:600px;
    transition: .2s;
    margin-bottom:50px;
    .header {
      height:60px;
    }
    .content {
      width:80%;
      margin:0 auto;
      height:100%;
      position:relative;
      top:60px;
      .content-title {
        font-size:40px;
        color:#53127C;
        font-weight:bold;
        position:relative;
        top:10px;
        font-family: 'Libre Baskerville', serif !important;
      }
      .mart-items {
        color:#B6B6B6;
        position:relative;
        top:4px;
        left:10px;
      }
    .filter {
      position:absolute;
      width:100%;
    }
    .filter-by {
      width: 100%;
      display: block;
      height: 70px;
      background: rgba(196, 196, 196, 0.3);
      position:relative;
      .filter-label {
        position:absolute;
        left:15px;
        top:24px;
        color:#53127C;
        text-transform:uppercase;
      }
      .v-text-field--box .v-input__slot, .v-text-field--outline .v-input__slot{
        min-height:56px;
      }
      .v-input__slot {
        position:absolute;
        right:20px;
        top:10px;
        border:1px solid #53127C;
        border-radius:0;
        width:180px;     
      }
    }
    }
    .all-products {
      position:relative;
      top:150px;
      clear:both;
      width:100%;
      margin-bottom:200px;
      ul {
        padding:0;
        margin:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
        li {
          flex: 0 0 31%;
          list-style:none;
          margin:10px;
          .item-image {
            width:100%;
            transition:.2s;
            &:hover {
              transition:0.2s;
              transform: translate3d(0,-6px,0);
              position:relative;
              opacity:.7;
            }
          }
          .item-desc {
            text-align:left;
            padding-left:20px;
            min-height:100px;

            .item-option {
              .item-price {
                float:left;
                position:relative;
                top:30px;
              }
              .buy-this-bt {
                float:right;
                position:relative;
                width: 122px;
                height: 40px;
                border: 1px solid #53127C;
                box-sizing: border-box;
                transition: 0.2s;
                margin:20px 0;
                outline:none;
              &:hover {
                background:#53127C;
                transition: 0.2s;
                color:#fff;
              }
              &:after {

              }
            }
            }
            .item-name {
              font-size:18px;
            }
            
          }
        }
      }
    }
  }
  .read {
    width:80%;
    margin:0 auto;
  }
  .search-icon {
    position:absolute;
    right:26px;
    top:22px;
    margin:0 auto;
    width:20px;
  }
  .logo-center {
    position:absolute;
    left:0;
    right:0;
    top:18px;
    margin:0 auto;
    width:100px;
  }
  .black-screen {
  position:fixed;
  width:100%;
  height:100%;
  display:block;
  z-index:10;
  transition: .2s;
  &.open-menu {
    left:300px;
    transition: .2s;
    background: rgba(0,0,0,.7);
  }
  &.open-search {
    top:60px;
    transition: .2s;
    background: rgba(0,0,0,.7);
  }
}
}
.before-enter {
  opacity:0;
  transform: translateY(100px);
  transition:all 0.8s ease-out;
}
.enter {
  opacity:1;
  transform:translateY(0px);
}
</style>