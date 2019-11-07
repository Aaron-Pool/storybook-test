import Vue from 'vue'
import Vuex from 'vuex'
import { configure } from '@storybook/vue'

Vue.use(Vuex)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module)
