// *
//  * All rights Reserved, Designed By www.youyacao.com <br>
//  * @Description:API详细列表 <br>
//  * @version 蜻蜓Q系统  <br>
//  * @author:成都市一颗优雅草科技有限公司  <br>
//  * 注意：使用我司开源源代码请遵循license文件的协议仅供个人非盈利使用，禁止用于其他的商业用途
//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ:2853810243 422108995 23625059584
//  * 正版系统查询系统 zhengban.youyacao.com

import {
	get,
	post
} from './request'

// 推荐视频
export const VideoList = () => {
	return post('video/referList')
}

// 视频列表
export const VList = (data) => {
	return post('video/list', data)
}

// 点赞
export const Praise = (data) => {
	return post('like/on', data)
}

// 取消点赞
export const CancelPraise = (data) => {
	return post('like/off', data)
}

// 短信验证码
export const SMS = (data) => {
	return post('smsGet', data)
}

// 注册
export const Register = (data) => {
	return post('register', data)
}

// 邮箱验证码
export const EmailCaptcha = (data) => {
	return post('emailGet', data)
}

// 图形验证码
export const Captcha = () => {
	return post('captchaGet')
}

// 登录
export const Login = (data) => {
	return post('login', data)
}

// 用户信息
export const User = () => {
	return post('user')
}

// 视频播放
export const VideoPlayback = (data) => {
	return post('video/view', data)
}

// 观看次数扣除
export const NumberDeductions = () => {
	return post('user/decShareNum')
}

// 直播列表
export const LiveList = (data) => {
	return post('live/list', data)
}

// 开始直播
export const StartLive = (data) => {
	return post('live/start', data)
}

// 停止直播
export const StopLive = () => {
	return post('live/close')
}

// 直播详情
export const LiveDetails = (data) => {
	return post('live/view', data)
}

// 直播历史
export const LiveHistory = (data) => {
	return post('live/history', data)
}

// 关注用户
export const Follow = (data) => {
	return post('follow/on', data)
}

// 分类
export const Categories = (data) => {
	return post('category', data)
}

// 发布视频
export const ReleaseVideo = (data) => {
	return post('video/add', data)
}

// 退出
export const Logout = () => {
	return post('logout')
}

// 图文列表
export const ArticleList = (data) => {
	return post('article/list', data)
}

// 关注用户图文列表
export const FocusArticleList = (data) => {
	return post('article/followList', data)
}

// 发布图文
export const PostArticle = (data) => {
	return post('article/add', data)
}

// 评论列表
export const CommentList = (data) => {
	return post('comment/list', data)
}

// 评论
export const Comment = (data) => {
	return post('comment/add', data)
}

// 评论点赞
export const CommentPraise = (data) => {
	return post('comment/onLike', data)
}

// 取消评论点赞
export const CancelCommentPraise = (data) => {
	return post('comment/offLike', data)
}

// 上传图片
export const UploadImage = () => {
	return post('upload')
}

// 推广记录
export const PromotionRecord = () => {
	return post('refer')
}

// 粉丝
export const Fans = (data) => {
	return post('follow/fans', data)
}

// 关注列表
export const FollowList = (data) => {
	return post('follow/me', data)
}

// 取消关注
export const Unfollow = (data) => {
	return post('follow/off', data)
}

// 广告
export const AD = (data) => {
	return post('advert/list', data)
}

// 我发布的视频列表
export const MyVideoList = (data) => {
	return post('video/me', data)
}

// 删除视频
export const RemoveVideo = (data) => {
	return post('video/del', data)
}

// 我的朋友圈
export const RrticleList = (data) => {
	return post('article/me', data)
}

// 删除朋友圈
export const RemoveArticle = (data) => {
	return post('article/del', data)
}

// 我喜欢的
export const LikeVideoList = (data) => {
	return post('like/list', data)
}

// 评论的评论
export const ReplyList = (data) => {
	return post('comment/commentList', data)
}

// 添加视频观看记录
export const AddView = (data) => {
	return post('video/historyAdd', data)
}

// 视频观看记录
export const PlayRecords = (data) => {
	return post('video/historyList', data)
}

// 系统配置
export const Config = (data) => {
	return post('config', data)
}

// 添加视频下载记录
export const AddDownload = (vid) => {
	return post('download', {
		vid
	})
}

// 下载记录
export const DownloadRecords = (data) => {
	return post('downloadList', data)
}

// 任务列表
export const TaskList = () => {
	return post('task/list')
}

// 任务领取
export const TaskPickup = (data) => {
	return post('task/receive', data)
}

// 消息列表
export const MessageList = (data) => {
	return post('message/getList', data)
}

// 打赏
export const Reward = (data) => {
	return post('user/give', data)
}

// 卡密兑换
export const CardSecretExchange = (data) => {
	return post('cipher/receive', data)
}

// 代理统计
export const AgentTotal = () => {
	return post('agentNum')
}

// 评论视频、图文列表
export const CommentContentList = (data) => {
	return post('comment/me', data)
}

// 代理会员列表
export const AgentList = (data) => {
	return post('agentList', data)
}

// 代理统计
export const AgentInfo = () => {
	return post('agentInfo')
}

// user_id 用户信息
export const UserInfo = (data) => {
	return post('user/get', data)
}

// user_id 喜欢视频
export const LikeVideo = (data) => {
	return post('like/list', data)
}

// 编辑用户信息
export const EditUserInfo = (data) => {
	return post('complete', data)
}

// 提现
export const withdrawal = (data) => {
	return post('withdraw', data)
}

// vip商品列表
export const vipShop = () => {
	return post('vipShop')
}

// 余额购买vip
export const payVip = (data) => {
	return post('pay/vip', data)
}
