<template>
  <v-layout>
    <v-row class="buy-this">
      <v-col cols="12" sm="6" xs="6" lg="6" md="6">
        <img data-cursor-hover :src="itemImage" class="item-image"></img>
      </v-col>
      <v-col cols="12" sm="6" lg="6" md="6" class="item-desc">
        <div class="item-name">{{ itemName }}</div>
        <button type="button" class="buy-this-bt">Buy This</button>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import hoverEffect from 'hover-effect';
export default {
  props: ['pageTitle'],
  name: 'BuyThis',
  components: {
    CursorFx,
    hoverEffect,
  },
  data() {
    return {
      itemImage: require('@/assets/images/buy-this-item.png'),
      itemName: 'Winter Set Clothes NY',
    };
  },
  mounted() {
    setTimeout(function() {
      new hoverEffect({
        parent: document.querySelector('.item-image'),
        intensity: 0.3,
        image1: require('@/assets/images/buy-this-item.png'),
        image2: require('@/assets/images/buy-this-item.png'),
        imagesRatio: 1,
        displacementImage: require('@/assets/images/displacement/4.png'),
      });
    }, 1500);
  },
  methods: {},
};
</script>
<style lang="scss" scope>
.item-image {
  width: 100%;
}
.item-desc {
  text-align: left;
  padding-left: 20px;
  .item-name {
    font-size: 18px;
  }
  .buy-this-bt {
    float: left;
    position: relative;
    width: 122px;
    height: 40px;
    box-sizing: border-box;
    transition: 0.6s ease;
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
@media screen and (max-width: 767px) {
  .item-image {
    max-height: 300px;
  }
}
</style>
