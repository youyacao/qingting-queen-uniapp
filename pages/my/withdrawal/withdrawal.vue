<template>
	<view class="recharge">
		<view class="recharge-top">
			<text>当前余额:</text>
			<text class="recharge-top_balance">{{ userinfo.gold || '0' }} 金币</text>
		</view>
		<view class="recharge-content">
			<view class="recharge-input">
				<text>￥</text>
				<input type="number" placeholder="请输入提现金额（1金币 = 1元）" v-model="amount">
			</view>
			<view class="recharge-select">
				<view class="recharge-select_item" :class="{'active': amount === 50}" @tap="amount = 50">50元</view>
				<view class="recharge-select_item" :class="{'active': amount === 100}" @tap="amount = 100">100元</view>
				<view class="recharge-select_item" :class="{'active': amount === 150}" @tap="amount = 150">150元</view>
			</view>
			<view class="recharge-select">
				<view class="recharge-select_item" :class="{'active': amount === 200}" @tap="amount = 200">200元</view>
				<view class="recharge-select_item" :class="{'active': amount === 300}" @tap="amount = 300">300元</view>
				<view class="recharge-select_item" :class="{'active': amount === 500}" @tap="amount = 500">500元</view>
			</view>
		</view>
		<view class="recharge-pay">
			<view class="recharge-pay_item" @tap="pay_type = 'wechat'">
				<view class="recharge-pay_content">
					<image class="recharge-pay_logo" src="@/static/wechat_pay.png" mode="aspectFit"></image>
					<view class="recharge-pay_text">
						<view class="title">微信</view>
						<view class="subtitle">提现</view>
					</view>
				</view>
				<image class="recharge-pay_check" src="@/static/check-one.png" mode="" v-if="pay_type === 'wechat'"></image>
				<image class="recharge-pay_check" src="@/static/check.png" mode="" v-else></image>
			</view>
			<view class="recharge-pay_item" @tap="pay_type = 'alipay'">
				<view class="recharge-pay_content">
					<image class="recharge-pay_logo" src="@/static/alipay.png" mode="aspectFit"></image>
					<view class="recharge-pay_text">
						<view class="title">支付宝</view>
						<view class="subtitle">提现</view>
					</view>
				</view>
				<image class="recharge-pay_check" src="@/static/check-one.png" mode="" v-if="pay_type === 'alipay'"></image>
				<image class="recharge-pay_check" src="@/static/check.png" mode="" v-else></image>
			</view>
		</view>
		<view class="recharge-pay_account">
			<input type="text" placeholder="请输入提现账号" v-model="account"/>
		</view>
		<view class="recharge-btn" @tap="withrawalSubmit">提现</view>
	</view>
</template>

<script>
	import { withdrawal } from '@/common/api.js'
	import { mapState } from 'vuex'
	
	export default {
		data() {
			return {
				amount: '',
				pay_type: 'wechat',
				account: ''
			}
		},
		computed: {
			...mapState(['userinfo'])
		},
		methods: {
			withrawalSubmit() {
				if (this.amount === '') {
					return uni.showToast({
						title: '请输入提现金额',
						icon: 'none'
					})
				}
				if (this.account === '') {
					return uni.showToast({
						title: '请输入提现账号',
						icon: 'none'
					})
				}
				if (Number(this.amount) > this.userinfo.gold) {
					return uni.showToast({
						title: '金币不足',
						icon: 'none'
					})
				}
				withdrawal({
					type: 'GOLD',
					amount: this.amount,
					remark: `提现方式: ${this.pay_type}, 提现账号: ${this.account}`
				}).then(({ code, msg }) => {
					if (code === 200) {
						uni.showToast({
							title: msg,
							icon: 'none',
							success() {
								uni.navigateBack()
							}
						})
					}
					uni.showToast({
						title: msg,
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.recharge {
		.recharge-pay_account {
			margin-top: 20rpx;
			background-color: #FFFFFF;
			padding: 30rpx;
		}
		.recharge-pay {
			.subtitle {
				font-size: 28rpx;
				color: #909399;
			}
			.title {
				font-size: 32rpx;
			}
			.recharge-pay_content {
				display: flex;
				align-items: center;
			}
			.recharge-pay_logo {
				width: 120rpx;
				height: 120rpx;
				margin-right: 20rpx;
			}
			.recharge-pay_item {
				&:last-child {
					margin-bottom: 0;
				}
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;
			}
			.recharge-pay_check {
				width: 45rpx;
				height: 45rpx;
			}
			background-color: #FFFFFF;
			padding: 30rpx;
		}
		.recharge-content {
			.recharge-select {
				&:last-child {
					margin-bottom: 0;
				}
				.recharge-select_item {
					&:last-child {
						margin-right: 0;
					}
					flex: 1;
					background-color: #f0f0f0;
					border-radius: 8rpx;
					margin-right: 32rpx;
					height: 70rpx;
					line-height: 70rpx;
					text-align: center;
				}
				.active {
					background-color: #f1414b;
					color: #FFFFFF;
				}
				display: flex;
				justify-content: space-between;
				margin-bottom: 32rpx;
			}
			.recharge-input {
				text {
					font-size: 32rpx;
					font-weight: bold;
				}
				input {
					flex: 1;
					text-align: right;
					font-size: 28rpx;
				}
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #f3f4f6;
				padding-bottom: 30rpx;
				margin-bottom: 48rpx;
			}
			margin-bottom: 20rpx;
			background-color: #FFFFFF;
			padding: 30rpx;
		}
		.recharge-top {
			.recharge-top_balance {
				color: #f1414b;
			}
			background-color: #FFFFFF;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			border-top: 1rpx solid #f3f4f6;
			margin-bottom: 20rpx;
		}
		.recharge-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 88rpx;
			position: fixed;
			right: 30rpx;
			bottom: 30rpx;
			left: 30rpx;
			background-color: #f1414b;
			color: #FFFFFF;
			font-size: 32rpx;
		}
	}
</style>
