import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const UPDATE_THEME = 'UPDATE_THEME'

export default new Vuex.Store({
  state: {
    theme: 'darker'
  },
  getters: {
    theme (state: any) {
      if (localStorage.theme) {
        state.theme = localStorage.theme
        return state.theme
      }

      return state.theme
    }
  },
  mutations: {
    [UPDATE_THEME] (state: any, theme: any) {
      state.theme = theme
      localStorage.theme = theme
    }
  },
  actions: {
    setLigther (state: any) {
      state.commit(UPDATE_THEME, 'lighter')
    },
    setDarker (state: any) {
      state.commit(UPDATE_THEME, 'darker')
    }
  }
})
