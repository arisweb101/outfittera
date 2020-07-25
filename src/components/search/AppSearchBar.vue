<template>
  <v-container
    fluid
    no-gutters
    class="search-bar"
    v-bind:class="{ open: isSearchBarOpen }"
  >
    <transition name="fade">
      <v-row no-gutters v-show="isSearchBarOpen">
        <v-col cols="12" md="12">
          <form @submit="searchSubmit">
            <v-text-field
              class="search-field"
              align="center"
              v-model="search"
              :placeholder="placeholder"
              loading="secondary"
            ></v-text-field>
            <span class="mr-4 submit" @click="searchSubmit">
              <v-img :src="searchIcon"></v-img>
            </span>
          </form>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>
<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import eventBus from '@/event_bus';
import router from './../../router';
export default {
  name: 'search',
  components: {
    eventBus,
    CursorFx
  },
  data() {
    return {
      search: '',
      placeholder: 'Type to search',
      isSearchBarOpen: false,
      searchIcon: require('@/assets/images/search-gray.png')
    };
  },
  mounted() {
    let vm = this;
    eventBus.$on('isSearchBarOpen', val => {
      vm.isSearchBarOpen = val;
      if (vm.isSearchBarOpen) {
        vm.search = '';
      }
    });
  },
  methods: {
    searchSubmit(e) {
      e.preventDefault();
      const vm = this;
      vm.isSearchBarOpen = false;
      eventBus.$emit('searchSubmit');
      router.push({ name: 'Search', query: { items: vm.search } });
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.4s;
}
.search-bar {
  width: 100%;
  height: 0px;
  opacity: 0;
  padding: 0 !important;
  margin: 0 !important;
  transition: height 0.2s ease-out;
  &.open {
    opacity: 1;
    height: 60px;
    transition: 0.2s height;
  }
  .search-field {
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    padding: 0;
    height: 100%;
    .v-input__slot:before {
      border: none !important;
      &.focus {
        border-color: #ff9800;
      }
    }
    input {
      text-align: center;
      height: 100%;
      min-height: 55px;
    }
  }
  .submit {
    position: absolute;
    right: 10px;
    top: 22px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
}
</style>
