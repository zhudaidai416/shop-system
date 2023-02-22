// 路由守卫
$().ready(() => {
  if (!sessionStorage.getItem('user')) {
    location.href = './登录.html'
  }
})

// 获取数据表 @key是字符串 -sessionStorage内的key
function getInfo(key) {
  let arr = JSON.parse(sessionStorage.getItem(key))
  return arr
}

// 存入数据表 @key、和arr是字符串和数组 -key是需要存入的目标数组名 -arr是需要存入的自己的数组
function saveInfo(key, arr) {
  let arrStr = JSON.stringify(arr)
  sessionStorage.setItem(key, arrStr)
}

// 当引入main.js默认添加了登录状态判断拦截

// 登录后才有数据
// 所有数据都在sessionStorage内
// 可以用上面的getInfo(key)和saveInfo(key, arr)快速获取和存入
