import { createStore } from 'vuex'

const axios = require('axios')

export default createStore({
	state: {},
	mutations: {},
	actions: {
		getAllPosts() {
			axios.get('')
		}
	},
	modules: {}
})
