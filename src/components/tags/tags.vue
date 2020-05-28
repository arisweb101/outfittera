<template>
  <div class="tags">
    <v-row>
      <v-col cols="12" >
        <span class="tag-cat">Tags</span>
        <span class="tag-items" v-for="tag in tagItems">
        {{ tag }}
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="like">
      <div class="heart">
        <v-img :src="heart" ></v-img>
        </div>
        <span class="like-quantity">{{ likeQuantity }}k Hearts</span>
      </v-col>
      <v-col cols="6" class="tag-social">
        <socialMediaLogos/>
        </v-col>
    </v-row>
  </div>
</template>
<script>
import socialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue'
export default {
  name: 'Tags',
  components: {
    socialMediaLogos
  },
  data() {
    return {
      heart: require('@/assets/images/heart.png'),
      likeQuantity: 44,
      convertion: '',
      tagItems: ['Fashion', 'Vestibulum', 'Libero', 'Congue', 'Nulla',]
    }
  },
  mounted() {
    
  },
  methods: {

  },
  filters: {
    convertNumber: function(val) {
      if(val >= 1000) {
        this.convertion = 'K';
      }else if(val >= 1000000) {
        this.convertion = 'M'
      }
    }
  }
}
</script>
<style lang="scss" scope>
.tags {
  display:inline-block;
  justify-content:space-between;
  flex-direction: row;
  .tag-cat {
    margin-right:10px;
    text-transform:uppercase;
  }
  .tag-items {  
    display:inline-block;
    margin:7px;
    padding: 6px 12px;
    line-height:12px;
    height: 24px;
    color:#fff;
    font-size:14px;
    background: #C4C4C4;
    border-radius: 4px; 
    text-transform:uppercase;

    &:hover {
       background: #999;
    }
  }
}
.like {
  .heart {
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius:50px;
    float:left;
    margin-right:10px;
    cursor:pointer;

    @keyframes animateHeart {
      0%   {
        border: 1px solid #ddd;
      }
      5% {
          border: 1px solid #999;
          -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.5);
          -moz-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.5);
          box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.5);
        }
      25% {
          border: 1px solid #999;
          -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.25);
          -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.25);
          box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.25);
        }
      100% {
          border: 1px solid #999;
          -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
          -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
          box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
        }
    }
    .v-image {
      width: 55%;
      margin: 13px auto;
    }
    &:hover {
      border: 1px solid #000;
      animation-name: animateHeart;
      animation: animateHeart 2s infinite; 
    }
  }
  .like-quantity {
      float:left;
      display:inline-block;
      position:relative;
      top:17px;
    }
}
.tag-social {
    .social-logos {
      left:0 !important;
      top:13px !important;
      float:right;
      width:auto !important;
      ul {
        li {
          display:inline-block;
          margin:0 5px;
        }
      }
    }
  }
  @media screen and (max-width:480px) { 
    .tags { 
      .tag-items {
        padding:6px 8px;
      }
      .like {
        flex: 0 0 100%;
        max-width: 100%;
        width:100%;
        text-align:center;
        .heart {
          float:none;
          margin:0 auto;
        }
        .like-quantity {
          float:none;
          margin:0 auto;
        }
      }
      .tag-social {
        width:100%;
        flex: 0 0 100%;
        max-width: 100%;
        text-align:center;

        .social-logos {
          margin:0 auto;
          float:none;
        }
      }
    }
  }
</style>