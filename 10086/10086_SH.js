const cookieName = '上海移动签到'
//const tokenurlKey = 'ethan_10086_SH_tokenurl'
//const tokenheaderKey = 'ethan_10086_SH_tokenheader'
//const tokenbodyKey = 'ethan_10086_SH_tokenbody'
const tokenurlKey = 'chavy_tokenurl_10086'
const tokenheaderKey = 'chavy_tokenheader_10086'
const tokenbodyKey = 'chavy_getfee_cmcc'
const tokenKey = 'ethan_10086_SH_token'

const ethan_10086_sh = init()

const tokenurlVal = ethan_10086_sh.getdata(tokenurlKey)
const tokenheaderVal = ethan_10086_sh.getdata(tokenheaderKey)
const tokenbodyVal = ethan_10086_sh.getdata(tokenbodyKey)
const tokenVal = ethan_10086_sh.getdata(tokenKey)

sign()

function getLoginAdd(cb) {
  const url = { url: tokenurlVal, headers: JSON.parse(tokenheaderVal), body: tokenbodyVal }
  ethan_10086_sh.post(url, (error, response, data) => {
    ethan_10086_sh.log(`${cookieName}, getLoginAdd-data: ${data}`)
    const result = JSON.parse(data)
    let loginAdd = result.data.webUrl.replace(/busicode=([^&]*)/, `busicode=200722`)
    ethan_10086_sh.log(`${loginAdd}`)
    cb()
  })
}

function sign() {
  getLoginAdd(() => {
      ethan_10086_sh.msg(cookieName, "1111", loginAdd)
      ethan_10086_sh.done()
  })
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
