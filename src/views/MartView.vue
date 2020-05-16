<template>
  <div class="mart">
    <MartComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MartComponent from '@/components/mart/AppMart.vue'

export default {
  name: 'HomeView',
  components: {
    MartComponent
  }
}
</script>
