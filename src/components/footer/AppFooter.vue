<template>
  <v-row class="footer" no-gutters>
   <v-row class="footer-container mb-8" align="center" justify="center">
      <v-col cols="2">
        <v-img :src="footerLogo" class="footer-logo"></v-img>
        <div class="copyright">&copy; OUTFITTERA 2020</div>
      </v-col>
      <v-col cols="7" class="footer-menu">
        <ul class="menu">
          <li v-for="menu in menus">
            <router-link :to="menu.path">{{ menu.title }}</router-link>
          </li>
        </ul>
        <div class="get-in-touch">
          <ul>
            <li>Get In Touch</li>
            <li><v-img :src="facebook"></v-img></li>
            <li><v-img :src="instagram"></v-img></li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
export default {
  name: 'Tags',
  components: {
  },
  data() {
    return {
      footerLogo: require('@/assets/images/logo-white.png'),
      facebook: require('@/assets/images/fb-white.png'),
      instagram: require('@/assets/images/ig-white.png'),
      menus: [],
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.menus = [
      { title: 'Home', path: '/' },
      { title: 'Fashion Mode', path: '/fashion-mode' },
      { title: 'Travel Miles', path: '/travel-miles'},
      { title: 'Lifestyle Makers', path: '/lifestyle-makers' },
      { title: 'Technology & Machine', path: '/technology-and-machine' },
      { title: 'Mart', path: '/mart' },
      { title: 'About', path: '/about' },
    ]
    }
  },
}
</script>
<style lang="scss" scope>
.footer {
  height:170px;
  background:#2B2B2B;
  padding:20px;
  .footer-container {
    margin:0 auto;
    width:80%;
    .footer-logo {
      width:140px;
    }
    .copyright {
      position:absolute;
      bottom:20px;
      color:rgba(255, 255, 255, 0.4);
      font-size:12px;
    }
    .footer-menu {
      position:relative;
      ul.menu {
      position:relative;
      top:6px;
      text-align:right;
      li {
        display:inline-block;
        text-transform:uppercase;
        margin:0 0px 0 30px;
        font-size:14px;
         
        a {
          color:#fff;
          text-transform:uppercase;
          text-decoration:none;
          transition: 0.2s;

          &:hover {
            transition: 0.2s;
            color:#ddd;
          }
        }
        &:first-child {
          display:none;
        }
      }
    }
    }
    
    .get-in-touch {
      position:relative;
      top:50px;
      right:0;
      ul{
      position:relative;
      top:6px;
      text-align:right;
      li {
        color:#fff;
        display:inline-block;
        text-transform:uppercase;
        margin:0 0 0 15px;
        font-size:14px;
        a {
          color:#fff;
          text-transform:uppercase;
          text-decoration:none;
          transition: 0.2s;

          &:hover {
            transition: 0.2s;
            color:#ddd;
          }
        }
        &:first-child {
          top:-4px;
          position:relative;
        }
      }
    }
    }
  }
}
  
</style>