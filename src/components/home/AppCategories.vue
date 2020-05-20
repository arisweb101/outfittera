<template>
  <v-col cols="6" sm="6" md="6" lg="6" class="pa-8 categories" v-bind:class="{ open: isMenuOpen }" >
    <v-row v-if="categories" v-for="(category, index) in categories" :key="index" no-gutters class="category">
      <v-col cols="6" class="category-title" >
        <div class="title">{{ category.categoryName }}</div>
        <div :id="category.id"></div>
      </v-col>
      <v-col cols="6">
        <div class="actions">
          <div class="next" v-if="category.previousId">
          <a href="#" v-scroll-to="category.previousId">Previous: {{ category.previous }}
          </a>
          </div>
          <div class="previous" v-if="category.nextId">
            <a href="#" v-scroll-to="category.nextId">Next: {{ category.next }}</a></div>
        </div>
      </v-col>
      <v-col cols="12" no-gutters class="articles">
        <div v-for="item in category.articles" class="items" v-scrollanimation>
          <router-link :to="'/article/'+item.id">
            <v-img :src="item.images" :eager="showImages" class="article-image"></v-img>
            <div class="source">{{ item.source }}</div>
            <div class="title">{{ item.title }}</div>
            <span class="desc">
              {{ item.description }}
            </span>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-col>

</template>
<script>
import eventBus from '@/event_bus';
import '@/assets/js/scrollAnimation.js'
import VueScrollTo from 'vue-scrollto';
export default {
  name: 'FreshStories',
  components: {
    eventBus,
    VueScrollTo
  },
  data() {
    return {
        isMenuOpen: false,
        showImages: true,
        categories: []
     }
   },
   created(){
     
   },
   mounted() {
     let vm = this;
     eventBus.$on('menuOpen', val => {
       vm.isMenuOpen = val;
     })
     this.initialize()
   },
   methods: {
     initialize() {
       let vm = this;
       vm.categories = [ { 
            id: "freshstories",
            categoryName: "Fresh Stories",
            previous: '',
            next: 'Fashion Mode',
            nextId: '#fashionmode',
            articles : [
              {
                id: 'article-1',
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-2',
                images: require('@/assets/images/cat3.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-3',
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-4',
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              }
            ]
          },
          { 
            id: "fashionmode",
            categoryName: "Fashion Mode",
            previous: 'Fresh Stories',
            previousId: '#freshstories',
            next:'Technology & Machine',
            nextId: '#technologyandmachine',
            articles : [
              {
                id: 'article-5',
                images: require('@/assets/images/cat5.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {id: 'article-6',
                images: require('@/assets/images/cat6.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-7',
                images: require('@/assets/images/cat8.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                id: 'article-8',
                images: require('@/assets/images/cat7.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              }
            ]
          },
        ]
     },
     scrollTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
   }
}
</script>
<style lang="scss">
.categories {
  position:relative;
  transition: 0.3s;
  left:0;
    &.open {
      left:300px;
      transition: 0.3s;
    }
  .category {
    position:relative;
  }
  .category-title {
    position:relative;
    .title {
      font-family: 'Libre Baskerville', serif !important;
      font-weight:bold;
      position:absolute;
      bottom:0;
      color:#53127C;
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
      a {
        color:#000;
        text-decoration:none;
        font-family: 'Libre Baskerville', serif !important;
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
      font-family: 'Libre Baskerville', serif !important;
      a {
        color:#000;
        text-decoration:none;
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
    column-count: 2;
    margin-top:20px;
    width:100%;
    height:50% !important;
    a {
      color:#000;
      text-decoration:none;
    }
    .article-image {
      transition:.2s;
      &:hover {
        transition:0.2s;
        transform: translate3d(0,-6px,0);
        position:relative;
        opacity:.7;
      }
    }
    .source {
        text-transform:uppercase;
        padding:10px 0 0;
      }
    .title {
      font-weight: bold;
      font-size: 21px;
      line-height:24px;
      padding:10px 0;
      font-family: 'Libre Baskerville', serif !important;
    }
    .items {
      display: inline-table;
      margin: 0 0 1em;
      width:100%;
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
</style>