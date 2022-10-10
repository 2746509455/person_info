import request from "@/utils/request.js"

export default {
	// 登录
	Login(params) {
		return request("/", "POST", params)
	},
}
