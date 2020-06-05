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
      <div class="heart" v-on:click="animateButton()" 
        v-bind:class="{heartClick : isHeartClicked}">
        <v-img :src="heart"></v-img>
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
      isHeartClicked: false,
      heart: require('@/assets/images/heart.png'),
      likeQuantity: 44,
      convertion: '',
      tagItems: ['Fashion', 'Vestibulum', 'Libero', 'Congue', 'Nulla',]
    }
  },
  mounted() {
    
  },
  methods: {
    animateButton(el) {
      let vm = this;
      vm.isHeartClicked = true;
      setTimeout(function () { 
        vm.isHeartClicked = false;
      },300)
    }
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
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 1;
    float:left;
    margin-right:10px;
    cursor:pointer;
    position: relative;
    display: inline-block;
    overflow: visible;
    -webkit-transition: color 0.7s;
    transition: color 0.7s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -35px 0 0 -35px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      content: '';
      opacity: 0;
      pointer-events: none;
    }

    &:active {
      transition:0.2s;
      transform:scale(1.2);
    }

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -35px 0 0 -35px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      content: '';
      opacity: 0;
      pointer-events: none;
    }
    &:after, &:before {
      opacity: 0;
	    box-shadow: 0 0 0 2px rgba(96, 38,134, 1);
    }

    &:after {}

    &.heartClick:before {
      -webkit-animation: anim-effect-ivana-1 0.5s forwards;
      animation: anim-effect-ivana-1 0.5s forwards;
    }

    &.heartClick:after {
      -webkit-animation: anim-effect-ivana-2 0.5s forwards;
      animation: anim-effect-ivana-2 0.5s forwards;
    }

   @-webkit-keyframes anim-effect-ivana-1 {
      0% {
        opacity: 1;
        -webkit-transform: scale3d(0.5, 0.5, 1);
        transform: scale3d(0.5, 0.5, 1);
      }
      100% {
        opacity: 0;
        -webkit-transform: scale3d(1.1, 1.1, 1);
        transform: scale3d(1.1, 1.1, 1);
      }
    }

    @keyframes anim-effect-ivana-1 {
      0% {
        opacity: 1;
        -webkit-transform: scale3d(0.5, 0.5, 1);
        transform: scale3d(0.5, 0.5, 1);
      }
      100% {
        opacity: 0;
        -webkit-transform: scale3d(1.1, 1.1, 1);
        transform: scale3d(1.1, 1.1, 1);
      }
    }

    @-webkit-keyframes anim-effect-ivana-2 {
      0% {
        opacity: 1;
        -webkit-transform: scale3d(0.5, 0.5, 1);
        transform: scale3d(0.5, 0.5, 1);
      }
      50%, 100% {
        opacity: 0;
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
      }
    }

    @keyframes anim-effect-ivana-2 {
      0% {
        opacity: 1;
        -webkit-transform: scale3d(0.5, 0.5, 1);
        transform: scale3d(0.5, 0.5, 1);
      }
      50%, 100% {
        opacity: 0;
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
      }
    }
    .v-image {
      width: 55%;
      margin: 16px auto 0;
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