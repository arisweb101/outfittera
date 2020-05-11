<template>
  <v-col cols="6" sm="6" md="6" lg="6" class="pa-8"
  >
  <v-row v-for="category in categories" :key="category.categoryName" no-gutters>
    <v-col cols="6" class="category-title">
      <div class="title">{{ category.categoryName }}</div>
    </v-col>
    <v-col cols="6">
      <div class="actions">
        <div class="next" v-if="category.next">Next: {{ category.next }}</div>
        <div class="previous" v-if="category.previous">Next: {{ category.previous }}</div>
      </div>
    </v-col>
    <div no-gutters class="articles">
      <div cols="6" v-for="item in category.articles" class="items">
        <v-img :src="item.images"></v-img>
        <div class="source">{{ item.source }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="desc">
          {{ item.description }}
        </div>
      </div>
    </div>
   </v-row>
  </v-col>
</template>
<script>
export default {
  name: 'FreshStories',
  components: {
    
  },
  data() {
    return {
        categories: [
          {
            categoryName: "Fresh Stories",
            previous: '',
            next: 'Fashion Mode',
            articles : [
              {
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              }
            ]
          },
          {
            categoryName: "Fresh Stories",
            previous: '',
            next: 'Fashion Mode',
            articles : [
              {
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              }
            ]
          },
          {
            categoryName: "Fresh Stories",
            previous: '',
            next: 'Fashion Mode',
            articles : [
              {
                images: require('@/assets/images/cat1.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat2.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: " Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              },
              {
                images: require('@/assets/images/cat4.png'),
                source: 'Lifestyle Markers',
                title: 'Grand Ferdinand New Viennese Elegance',
                description: "Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim",
              }
            ]
          },
        ]
    }
  }
}
</script>
<style lang="scss">
.category-title {
  position:relative;

  .title {
    position:absolute;
    bottom:0;
    color:#53127C;
  }
}
.actions {
  font-size:12px;
  text-align:right;
  position:relative;
  .next {
    margin:8px 0;
    position:relative;
    &:after {
      content: "";
      position:relative;
      right: -10px;
      top:5px;
      border: solid black;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
  }
  .previous {
    position:relative;
    &:after {
      content: "";
      position:relative;
      right: -10px;
      border: solid black;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
}
.articles {
  column-count: 2;
  column-gap: 1em;
  margin-top:20px;
  width:100%;
  .source {
      text-transform:uppercase;
      padding:10px 0 0;
    }
    .title {
      font-weight: bold;
      font-size: 21px;
      line-height:24px;
      padding:10px 0;
    }
  .items {
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
}
</style>