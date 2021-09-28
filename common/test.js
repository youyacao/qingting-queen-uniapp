import MD5 from 'crypto-js/md5'

const Test = (type, content) => {
	let SECURITY
	try {
	    SECURITY = uni.getStorageSync('SECURITY')
	} catch (e) {
	    // error
	}
	const {safe_cy_n, safe_cy_app_key, safe_cy_customer_code, safe_cy_status} = SECURITY
	const n = safe_cy_n
	const app_key = safe_cy_app_key
	const customer_code = safe_cy_customer_code
	const content_id = new Date().getTime()
	const s = parseInt(content_id / 1000)
	const t = MD5(`${s}${app_key}`).toString()
	
	return new Promise((resolve, reject) => {
		if (safe_cy_status === '0') {
			resolve({ machine_result: 'Normal' })
		} else {
			uni.request({
			    url: `https://kmscli.qixincha.com/client/purify/${type}/?n=${n}&t=${t}&s=${s}`,
				method: 'POST',
			    data: {
					customer_code,
					content_id,
					content
				},
			    header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
			    success: ({ data }) => {
					resolve(data)
			    },
				fail: (err) => {
					reject(err)
				},
				complete: () => {
					console.log('complete')
				}
			})
		}
	})
}

export default Test