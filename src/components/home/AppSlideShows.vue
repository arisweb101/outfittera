<template>
  <v-col cols="6" sm="6" md="6" lg="6" class="slide-images">
    <div class="slider-container" v-bind:class="{ open: isActive }">
      <img class="logo" :src="mainLogo">
      <searchIcon class="search-icon" :icon="searchIcon"/>
      <div class="slide-social-icons">
       <ul>
         <li><a href=""><v-img class="facebook" :src="facebookIcon"></v-img></a></li>
         <li><a href=""><v-img class="instagram" :src="instagramIcon"></v-img></a></v-img></li>
       </ul>
      </div>
      <VueSlickCarousel v-bind="settings" class="height100">
        <div class="slide-item-container" v-for="item in slideShows">
          <v-img data-cursor-hover gradient="to top right, rgba(83, 18, 124, 0), rgba(83, 18, 124, 0.47)" class="slide-item" :src="item.image">
            <div class="slide-titles">
            <div class="slide-title">{{ item.title }}</div>
            <div class="slide-sub-title">{{ item.subTitle }}</div>
          </div>
          </v-img>
        </div>
      </VueSlickCarousel>
    </div>
  </v-col>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import searchIcon from '@/components/search/searchIcon.vue'
import eventBus from '@/event_bus';
const vm = this;
export default {
  name: 'Home',
  components: {
    VueSlickCarousel,
    eventBus,
    searchIcon,
  },
  data() {
    return {
      searchIcon: require('@/assets/images/search.png'),
      mainLogo: require('@/assets/images/logo-white.svg'),
      fbGrayIcon: require('@/assets/images/fb-gray.svg'),
      igGrayIcon: require('@/assets/images/ig-gray.svg'),
      facebookIcon: require('@/assets/images/fb-white.png'),
      instagramIcon: require('@/assets/images/ig-white.png'),
      settings: {
        arrows: true,
        autoplay: true,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        fade:true,
        autoplaySpeed:3000,
        speed:1000,
        useCSS: true,
        useTransform: true,
      },
      slideShows: [
        {
          image: require('@/assets/images/slideshow1.png'),
          title: "The Lifestyle",
          subTitle: "feat. July Palafox"
        },
        {
          image: require('@/assets/images/slideshow2.jpg'),
          title: "The Lifestyle 2",
          subTitle: "feat. July Palafox"
        },
        {
          image: require('@/assets/images/slideshow3.jpg'),
          title: "The Lifestyle 3",
          subTitle: "feat. July Palafox"
        },
        {
          image: require('@/assets/images/slideshow4.jpg'),
          title: "The Lifestyle 4",
          subTitle: "feat. July Palafox"
        }
      ],
      menuLogo: require('@/assets/images/logo-black.svg'),
      isActive: '',
      menuShow: false,
      menus: [
        { title: 'Home', path: '/' },
        { title: 'Fashion Mode', path: '/fashion-mode' },
        { title: 'Travel Miles', path: '/travel-miles'},
        { title: 'Lifestyle Makers', path: '/lifestyle-makers' },
        { title: 'Technology & Machine', path: '/technology-and-machine' },
        { title: 'Mart', path: '/mart' },
        { title: 'About', path: '/about' },
      ],
    }
  },
  mounted() {
     const vm = this;
     vm.eventPass()
  },
  methods: {
      eventPass() {
         const vm = this;
         eventBus.$on('isSearchBarOpen', val => {
           vm.menuShow = val
         })
         eventBus.$on('menuOpen', val => {
           vm.menuShow = val
           vm.isActive = val
         })
      },
      isMenuOpen() {
        const vm = this;
        vm.menuShow = !vm.isActive;
        vm.isActive = !vm.isActive;
        eventBus.$emit('menuOpen', vm.menuShow);
      },
      openSearchBar() {
        let vm = this;
        vm.searchOpen = !vm.searchOpen;
        eventBus.$emit('isSearchBarOpen', vm.searchOpen)
      }
    }
}
</script>
<style lang="scss">
.home {
  height:100%;
}
.height100 {
  height:100%;
}
.slider-container {
  position:fixed;
  user-select:none;
  transition: 0.3s;
  left:0;
  height:100%;
  width:50%;
  z-index:3;
  &.open {
    left:300px;
    transition: 0.3s;
  }
}

