<template>
    <div class="social-logos">
       <ul>
        <li><a :href="$store.getters.share('fb', '')" target="_blank"><v-img class="s-logo" :src="facebook"></v-img></a></li>
        <li><a :href="$store.getters.share('twitter', title)" target="_blank"><v-img class="s-logo" :src="twitter"></v-img></a></li>
        <li><a :href="$store.getters.share('pinterest')" target="_blank"><v-img class="s-logo" :src="pinterest"></v-img></a></li>
       </ul>
    </div>
</template>
<script>
  export default {
    name: 'SocialLogos',
    props: ['title'],
    components: {

    },
    data() {
      return{
        facebook: require('@/assets/images/fb-circle.png'),
        twitter: require('@/assets/images/twitter-circle.png'),
        pinterest: require('@/assets/images/pinterest-cirlce.png'),
      }
     },
      methods: {
        isMenuOpen() {

        }
      }
  }
</script>
<style lang="scss">
.social-logos {
  position:fixed;
  z-index:4;
  ul {
    padding:0;
    margin:0;
    list-style:none;
    li {
      width:30px;
      list-style:none;
      margin:10px 0;
      .s-logo {
        width:30px;
        outline:none;
        transition:0.2s;
         &:hover {
          transition: 0.2s;
          -ms-transform: scale(1.2); /* IE 9 */
          transform: scale(1.2);
        }
      }

    }
  }
}
</style>
