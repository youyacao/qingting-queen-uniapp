<script>
	// #ifdef APP-PLUS
	import APPUpdate from "@/js_sdk/zhouWei-APPUpdate/APPUpdate"
	// #endif

	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef APP-PLUS
			APPUpdate()
			// #endif

			// 保持屏幕常亮
			uni.setKeepScreenOn({
				keepScreenOn: true
			})
			try {
				const systemInfo = uni.getSystemInfoSync()
				this.$store.commit('setSystemInfo', systemInfo)
				this.$store.dispatch('getConfig')
			} catch (e) {
				// error
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError: function() {
			console.log('App error')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// #ifndef APP-PLUS-NVUE
	@import "uview-ui/index.scss"
	// #endif
</style>
