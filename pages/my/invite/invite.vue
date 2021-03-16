<template>
	<view class="body">
		<scroll-view class="scroll-view" :style="{'height': `${windowHeight}px`}">
			<view class="status_bar"></view>
			<view class="nav">
				<view class="flex-1" @tap="_back">
					<image class="nav-back__icon" src="/static/images/fanhui.png" mode=""></image>
				</view>
				<view class="flex-3 nav-title">邀请好友</view>
				<view class="flex-1"></view>
				<!-- <view class="flex-1 nav-label">推广记录</view> -->
			</view>
			<view class="text-bg">
				<image class="text-bg__image" src="/static/images/my/invite-text.png" mode=""></image>
			</view>
			<view class="main">
				<image class="gold-bg" src="/static/images/my/invite-gold.png" mode=""></image>
				<view class="title">您的邀请码</view>
				<view class="code-box">
					<view class="code" v-for="(item, index) in userinfo.refcode.split('')" :key="index">{{ item }}</view>
				</view>
				<view class="tip">邀请的好友也可在注册时直接填写邀请码</view>
				<view class="qrimg">
				    <tki-qrcode
				    ref="qrcode"
				    :val="userinfo.refcode"
				    :size="size"
				    :onval="onval"
				    @result="qrR" />
				</view>
				<view class="tip">长按图片即可保存</view>
				<view class="btn">复制邀请码</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'
	
	export default {
		data() {
			return {
				size: 316,
				onval: true
			}
		},
		computed: {
			...mapGetters(['windowHeight']),
			...mapState(['userinfo'])
		},
		onReady() {
			this.$refs.qrcode._makeCode()
		},
		methods: {
			_back() {
				uni.navigateBack()
			},
			qrR(result) {}
		}
	}
</script>

<style>
	.nav-label {
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: right;
	}
	.tip {
		font-size: 20rpx;
		color: #999999;
	}
	.title {
		margin: 22rpx 0 30rpx;
		color: #333;
		font-size: 31rpx;
	}
	.code {
		width: 42rpx;
		height: 59rpx;
		line-height: 59rpx;
		text-align: center;
		background: #EFEFEF;
		font-size: 31rpx;
		color: #DA4C24;
		border-radius: 4rpx;
		margin: 0 4.5rpx;
	}
	.code-box {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 31rpx;
	}
	.qrimg {
		margin: 37rpx 0 18rpx;
		text-align: center;
	}
	.btn {
		width: 562rpx;
		height: 87rpx;
		line-height: 87rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 28rpx;
		background: linear-gradient(90deg, #EC7C48, #E85085);
		box-shadow: 0 9rpx 9rpx 0 rgba(253, 173, 106, 0.59);
		border-radius: 44rpx;
		margin: 0 auto;
	}
	.gold-bg {
		position: absolute;
		top: -114rpx;
		width: 616rpx;
		height: 207rpx;
		left: 0;
	}
	.main {
		margin: 0 auto;
		width: 636rpx;
		height: 803rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		position: relative;
		padding: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.text-bg {
		text-align: center;
	}
	.text-bg__image {
		margin: 63rpx 0 46rpx;
		width: 500rpx;
		height: 167rpx;
	}
	.nav-title {
		text-align: center;
		color: #FFFFFF;
		font-size: 32rpx;
	}
	.flex-3 {
		flex: 3;
	}
	.flex-1 {
		flex: 1;
	}
	.nav {
		padding: 0 24rpx;
		height: 88rpx;
		display: flex;
		align-items: center;
	}
	.nav-back__icon {
		width: 50rpx;
		height: 50rpx;
	}
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
	}
	.scroll-view {
		background: url(/static/images/my/invite-bg.png) no-repeat;
		background-size: cover;
	}
</style>
