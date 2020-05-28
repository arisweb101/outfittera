<template>
    <div class="menu-global-container" v-bind:class="{ open: isActive }" >
      <div class="menu-logo" v-show="menuShow">
        <v-img :src="menuLogo" class="menu-logo"></v-img>
      </div>
      <transition name="slide-burger">
          <div id="burger-menu" v-on:click="isMenuOpen" 
          v-bind:class="{ open: isActive }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </transition>
      <div class="menu-list" v-show="menuShow">     
        <v-list>
          <v-list-item
            v-for="menu in menus"
            :key="menu.title"
            :to="menu.path"
          >
            <v-list-item-content>
              <v-list-item-title>
              {{ menu.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="menu-social" v-bind:class="{ open: menuShow }">
          <span class="connect">Connect To asdfa</span>
          <ul>
            <li><a href=""><v-img :src="fbGrayIcon"></v-img>
            </a></li>
            <li><a href=""><v-img :src="igGrayIcon"></v-img>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
 import slideShows from '@/components/home/AppSlideShows.vue'
 import categories from '@/components/home/AppCategories.vue'
 import eventBus from '@/event_bus';
  export default {
    name: 'Home',
    components: {
     slideShows,
     eventBus,
     categories
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.svg'),
        fbGrayIcon: require('@/assets/images/fb-gray.svg'),
        igGrayIcon: require('@/assets/images/ig-gray.svg'),
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
      }
  }
</script>
<style lang="scss">
.height100 {
  height:100%;
}
.menu-global-container {
  width:0px;
  height:100%;
  position:absolute;
  z-index:5;
  display:block;
  background:#fff;
  transition: width .1s ease;
  
  &.open {
    width:300px;
    transition: width .1s ease;
    z-index:10;
  }

  .menu-logo {
    width:130px;
    position:absolute;
    left:20px;
    top:10px;
    z-index:5;
  }

  .menu-list {
    margin:100px 0 0 25px;
    text-transform:uppercase;
    text-align:left;
    background:#fff;
  }
  .v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
    font-family: 'Poppins', sans-serif !important;
    font-weight:600;
  }
  .v-list-item--active {
    color:#53127C !important;
  }
  .v-ripple__container {
    display:none;
  }
  .v-list-item--link:before, .v-list-item--link:focus:before {
    background:none !important;
  }
  .v-list-item--link:focus {
     &:active, &:before {
      background:none;
    }
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
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-burger-enter, .slide-burger-leave-to
/* .slide-menu-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}

#burger-menu 
{
  width: 30px;
  height: 45px;
  position: absolute;
  z-index:3;
  left:20px;
  top:24px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .1s ease-in-out;
  -moz-transition: .1s ease-in-out;
  -o-transition: .1s ease-in-out;
  transition: .1s ease-in-out;
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
    transform: translateX(230px);
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

.v-list-item__content {
  &:hover {
    color:#53127C;
  }
}
.before-enter {
  opacity:0;
  transform: translateY(100px);
  transition:0.4s ease-in;  
  overflow-x: hidden;

}
.enter {
  opacity:1;
  transform:translateY(0px);
   
}
</style>