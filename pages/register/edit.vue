<template>
	<view class="safe-area-inset-bottom register-edit">
		<u-select v-model="show_sex" :list="sex_list" @confirm="confirmSex"></u-select>
		<u-calendar v-model="show_brithday" mode="date" @change="dateChange"></u-calendar>
		<u-card :border="false" :foot-border-top="false" :show-head="false" padding="40">
			<u-form :model="form" ref="uForm" label-width="130" slot="body">
				<view class="upload-box">
					<u-upload ref="uUpload" :action="action" :file-list="fileList" :auto-upload="false" max-count="1" upload-text="上传头像"></u-upload>
				</view>
				<u-form-item label="用户名" prop="name" required>
					<u-input v-model="form.name" />
				</u-form-item>
				<u-form-item label="简介" prop="intro" required>
					<u-input v-model="form.intro" type="textarea" />
				</u-form-item>
				<u-form-item label="性别" prop="sex" required>
					<u-input v-model="form.sex" type="select" @tap="show_sex = true" />
				</u-form-item>
				<u-form-item label="生日" prop="birthday" required>
					<u-input v-model="form.birthday" type="select" @tap="show_brithday = true" />
				</u-form-item>
			</u-form>
		</u-card>
		<view class="register-edit__foot">
			<u-button class="register-edit__btn" type="primary" :ripple="true" @click="submit">确认</u-button>
		</view>
	</view>
</template>

<script>
	import {
		EditUserInfo,
		UploadImage
	} from '@/common/api.js'

	export default {
		data() {
			return {
				action: '',
				fileList: [],
				form: {
					name: '',
					intro: '',
					sex: '',
					birthday: ''
				},
				show_sex: false,
				sex_list: [{
						value: 0,
						label: '保密'
					},
					{
						value: 1,
						label: '男'
					},
					{
						value: 2,
						label: '女'
					}
				],
				sex: '',
				show_brithday: false,
				rules: {
					name: [{
						required: true,
						message: '请输入用户名',
						trigger: ['blur', 'change'],
					}],
					intro: [{
						required: true,
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}],
					sex: [{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}],
					birthday: [{
						required: true,
						message: '请选择生日',
						trigger: 'change'
					}]
				}
			}
		},
		onLoad(options) {
			const { type } = options
			if (type === 'change') {}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			confirmSex(val) {
				const {
					value,
					label
				} = val[0]
				this.sex = value
				this.form.sex = label
			},
			dateChange(date) {
				const {
					result
				} = date
				this.form.birthday = result
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						const { name: nickname, birthday, intro: desc } = this.form
						EditUserInfo({
							nickname,
							birthday,
							desc,
							sex: this.sex
						}).then(({ code, msg }) => {
							uni.showToast({
								title: msg,
								icon: 'none'
							})
							if (code === 200) {
								uni.reLaunch({
									url: '/pages/home/home'
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.upload-box {
		padding-bottom: 15px;
		display: flex;
		justify-content: center;
	}
	.register-edit__foot {
		margin-top: 60rpx;
		padding: 0 30rpx;
	}

	.register-edit__btn {
		// margin-top: 30rpx;
	}

	.register-edit {
		// padding: 15px;
	}

	page {
		background-color: $u-bg-color;
	}
</style>
