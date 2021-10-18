<template>
	<view class="qq">
		<view class="qq-card">
			<view class="qq-number">群号: {{ config.base_qq }}</view>
			<image class="qq-img" :src="config.base_qq_url" mode=""></image>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['config'])
		},
		onLoad() {
			console.log(this.config)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.qq-number {
		font-size: 28rpx;
		color: #909399;
	}
	.qq-img {
		width: 425rpx;
		height: 425rpx;
		margin-top: 35rpx;
	}
	.qq-card {
		background-color: #FFFFFF;
		border-radius: 16rpx;
		padding: 55rpx 0;
		width: 535rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.qq {
		height: 100vh;
		overflow: hidden;
		background: url(@/static/qq_groud_bg.jpg) no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
