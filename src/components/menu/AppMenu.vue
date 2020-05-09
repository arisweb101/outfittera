<template>
    <div class="menu-global-container" v-bind:class="{ open: isActive }" 
   >
      <div class="menu-logo" v-show="menuShow">
        <v-img :src="menuLogo"></v-img>
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
      </div>
    </div>
</template>
<script>
 import slideShows from '@/components/home/AppSlideShows.vue'
 import categories from '@/components/home/AppCategories.vue'
  export default {
    name: 'Home',
    components: {
     slideShows,
     categories
    },
    data() {
      return{
        menuLogo: require('@/assets/images/logo-black.png'),
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
      methods: {
        isMenuOpen() {
          const vm = this;
          vm.menuShow = !vm.isActive;
          vm.isActive = !vm.isActive;
        }
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
  z-index:2;
  display:block;
  background:#fff;
  transition: width .3s ease;
  
  &.open {
    width:300px;
    transition: width .3s ease;
  }

  .menu-logo {
    width:130px;
    position:absolute;
    left:42px;
    top:20px;
  }

  .menu-list {
    margin:100px 0 0 25px;
    text-transform:uppercase;
    text-align:left;
    background:#fff;
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
</style>