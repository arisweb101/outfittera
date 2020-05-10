<template>
    <div class="social-logos">
       <ul>
        <li><router-link :to="facebook"><v-img class="s-logo" :src="facebook"></v-img></router-link></li>
        <li><router-link :to="twitter"><v-img class="s-logo" :src="twitter"></v-img></router-link></li>
        <li><router-link :to="web"><v-img class="s-logo" :src="web"></v-img></router-link></li>
       </ul>
    </div>
</template>
<script>
  export default {
    name: 'SocialLogos',
    components: {
     
    },
    data() {
      return{
        facebook: require('@/assets/images/fb-circle.png'),
        twitter: require('@/assets/images/twitter-circle.png'),
        web: require('@/assets/images/web-circle.png'),
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
  z-index:10;
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
        transition:0.5s;
         &:hover {
          transition: 0.5s;
          -ms-transform: scale(1.2); /* IE 9 */
          transform: scale(1.2);
        }
      }
     
    }
  }
}
</style>