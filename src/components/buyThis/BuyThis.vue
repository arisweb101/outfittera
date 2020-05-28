<template>
  <v-layout>
    <v-row class="buy-this">
      <v-col cols="12" sm="12" xs="12" lg="6" md="6">
        <v-img :src="itemImage" class="item-image"></v-img>
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6" class="item-desc">
        <div class="item-name">{{ itemName }}</div>
        <button type="button" class="buy-this-bt">Buy This</button>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>

export default {
  props: ['pageTitle'],
  name: 'BuyThis',
  components: {
    
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
@media screen and (max-width:767px) {  
  .item-desc {

  }
}
</style>