<template>
  <v-container fluid no-gutters class="pa-0 height100 read-articles">
  <div class="page-title">{{ title }}</div>
   <v-row cols="6" md="6" class="">
     <v-col col="2" md="6" class="article" v-for="article in articles" :key="article.id">
     <v-list-item  :to="article.path">
     <v-list-item-content v-scrollanimation>
      <v-img :src="article.image" class="article-images"> 
        <div class="article-title">{{ article.label1 }}</div>
        <div class="article-label">{{ article.label1 }}</div>
      </v-img>
      </v-list-item-content>
      </v-list-item>
     </v-col>
   </v-row>
  </v-container>
</template>
<script>
export default {
    name: 'ReadArticles',
    data() {
      return{
        title: "Read Articles",
        articles: [
          { 
            id:1,
            image: require('@/assets/images/art-1.png'),
            label1:"Fashion",
            label2:"Mode",
            path: '/fashion-mode'
          },
          {  
            id:2,
            image: require('@/assets/images/art-2.png'),
            label1:"Travel",
            label2:"Miles",
            path: '/travel-miles'
          },
          {  
            id:3,
            image: require('@/assets/images/art-3.png'),
            label1:"Lifestyle",
            label2:"Makers",
            path: '/lifestyle-makers'
          },
          {  
            id:4,
            image: require('@/assets/images/art-4.png'),
            label1:"Technology",
            label2:"Machine",
            path: '/technology-and-machine'
          },
        ]
     }
    }
}
</script>
<style lang="scss">
.read-articles {
  position:relative;
  .page-title {
    color:#53127C;
    font-size:42px;
    margin:20px auto;
    text-align:center;
    font-family: 'Libre Baskerville', serif !important;
  }
  .article {
    .article-images {
      transition:.2s;
      text-align:center;
      .article-title{
        max-width:150px;
        background:#8526DC;
        text-align:center;
        color:#fff;
        font-weight:bold;
        font-size:18px;
        position:absolute;
        top:calc(45% - 16px);
        left:0;
        right:0;
        margin:0 auto;
        padding:2px 10px;
        
      }
      .article-label {
        font-weight:bold;
        font-size:42px;
        color:#fff;
        position:absolute;
        top:calc(55% - 16px);
        left:0;
        right:0;
        margin:0 auto;
      }
      &:hover {
        transition:0.2s;
        transform: translate3d(0,-6px,0);
        position:relative;
        opacity:.7;
      }
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