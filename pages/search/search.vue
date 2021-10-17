<template>
	<view class="search">
		<view class="search-top" :style="{'margin-top': `${statusBarHeight}px`}">
			<image class="back-icon" src="@/static/left-arrow.png" mode="" @tap="_back"></image>
			<view class="search-input_box">
				<input type="text" placeholder="请输入搜索关键字" v-model="keyword" @confirm="_searchSubmit" />
				<image class="search-clear_icon" src="@/static/macos-close.png" mode="" @tap="keyword = ''" v-if="keyword"></image>
			</view>
			<text class="search-text_btn" @tap="_searchSubmit">搜索</text>
		</view>
		<scroll-view scroll-y="true" class="search-video_list" @scrolltolower="_scrolltolower">
			<view class="init-text" v-if="loading">正在加载...</view>
			<view class="video-box">
				<view class="scroll-view-item" v-for="(item, index) in list" :key="i" @tap="_play(index)">
					<image class="video-cover" :src="item.thumb" mode="aspectFill"></image>
					<view class="video-content">
						<view class="video-title u-line-2">{{ item.title }}</view>
						<view class="video-content_foot">
							<view class="video-author">作者: {{ item.username }}</view>
							<view class="video-data">
								<view class="video-data_item">
									<image class="video-data_icon" src="@/static/images/my-video.png" mode=""></image>
									<text class="video-data_text">{{ item.view_num }}</text>
								</view>
								<view class="video-data_item">
									<image class="video-data_icon" src="@/static/images/comment-icon.png" mode=""></image>
									<text class="video-data_text">{{ item.comment_num }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="init-text" v-if="(!loading && list.length === 0) || last_page">没有更多了</view>
			<view class="init-text" v-if="load_more">加载更多中...</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import { VList } from '@/common/api.js'
	
	export default {
		data() {
			return {
				list: [],
				last_page: false,
				page: 1,
				loading: false,
				load_more: false,
				keyword: ''
			}
		},
		computed: {
			...mapGetters(['statusBarHeight'])
		},
		methods: {
			...mapMutations(['setVideoList']),
			_play(index) {
				this.setVideoList(this.list.slice(index))
				uni.navigateTo({
					url: '/pages/latest/player/player'
				})
			},
			_back() {
				uni.navigateBack()
			},
			_scrolltolower() {
				if (!this.last_page) {
					this.load_more = true
					this.page++
					this._searchSubmit()
				}
			},
			_searchSubmit() {
				this.last_page = false
				this.loading = true
				VList({
					keyword: this.keyword,
					page: this.page
				}).then(({ code, data }) => {
					this.loading = false
					this.load_more = false
					if (code === 200) {
						const { total_page, current_page, list } = data
						if (current_page >= total_page) {
							this.last_page = true
						}
						if (current_page === 1) {
							this.list = list
						} else {
							this.list = this.list.concat(list)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.back-icon {
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
	}
	.search-clear_icon {
		width: 50rpx;
		height: 50rpx;
	}
	.init-text {
		font-size: 28rpx;
		color: #909399;
		text-align: center;
		padding: 30rpx 0;
	}
	.video-data {
		.video-data_text {
			font-size: 28rpx;
			color: #909399;
		}
		.video-data_icon {
			width: 40rpx;
			height: 40rpx;
			margin-right: 10rpx;
		}
		.video-data_item {
			display: flex;
			align-items: center;
			margin-right: 30rpx;
		}
		display: flex;
		align-items: center;
		margin-top: 10rpx;
	}
	.video-author {
		font-size: 28rpx;
		color: #909399;
	}
	.video-box {
		padding: 0 30rpx;
	}
	.video-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.video-title {
		font-size: 32rpx;
	}
	.video-cover {
		width: 320rpx;
		height: 180rpx;
		border-radius: 16rpx;
		margin-right: 20rpx;
	}
	.scroll-view-item {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #e4e7ed;
		display: flex;
	}
	.search-video_list {
		position: absolute;
		top: calc(var(--status-bar-height) + 120rpx);
		bottom: 0;
	}
	.search-top {
		.search-input_box {
			display: flex;
			align-items: center;
			flex: 1;
			height: 80rpx;
			border-radius: 40rpx;
			padding: 0 30rpx;
			background-color: #f3f4f6;
		}
		input {
			flex: 1;
			font-size: 28rpx;
		}
		.search-text_btn {
			padding-left: 30rpx;
		}
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.search {
		height: 100vh;
		position: relative;
	}
</style>
