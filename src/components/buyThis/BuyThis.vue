<template>
  <v-layout>
    <v-row class="buy-this">
      <v-col cols="12" sm="12" xs="12" lg="6" md="6">
        <v-img data-cursor-hover :src="itemImage" class="item-image"></v-img>
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6" class="item-desc">
        <div class="item-name">{{ itemName }}</div>
        <button type="button" class="buy-this-bt">Buy This</button>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  props: ['pageTitle'],
  name: 'BuyThis',
  components: {
    CursorFx
  },
  data() {
    return {
      itemImage: require('@/assets/images/buy-this-item.png'),
      itemName: "Winter Set Clothes NY",

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scope>
.item-image {
  width:100%;
}
.item-desc {
  text-align:left;
  padding-left:20px;
  .item-name {
    font-size:18px;
  }
  .buy-this-bt {
    float:left;
    position:relative;
    width: 122px;
    height: 40px;
    box-sizing: border-box;
    transition: 0.2s;
    margin:20px 0;
    outline:none;
    text-align:left;
    &:before {
      content: "";    
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      position:absolute;
      right:5px;
      top:15px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      &:hover:before {
        background: #53127C;
      }
    }
    &:after {
      content: "";    
      position: absolute;
      width: 100%; 
      height: 1px;
      display: block;
      margin-top: 5px;
      right:0;
      background: #53127C;
      transition-delay: 0.3s;
      transition: width .5s ease;
      -webkit-transition: width .5s ease;
    }
    &:hover:after{
      width: 0;
      left: 1000;
      background: #53127C;
    }
    &:hover {
      transition: 0.2s;
      color:#53127C;
    }
  }
}
@media screen and (max-width:767px) {  
  .item-desc {

  }
}
</style>