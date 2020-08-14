<template>
  <v-col cols="6" sm="12" md="6" lg="6" class="categories" v-bind:class="{ open: isMenuOpen }" >
    <v-row v-if="mainCategories" v-for="(category, index) in mainCategories" :key="index" no-gutters >
   <v-row v-for="(cat, key) in category" cols="12" class="category">
    <v-col cols="6" class="category-title" >
      <div class="title">{{ key | textFormat}}</div>
      <div :id="key"></div>
    </v-col>
      <v-col cols="6" class="category-actions">
        <div class="actions">
          <div class="next" v-if="key">
          <a href="#" v-scroll-to="mainCategories[index + 1]">Previous: {{ key | textFormat}}
          </a>
          </div>
          <div class="previous" v-if="key">
            <a href="#" v-scroll-to="mainCategories[index + 1]">Next: {{ key | textFormat }}</a></div>
        </div>
      </v-col>
      <v-col cols="12" no-gutters class="articles">
        <div v-for="(item, index) in cat" data-aos="zoom-in-up" :key="index" class="items"  >
          <router-link :to="'/article/'+item.id">				 
            <div class="article-image" :class="item.id"></div>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <span class="desc">
              {{ item.description }}
            </span>
          </router-link>
        </div>
      </v-col>
       </v-row>
    </v-row>
   
  </v-col>
</template>
<script>
import eventBus from '@/event_bus';
import '@/assets/js/scrollAnimation.js'
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import VueScrollTo from 'vue-scrollto';
import hoverEffect from 'hover-effect';
export default {
  name: 'categories',
  props: ['mainCategories'],
  components: {
    eventBus,
    VueScrollTo,
    CursorFx
  },
  data() {
    return {
        isMenuOpen: false,
        showImages: true,
        hoy: {}
     }
   },
   created(){
     let vm = this;
     vm.hoverEffect()
   },
   async mounted() {
     let vm = this;
     eventBus.$on('menuOpen', val => {
       vm.isMenuOpen = val;
     })
     await vm.initialize();
     vm.hoverEffect()
   },
   watch: {
     mainCategories: function (val) {
       let vm = this;
       setTimeout(() =>{
         vm.hoverEffect()
       },300)
       
    },
   },
   methods: {
     initialize() {
       const vm = this;
     },
     hoverEffect() {
       const vm = this;
       vm.mainCategories.forEach((category, index) => {
         Object.keys(category).forEach((item, ind) => {
            category[item].forEach((article) => {
             let selector = '.' + article.id;
             let image1 = article.images;
             new hoverEffect({
                parent: document.querySelector(selector),
                intensity: 0.3,
                intensity1: 1,
                intensity2: 2,
                imagesRatio:0.6,
                image1: image1,
                image2: image1,
                displacementImage: 'https://uploads-ssl.webflow.com/5b367b755b093e453cec2141/5bc9486cdc837c82711dfb73_displacement-4.png?'
            });
            })
         })
        }) 
     },
     scrollTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
   },
   filters: {
    textFormat: function (value) {
      return value.split('_').join(" ")
    }
  }
}
</script>
<style lang="scss">
.wrap {
  display: flex;
  width: 20vw;
  padding-top: 14vh;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.canvas {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
}

.inner-wrap {
 
  display: flex;
  width: 795px;
  height: 529px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #161616;
}
.categories {
  position:relative;
  transition: 0.6s ease;
  left:0;
  padding:10px 60px !important;
  .category {
    position:relative;
    margin-bottom:30px;
  }
  .category-title {
    position:relative;
    .title {
      font-family: 'Libre Baskerville', serif !important;
      font-weight:bold;
      position:absolute;
      top:34px;
      color:#53127C;
      text-transform:capitalize;
    }
  }
  .actions {
    font-size:12px;
    text-align:right;
    position:relative;
    a:{
      color:#000;
    }
    .next {
      margin:8px 0;
      position:relative;
      font-family: 'Poppins', sans-serif;
      font-weight:normal;
      text-transform:capitalize;
      a {
        color:#000;
        text-decoration:none;
        font-family: 'Libre Baskerville', serif !important;
        text-transform:capitalize;
        &:hover {
          opacity:0.8;
        }
      }
      &:after {
        content: "";
        position:relative;
        right: -10px;
        top:5px;
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
    }
    .previous {
      position:relative;
      font-family: 'Poppins', sans-serif;
      font-weight:normal;
      text-transform:capitalize;
      a {
        color:#000;
        text-decoration:none;
        text-transform:capitalize;
        &:hover {
          opacity:0.8;
        }
      }
      &:after {
        content: "";
        top:-2px;
        position:relative;
        right: -10px;
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }
  .articles {
    display:flex;
    flex-wrap:wrap;
    a {
      color:#000;
      text-decoration:none;
    }

    .article-image {
      transition:.2s;
      width:100%;
      height:300px;
      &:hover {
        transition:0.2s;
        transform: translate3d(0,-6px,0);
        position:relative;
        opacity:.7;
      }
    }
    .source {
        text-transform:uppercase;
        padding:20px 0 0;
        letter-spacing:0.05em;
        font-family: 'Poppins', sans-serif;
        font-weight:600;
      }
    .title {
      font-weight: 700;
      font-size: 21px;
      line-height:30px;
      padding:15px 0;
      font-family: 'Libre Baskerville', serif !important;
    }
    .items {
      width:50%;
      padding:0 20px;
      margin:25px 0px;

      .desc {
         font-family: 'Libre Baskerville', serif !important;
         height: 100px; 
         display:block;
         overflow: hidden;
         text-overflow: ellipsis; 
      }
    }
  }
}

.before-enter {
  opacity:0;
  transform: translateY(100px);
  transition:0.4s ease-in;  
  overflow-x: hidden;
  @for $i from 0 through 2 {
    &:nth-child(#{$i + 1}) {
      transition-delay: 0.4s * $i;
    }
  }
}
.enter {
  opacity:1;
  transform:translateY(0px);  
}

@media screen and (max-width:992px){
  .categories {
    width:100% !important;
    max-width: 100%;
    height:100% !important;
    max-height:500px !important;
    flex: 0 0 100% !important;
    padding:20px !important;
    text-align:center;
    margin-top:70px;

    .category-title {
      width: 100% !important;
      flex: 0 0 100%;
      max-width: 100%;
      div {
      clear: both;
      margin:10px 0;
      width:100%;
     }
    }
    .category-actions {
      width: 100% !important;
      flex: 0 0 100%;
      max-width: 100%;
      div {
      clear: both;
      margin:10px 0;
      width:100%;
      text-align: center;
     }
    }

    .articles {
      column-count: 1 !important;
    }
    .previous {
      top:-6px;
    }
  }
}
@media screen and (max-width:767px){
  .actions {
    .previous {
      display:none;
    }
    .next {
      display:none;
    }
  }
}
</style>

