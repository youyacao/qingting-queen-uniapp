<template>
	<view class="comment-detail">
		<view class="comment-detail_top">
			<image class="avatar" :src="comment_item.avatar" mode="" v-if="comment_item.avatar"></image>
			<image class="avatar" src="@/static/default_avatar.png" mode="" v-else></image>
			<view class="top-right">
				<view class="l">
					<view class="username">{{ comment_item.username }}</view>
					<view class="time">{{ comment_item.created_at }}</view>
					<view class="cotent">{{ comment_item.content }}</view>
				</view>
				<view class="r">
					<image class="comment-kudos_icon" src="@/static/images/dianzan-red.png" mode="" v-if="comment_item.is_like === 1"></image>
					<image class="comment-kudos_icon" src="@/static/images/dianzan-white.png" mode="" v-else></image>
					<text class="comment-item_kudos">{{ comment_item.like_num }}</text>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="list-title">全部回复</view>
			<view class="no-data" v-if="comment_list.length === 0 && comment_init">暂无评论，来抢沙发</view>
			<view class="list-item" v-for="(item, index) in comment_list" :key="item.id" @tap="_replyComment(item)">
				<image class="avatar" :src="item" mode="" v-if="item.avatar"></image>
				<image class="avatar" src="@/static/default_avatar.png" mode="" v-else></image>
				<view class="top-right">
					<view class="l">
						<view class="username">{{ item.username }}</view>
						<view class="time">{{ item.created_at }}</view>
						<view class="cotent">{{ item.content }}</view>
						<view class="reply" v-if="item.is_reply === 1">
							<view class="reply-username">@{{ item.reply_user.username }}:</view>
							<view class="reply-content">{{ item.reply_user.content }}</view>
						</view>
					</view>
					<view class="r" @tap.stop="_commentLike(item, index)">
						<image class="comment-kudos_icon" src="@/static/images/dianzan-red.png" mode="" v-if="item.is_like === 1"></image>
						<image class="comment-kudos_icon" src="@/static/images/dianzan-white.png" mode="" v-else></image>
						<text class="comment-item_kudos">{{ item.like_num }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="comment-input_box">
			<input class="comment_input" :adjust-position="false" type="text" v-model="comment_content" :placeholder="placeholder" @confirm="_commentConfirm" />
		</view>
	</view>
</template>

<script>
	import {
		Comment,
		ReplyList,
		CommentPraise,
		CancelCommentPraise
	} from '@/common/api.js'
	
	export default {
		data() {
			return {
				comment_item: '',
				comment_content: '',
				comment_id: '',
				comment_list: [],
				comment_page: 1,
				comment_last_page: false,
				placeholder: '留下你的精彩评论吧',
				comment_init: false
			}
		},
		onLoad(option) {
			this.comment_item = JSON.parse(decodeURIComponent(option.item))
			console.log(this.comment_item)
			uni.setNavigationBarTitle({
				title: this.comment_item.username
			})
			this._getCommentList()
		},
		onReachBottom() {
			if (this.comment_last_page) return
			this.comment_page++
			this._getCommentList()
		},
		methods: {
			_replyComment({ id, username }) {
				this.comment_id = id
				this.placeholder = `回复@${username}`
			},
			// 评论列表
			_getCommentList() {
				this.comment_last_page = false
				ReplyList({
					type: 2,
					vid: this.comment_item.vid,
					pid: this.comment_item.id,
					page: this.comment_page,
					limit: 10
				}).then(({ code, data }) => {
					this.comment_init = true
					if (code === 200) {
						const { total_page, current_page, list } = data
						if (current_page === 1) {
							this.comment_list = list
						} else {
							this.comment_list = this.comment_list.concat(list)
						}
						if (current_page >= total_page) {
							this.comment_last_page = true
						}
					}
				})
			},
			// 评论
			_commentConfirm() {
				const { id, vid } = this.comment_item
				Comment({
					type: 2,
					vid,
					pid: id,
					content: this.comment_content,
					comment_id: this.comment_id
				}).then(({ code, msg }) => {
					uni.showToast({
						title: msg,
						icon: 'none'
					})
					if (code === 200) {
						this._getCommentList()
						this.comment_content = ''
						if (this.comment_id) {
							this.comment_id = ''
							this.placeholder = '留下你的精彩评论吧'
						}
					}
					uni.hideKeyboard()
				})
			},
			_commentLike({ id, is_like }, index) {
				console.log(id, is_like, index)
				if (is_like === 1) {
					CancelCommentPraise({
						comment_id: id
					}).then(({ code }) => {
						if (code === 200) {
							this.comment_list[index].is_like = 0
							this.comment_list[index].like_num--
						}
					})
				} else {
					CommentPraise({
						comment_id: id
					}).then(({ code }) => {
						if (code === 200) {
							this.comment_list[index].is_like = 1
							this.comment_list[index].like_num++
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.comment-detail {
	.no-data {
		font-size: 24rpx;
		color: #909399;
		text-align: center;
	}
	.reply-content {
		font-size: 24rpx;
		color: #909399;
	}
	.reply-username {
		color: #2b85e4;
		font-size: 24rpx;
		margin-right: 8rpx;
	}
	.reply {
		margin-top: 10rpx;
		display: flex;
	}
	.l {
		flex: 1;
		padding-right: 30rpx;
	}
	.top-right {
		display: flex;
		flex: 1;
	}
	.r {
		display: flex;
		flex-direction: column;
	}
	.comment-kudos_icon {
		width: 40rpx;
		height: 40rpx;
		font-size: 0;
	}
	.comment-item_kudos {
		color: #909399;
		font-size: 28rpx;
		text-align: center;
	}
	.list {
		.list-item {
			margin-bottom: 25rpx;
			display: flex;
		}
		.list-title {
			margin-bottom: 30rpx;
		}
		background-color: #FFFFFF;
		padding: 30rpx;
	}
	.cotent {
		margin-top: 10rpx;
		font-size: 32rpx;
	}
	.time {
		font-size: 24rpx;
		color: #909090;
	}
	.username {
		font-size: 28rpx;
	}
	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	.comment-detail_top {
		padding: 30rpx;
		display: flex;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}
	.comment_input {
		height: 80rpx;
		border-radius: 40rpx;
		background-color: #f3f3f3;
		font-size: 28rpx;
		flex: 1;
		padding: 0 24rpx;
	}
	.comment-input_box {
		border-top: 1rpx solid #e8e8e8;
		height: 110rpx;
		padding: 20rpx;
		align-items: center;
		flex-direction: row;
		background-color: #FFFFFF;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	padding-bottom: 110rpx;
}
</style>
