<template>
  <v-app>
    <router-view />
     <cursor-fx color="#000" config outside-size="100" color-hover="#ffffff"/>
  </v-app>
</template>

<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  name: "App",
  methods: {},
  components: {
    CursorFx
  }
};
</script>
