<template>
 <transition name="slide-burger">
    <div id="burger-menu" v-on:click="isMenuOpen" 
    v-bind:class="{ open: isActive }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </transition>
</template>
<script>
import eventBus from '@/event_bus';
export default {
    props: ['icon'],
    name: 'search',
    components: {
      eventBus
    },
    data() {
      return{
        searchOpen: false,
      }
     },
     methods: {
      openSearchBar() {
        let vm = this;
        vm.searchOpen = !vm.searchOpen;
        eventBus.$emit('isSearchBarOpen', vm.searchOpen)
       }
      },
    }
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.4s;
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
</style>