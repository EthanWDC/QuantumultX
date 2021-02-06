const cookieName = '上海移动'
const tokenbodyKey = 'ethan_10086_SH_tokenbody'
const tokenKey = 'ethan_10086_SH_token'
const ethan_10086_sh = init()

const requrl = $request.url
const reqRef = $request.headers.Referer
if ($request && $request.method != 'OPTIONS' && requrl.indexOf('wtxcx/wx') >= 0 && requrl.indexOf('freeLogin2') >= 0) {
  const loginbodyObj = JSON.parse($request.body)
  const tokenVal = loginbodyObj.device.token
  if ($request.body) ethan_10086_sh.setdata($request.body, tokenbodyKey)
  if (tokenVal) ethan_10086_sh.setdata(tokenVal, tokenKey)
  title = ethan_10086_sh.msg(cookieName, `获取Token成功` , tokenVal)
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
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
ethan_10086_sh.done()
