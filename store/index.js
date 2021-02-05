import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { User, Config } from '@/common/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	getters,
	state: {
		systemInfo: null,
		appHide: false,
		userinfo: {
			avatar: '',
			username: '',
			nickname: '',
			desc: '',
			is_vip: 0,
			refcode: 'fMJzUY'
		},
		path: '/pages/home/home',
		pusherMode: 0,
		config: null
	},
	mutations: {
		setSystemInfo(state, data) {
			state.systemInfo = data
		},
		setAppHide(state, data) {
			state.appHide = data
		},
		setUserinfo(state, data) {
			state.userinfo = data
			uni.setStorage({
			    key: 'userinfo',
			    data,
			    success: () => {}
			})
		},
		setPath(state, path) {
			state.path = path
		},
		setPusherMode(state, data) {
			state.pusherMode = data
		},
		setConfig(state, data) {
			state.config = data
		}
	},
	actions: {
		updateUserinfo({ commit }) {
			User().then(({ code, data }) => {
				if (code === 200) {
					commit('setUserinfo', data)
				}
			})
		},
		getConfig({ commit }) {
			Config({ key: 'base' }).then(({ code, data }) => {
				if (code === 200) {
					commit('setConfig', data)
				}
			})
		}
	}
})

export default store