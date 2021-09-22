export default {
	windowHeight: (state) => {
		return state.systemInfo ? state.systemInfo.windowHeight : 0
	},
	windowWidth: (state) => {
		return state.systemInfo ? state.systemInfo.windowWidth : 0
	},
	statusBarHeight: (state) => {
		return state.systemInfo ? state.systemInfo.statusBarHeight : 0
	},
	platform: (state) => {
		return state.systemInfo ? state.systemInfo.platform : 'android'
	},
	screenWidth: (state) => {
		return state.systemInfo ? state.systemInfo.screenWidth : 0
	}
}