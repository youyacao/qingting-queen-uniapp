<template>
	<view class="body">
		<view class="head">
			<view class="status_bar"></view>
			<view class="avatar-box">
				<image class="avatar" :src="user ? user.avatar : ''" mode="aspectFill"></image>
			</view>
			<view class="username">{{ user ? user.nickname || user.username : '--' }}</view>
			<view class="desc">{{ user && user.desc ? user.desc : '这个人很懒，什么也没留下~'  }}</view>
			<view class="head-items">
				<view class="head-item pl-0">
					<text class="head-item__label">关注</text>
					<text class="head-item__value">{{ user ? user.follow_num : 0 }}</text>
				</view>
				<view class="head-item head-item__center">
					<text class="head-item__label">粉丝</text>
					<text class="head-item__value">{{ user ? user.my_follow_num : 0 }}</text>
				</view>
				<view class="head-item">
					<text class="head-item__label">获赞</text>
					<text class="head-item__value">{{ user ? user.like_num : 0 }}</text>
				</view>
			</view>
		</view>
		<view class="hr"></view>
		<view class="list-box">
			<view class="list-head">
				<text class="list-head__text" :class="{'active': current === 0}" @tap="current = 0">作品 {{ total[0] }}</text>
				<text class="list-head__text" :class="{'active': current === 1}" @tap="current = 1">喜欢 {{ total[1] }}</text>
			</view>
			<list class="list" v-show="current === 0">
				<cell class="cell" v-for="(item, index) in list[0]" :key>
					<view class="item" @tap="play(index)">
						<image class="item-avatar" :src="item.thumb" mode="aspectFill"></image>
						<view class="item-head">
							<image class="item-icon" src="/static/images/like.png" mode="aspectFit"></image>
							<text class="item-like__number">{{ item.view_num_str }}</text>
						</view>
						<view class="item-foot">
							<text class="item-title">{{ item.title }}</text>
						</view>
					</view>
				</cell>
			</list>
			<list class="list" v-show="current === 1">
				<cell class="cell" v-for="(item, index) in list[1]" :key>
					<view class="item" @tap="play(index)">
						<image class="item-avatar" :src="item.thumb" mode="aspectFill"></image>
						<view class="item-head">
							<image class="item-icon" src="/static/images/like.png" mode="aspectFit"></image>
							<text class="item-like__number">{{ item.view_num_str }}</text>
						</view>
						<view class="item-foot">
							<text class="item-title">{{ item.title }}</text>
						</view>
					</view>
				</cell>
			</list>
			<view class="alert" v-if="init[current]">正在加载...</view>
			<view class="alert" v-if="!init[current] && list.length && list[current].length === 0">暂无数据</view>
			<view class="alert" v-if="loading[current]">加载更多中...</view>
			<view class="alert" v-if="noData[current] && list.length && list[current].length > 10">没有更多了</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import { UserInfo, VList, LikeVideo } from '@/common/api.js'
	
	export default {
		data() {
			return {
				current: 0,
				user_id: '',
				user: null,
				list: [[], []],
				total: [0, 0],
				page: [1, 1],
				init: [true, true],
				loading: [false, false],
				noData: [false, false]
			};
		},
		onLoad(options) {
			this.user_id = options.user_id
			this.getUser()
			this.getVideoList()
			this.getLikeVideo()
		},
		onReachBottom() {
			this.loadmore()
		},
		methods: {
			...mapMutations(['setVideoList']),
			play(index) {
				this.setVideoList(this.list[this.current].slice(index))
				uni.navigateTo({
					url: '/pages/latest/player/player'
				})
			},
			swiperChange({ detail }) {
				this.current = detail.current
			},
			getUser() {
				UserInfo({'user_id': this.user_id}).then(({ code, data }) => {
					if (code === 200) {
						this.user = data
					}
				})
			},
			getVideoList() {
				VList({ 'user_id': this.user_id, 'limit': 10, page: this.page[this.current] }).then(({ code, data }) => {
					console.log(code, data)
					if (code === 200) {
						const { total, total_page, current_page, list } = data
						this.total[0] = total
						if (current_page === 1) {
							this.$set(this.list, 0, list)
						} else {
							const _list = this.list[0].concat(list)
							this.$set(this.list, 0, _list)
						}
						if (total_page === 0 || current_page >= total_page) {
							this.$set(this.noData, 0, true)
						}
						this.$set(this.loading, 0, false)
						this.$set(this.init, 0, false)
					}
				})
			},
			getLikeVideo() {
				LikeVideo({ 'user_id': this.user_id, 'limit': 10, page: this.page[this.current], 'type': 2 }).then(({ code, data }) => {
					if (code === 200) {
						const { total, total_page, current_page, list } = data
						this.total[1] = total
						if (current_page === 1) {
							this.$set(this.list, 1, list)
						} else {
							const _list = this.list[1].concat(list)
							this.$set(this.list, 1, _list)
						}
						if (total_page === 0 || current_page >= total_page) {
							this.$set(this.noData, 1, true)
						}
						this.$set(this.loading, 1, false)
						this.$set(this.init, 1, false)
					}
				})
			},
			loadmore() {
				if (this.noData[this.current]) return
				this.page[this.current]++
				this.loading[this.current] = true
				if (this.current === 0) {
					this.getVideoList()
				} else {
					this.getLikeVideo()
				}
			}
		}
	}
</script>

<style lang="scss">
	.alert {
		text-align: center;
		color: #999999;
		padding: 18rpx 0;
		font-size: 24rpx;
	}
	.item-head {
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	.item-icon {
		width: 35rpx;
		height: 35rpx;
		margin-right: 10rpx;
	}
	.item-foot {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 20rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.item {
		position: relative;
	}
	.item-avatar {
		width: 100%;
		height: 360rpx;
		border-radius: 8rpx;
	}
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	 }
	.cell {
		flex-basis: 48%;
		height: 360rpx;
		margin-top: 2%;
		margin-right: 1%;
		margin-left: 1%;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
	}
	.hr {
		height: 20rpx;
		background-color: #F5F5F5;
	}
	.active {
		color: #333333;
		// border-bottom-color: #999999 !important;
	}
	.list-box {
		background-color: #FFFFFF;
	}
	.list-head__text {
		height: 90rpx;
		line-height: 95rpx;
		flex: 1;
		text-align: center;
		// border-bottom: 4rpx solid #FFFFFF;
	}
	.list-head {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #999999;
	}
	.avatar {
		width: 174rpx;
		height: 174rpx;
		border-radius: 50%;
	}
	.pl-0 {
		padding-left: 0 !important;
	}
	.head-item {
		padding: 0 40rpx;
	}
	.head-item__center {
		border-left: 1rpx solid #ebebeb;
		border-right: 1rpx solid #ebebeb;
	}
	.head-item__label {
		margin-right: 20rpx;
	}
	.head-items {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		height: 35rpx;
	}
	.desc {
		margin-bottom: 60rpx;
		color: #999999;
		font-size: 32rpx;
	}
	.username {
		font-size: 38rpx;
		padding: 30rpx 0;
	}
	.head {
		padding: 40rpx;
		background-color: #FFFFFF;
	}
	.avatar-box {
		background-color: #F5F5F5;
		width: 180rpx;
		height: 180rpx;
		border-radius: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
