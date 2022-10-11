import request from "@/utils/request.js"

export default {
	// 登录
	Login(params) {
		return request("/", "POST", params)
	},
	HomePage(params){
		return request("/index", "POST", params)
	}
}
// 登录
// export function Login(params){
// 	return request("/", "POST", params)
// }
//首页
// export function firstPage(params){
// 	return request("/index", "POST", params)
// }