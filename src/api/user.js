// axios
import request from "@/utils/request"

// 这个urlsMap如果没必要聚合，可以去掉
const userUrls = {
  Login: "/user/login",
  UserInfo: "/user/userinfo",
  UserName: "/user/name",
}

// 登录
export function login(data) {
  return request({
    url: userUrls.Login,
    method: "post",
    data,
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: userUrls.UserInfo,
    method: "post",
    data,
    hideloading: true,
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: userUrls.UserName,
    method: "get",
    params,
    hideloading: true,
  })
}
