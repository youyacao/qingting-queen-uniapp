import Request from '@/js_sdk/luch-request/luch-request/index.js'
import {
	cryptoEncrypt
} from '@/common/crypto-js.js'
import { BASE_URL } from '@/common/config.js'

const http = new Request()
const _config = {
	baseURL: '',
	header: {},
	method: 'GET',
	dataType: 'json',
	// #ifndef MP-ALIPAY || APP-PLUS
	responseType: 'text',
	// #endif
	// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
	custom: {}, // 全局自定义参数默认值
	// #ifdef MP-ALIPAY || MP-WEIXIN
	timeout: 30000,
	// #endif
	// #ifdef APP-PLUS
	sslVerify: true,
	// #endif
	// #ifdef H5
	// 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
	withCredentials: false,
	// #endif
	// #ifdef APP-PLUS
	firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
	// #endif
	// 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
	// getTask: (task, options) => {
	// 相当于设置了请求超时时间500ms
	//   setTimeout(() => {
	//     task.abort()
	//   }, 500)
	// },
	// 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
	validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
		return statusCode >= 200 && statusCode < 300
	}
}

export const get = (url, params) => {
	return http.get(`${BASE_URL}${url}`, {
		params,
		..._config
	})
}

export const post = (url, data) => {
	// console.log('请求参数：', data || {})
	// console.log('请求参数加密后：', data ? cryptoEncrypt(data) : {})
	// return http.post(`${BASE_URL}${url}`, { datas: data ? cryptoEncrypt(data) : {}, timestamp: new Date().getTime() }, {..._config, method: 'POST'})
	return http.post(`${BASE_URL}${url}`, data, { ..._config,
		method: 'POST'
	})
}

// 请求之前
http.interceptors.request.use((config) => {
	try {
		const _token = uni.getStorageSync('TOKEN')
		if (_token) {
			config.header = {
				...config.header,
				authorization: _token
			}
		}
	} catch (e) {
		// error
	}
	// console.log(config.url, config.data)
	return config
}, config => {
	return Promise.reject(config)
})

// 请求之后
http.interceptors.response.use((response) => {
	const routes = getCurrentPages()
	const current_route = routes[routes.length - 1].route
	const {
		code
	} = response.data
	if (code === 500 && current_route !== 'pages/login/login') {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	if (code === 200) {
		const _token = response.header.authorization
		if (_token) {
			try {
				uni.setStorageSync('TOKEN', _token)
			} catch (e) {
				// error
			}
		}
	}
	// console.log(response.config.url)
	// console.log(response.data)
	return response.data
}, (response) => {
	console.log(response)
	return Promise.reject(response)
})


	// *
	//  * All rights Reserved, Designed By www.youyacao.com <br>
	//  * @Description:请求配置 <br>
	//  * @version 蜻蜓Q系统  <br>
	//  * @author:成都市一颗优雅草科技有限公司  <br>
	//  * 注意：使用我司开源源代码请遵循license文件的协议仅供个人非盈利使用，禁止用于其他的商业用途
	//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ:2853810243 422108995 23625059584
	//  * 正版系统查询系统 zhengban.youyacao.com