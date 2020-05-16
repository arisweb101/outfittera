module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/sass/_main.scss";
        `
      }
    }
  }
};
