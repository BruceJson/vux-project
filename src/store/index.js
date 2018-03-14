import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
// import permission from './modules/permission'
// import app from './modules/app'
// import shareLogin from './modules/shareLogin'

Vue.use(Vuex);

var storeOptions = {
  getters,
  modules: {
    user
  }
};

export default new Vuex.Store(storeOptions)
