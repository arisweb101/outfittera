<template>
 <v-img :src="icon" v-on:click="openSearchBar"></v-img>
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
.search-bar {
  width:100%;
  height:0px;
  opacity:0;
  padding:0 !important;
  margin:0 !important;
  transition: height 0.2s ease-out;
  &.open {
    opacity:1;
    height:60px;
    transition: 0.2s height;
  }
  .search-field {
    width:100%;
    border:none;
    text-align:center;
    font-size:20px;
    padding:0;
    height:100%;
    .v-input__slot:before {
      border:none !important;
      &.focus {
        border-color: #ff9800;
      }
    }
    input {
      text-align:center;
      height:100%;
      min-height:55px;
    }
  }
  .submit {
    position:absolute;
    right:10px;
    top:22px;
    cursor:pointer;
    transition: 0.2s;
    &:hover {
      transform:scale(1.2);
      transition: 0.2s;
    }
  }
}
</style>