.slick-slider {
  z-index:1;
}
.slick-list {
  position:fixed !important;
  width:50%;
}
.slide-images {
  width:100%;
  display:block;
  position:fixed;
  text-align:center;
  .search-icon {
    position:absolute;
    right:20px;
    top:22px;
    z-index:2;
    width:20px;
    cursor:pointer;
  }
  .logo {
    position:absolute;
    top:20px;
    margin:0 0px 0 -40px;
    z-index:2;
  }
.slide-item-container {
  height:100vh !important;
  .slide-item {
    background-size: cover;
    width: 100%;
    height: 100%;
    display: block;
    position:relative;
    z-index:2;
  }
  .slide-titles {
    position:absolute;
    bottom:0px;
    color:#fff;
    left:0;
    right:0;
    opacity:0;
    margin:0;
    font-family: 'Libre Baskerville', serif;
    z-index:9;
    .slide-title {
      font-size:40px;
      font-weight:bold;
    }
    .slide-sub-title {
      font-size:40px;
    }
  }
}
}

 .slick-active.slick-current {
  transition: 1.5s;
    .slide-titles {
    transition:1.5s;
    opacity:1;
    bottom:120px;
    }
  }

.menu-container {
  width:0px;
  height:100%;
  position:fixed;
  background:#fff;
  z-index:5;
  transition: width .3s ease;

  &.open {
    width:300px;
    transition: width .3s ease;
  }

  .menu-logo {
    width:130px;
    position:absolute;
    left:20px;
    top:20px;
    z-index:5;
  }

  .menu-list {
    background:#fff;
    margin:100px 0 0 25px;
    text-transform:uppercase;
    text-align:left;
  }

  .menu-social {
    position:absolute;
    bottom:20px;
    left:0;
    right:0;
    margin:0 auto;
    transition:.2s;
    text-align:center;
    transform:translateY(0px);
    &.open {
      transition:.2s;
      transform:translateY(-30px);
    }
    .connect {
      color:#000;
      position:relative;
      top:-10px;
      font-size:13px;
    }
    ul {
      padding:0;
      margin:0;
      list-style:none;

      li {
        margin:0 5px;
        display:inline-block;

        .v-image {
          width:16px;
        }
      }
    }
  }
}

.slide-burger-enter-active {
  transition: all .1s ease;
}
.slide-burger-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-burger-enter, .slide-burger-leave-to
/* .slide-menu-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}

#hp-burger-menu 
{
  width: 30px;
  height: 45px;
  position: absolute;
  z-index:6;
  left:20px;
  top:24px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .2s ease-in-out;
  -moz-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2), span:nth-child(3) {
    top: 8px;
  }
  span:nth-child(4) {
    top: 16px;
  }

  &.open {
    transform: translateX(-60px) !important;
    span {
      background:#404040;
    }
    span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
}
.slide-social-icons {
  position: absolute;
  bottom: 5%;
  z-index: 3;
  right: 30px;
  ul {
    padding:0;
    margin:0;
    list-style:none;
    li {
      display:inline-block;
      margin:0 5px;
    }
  }
}
.slick-arrow {
  &.slick-next {
    position: absolute;
    top: 92%;
    left: 50px;
    z-index: 5;
    &:before {
      content:'';
      border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      color:#fff;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
  &.slick-prev {
    position:absolute;
    top:92%;
    left:30px;
    z-index:5;
    &:before {
      content:'';
      color:#fff;
      border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
.v-list-item__content {
  &:hover {
    color:#53127C;
  }
}

@media screen and (max-width:992px) {
  .slide-images {
    width:100% !important;
    max-width: 100%;
    height:100% !important;
    flex: 0 0 100% !important;
  }
  .slider-container {
    width:100%;
    position: relative !important;
  }
  .slick-list {
    width:100%;
    position: relative !important;
  }
}
</style>