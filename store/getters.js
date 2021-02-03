export default {
	windowHeight: (state) => {
		return state.systemInfo.windowHeight
	},
	windowWidth: (state) => {
		return state.systemInfo.windowWidth
	},
	statusBarHeight: (state) => {
		return state.systemInfo.statusBarHeight
	},
	platform: (state) => {
		return state.systemInfo.platform
	},
	screenWidth: (state) => {
		return state.systemInfo.screenWidth
	}
}