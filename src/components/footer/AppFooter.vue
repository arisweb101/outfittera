<template>
  <v-row class="footer" data-cursor-hover no-gutters>
   <v-row class="footer-container mb-8" align="center" justify="center">
      <v-col cols="12" sm="12" xl="2" lg="2" md="2">
        <v-img :src="footerLogo" class="footer-logo"></v-img>
        <div class="copyright">&copy; OUTFITTERA 2020</div>
      </v-col>
      <v-col xl="7" lg="7" md="10" sm="12"  class="footer-menu">
        <ul class="menu">
          <li v-for="menu in menus">
            <router-link  :to="menu.path">{{ menu.title }}</router-link>
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
      footerLogo: require('@/assets/images/logo-white.svg'),
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
  min-height: 170px;
  background: #2B2B2B;
  padding: 20px;
  position: absolute;
  width: 100%;
  .footer-container {
    margin:0 auto;
    width:50%;
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
        margin:0 15px 0 0px;
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



@media screen and (max-width:992px){

  .footer {
    min-height: 200px;
    .footer-container {
      padding:0;
      .footer-logo {
        margin:0 auto;
        width:100px;
      }
      .footer-menu {
        padding:0;
        ul {
          margin:0;
          padding:0;
          text-align: center !important;

          li {
            margin:0 10px 0 10px !important;
          }
        }
      }
      .get-in-touch {
        top:12px;
      }
      .copyright {
        left: 0;
        right: 0;
        bottom:10px !important;
        margin: 0 auto;
        width: fit-content;
      }
    }
  } 
}

@media screen and (max-width:767px){ 
  .footer {
    .footer-container {
      .footer-menu {
        padding:0;
        ul.menu {
          li {
            display: block !important;
          }
        }
      }
    }
  }
}
</style>