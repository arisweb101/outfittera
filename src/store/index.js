import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    share: (state) => (shareType, text) => {
      let retVal = ''
      let url = window.location.href
      if(shareType == 'fb'){
        retVal = 'https://www.facebook.com/sharer/sharer.php?u=' + url
      }else if(shareType == 'twitter'){
        retVal = 'http://twitter.com/share?text='+text+'&url=' + url
      }else if(shareType == 'pinterest'){
        retVal = 'http://pinterest.com/pin/create/button/?url='+url+'&description=' + text
      }

      return retVal
    }
  }
})
