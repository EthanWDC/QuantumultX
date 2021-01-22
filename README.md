# QuantumultX
[task_local]

# 按需求自己选择和修改时间
# 定时脚本
;* * * * * sample-task.js

# 定时脚本Task_Remote.conf

# 彩云天气 (By Peng-YM)
# 打开手机设置 > 隐私 > 定位服务
# (1) 打开定位服务
# (2) 选择天气，设置永远允许天气访问位置信息，并允许使用精确位置。
# (3) 打开box.js设置API token即可。
0 0-21/3 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/caiyun.js, tag=彩云天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/caiyun.png,enabled=true


# 天气+生活指数+降雨提醒
0 0-21/3 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/minute_forecast.js, tag=天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weather.png,enabled=false

# 每日.每周天气
# 需要填key
0 8-20/4 * * * nzw9314/sazs34/task/weather_pro.js, tag=每日每周天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weather.png,enabled=false

# 每日.48小时天气
# 需要填key
0 8-20/4 * * * nzw9314/sazs34/task/weather_pro2.js, tag=每日48小时天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weather.png,enabled=false

# 48小时天气
# 需要填key
0 8 * * * nzw9314/sazs34/task/weather_hour.js, tag=48小时天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weather.png,enabled=false

# 每周天气
# 需要填key
0 8 * * * nzw9314/sazs34/task/weather_week.js, tag=每周天气, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weather.png,enabled=false

# App价格版本监控
0 0-18/6 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/appstore/AppMonitor.js, tag=App价格版本监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/appstore.png,enabled=true

# 一言
0 8 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Meeta/Surge/Scripting/Calendar.js, tag=一言, img-url=https://raw.githubusercontent.com/Orz-3/task/master/calendar.png,enabled=true

# 每日一句+ 蚂蚁森林收能量
30 7 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/yichahucha/cron_daily.js, tag=每日一句+蚂蚁森林收能量, img-url=https://raw.githubusercontent.com/Orz-3/task/master/corn.png,enabled=true

# 倒数日
0 8 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/daysmatter.js, tag=倒数日, img-url=https://raw.githubusercontent.com/Orz-3/task/master/daysmatter.png,enabled=true

# 世界时间
0 8 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/time.js, tag=世界时间, img-url=https://raw.githubusercontent.com/Orz-3/task/master/time.png,enabled=true

# 英雄联盟排名 (By @syzzzf)
3 0 * * * https://raw.githubusercontent.com/songyangzz/QuantumultX/master/lol.js, tag=英雄联盟排名, img-url=https://raw.githubusercontent.com/Orz-3/task/master/lol.png,enabled=true

#TestFlight公测监控 (By @syzzzf)
0 0-23/1 * * * https://raw.githubusercontent.com/songyangzz/QuantumultX/master/testflight.js, tag=TestFlight公测监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/testflight.png,enabled=true

# 电视节目预告 (By @Macsuny)
# var c = "cctv1"  // 可更改电视台，央视可以直接改后缀数字
# 常用卫视代码北京: btv1 | 湖南: hunan | 浙江: zhejiang|河南: henan| 江苏: jiangsu|广东: guangdong
1 10 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/tvpreview.js, tag=电视节目预告, img-url=https://raw.githubusercontent.com/Orz-3/task/master/dianshijia.png,enabled=true

# 12306余票及列车时刻表查询(By @Macsuny)
# 可更改出发地、目的地、出发时间及列车车次
0 * * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/trainquery.js, tag=12306余票及列车时刻表查询, img-url=https://raw.githubusercontent.com/Orz-3/task/master/12306.png,enabled=true

# 实时货币换算(By @Macsuny)
0 10 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/exchangeRate.js, tag=实时货币换算, img-url=https://raw.githubusercontent.com/Orz-3/task/master/exchangerate.png,enabled=true

# 中国电信套餐 (By @uchvk & @Macsuny)
#下载安装 天翼账号中心 登录
4 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/telecomInfinity.js, tag=中国电信套餐, img-url=https://raw.githubusercontent.com/Orz-3/task/master/telecominfinty.png,enabled=true

# 猫眼电影 (By xiaodie & vinewx)
0 18 * * * https://ooxx.be/js/maoyan.js, tag=猫眼电影, img-url=https://ooxx.be/js/icon/maoyan.png, enabled=true

# 热门监控 (By Evilbutcher)
30 0 8-22/2 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/hotsearch/hot.js, tag=热门监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/hot.png, enabled=true

# 微博通知(By @zZPiglet)
# 进入 https://m.weibo.cn 并登陆，获取cookie后进入boxjs配置
0 * * * * https://raw.githubusercontent.com/zZPiglet/Task/master/Weibo/Weibo.js, tag=微博通知, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weibo.png,enabled=true

# 纵横小说 (By Peng-YM)
# 使用方法：进入纵横小说页面，例如<<剑来>>：http://book.zongheng.com/book/672340.html 则id为672340，将id添加到列表即可。
6 0 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/zongheng.js, tag=纵横小说, img-url=https://raw.githubusercontent.com/Orz-3/task/master/zongheng.png,enabled=true

# GitHub监控(By Peng-YM)
# name: "",//填写仓库名称，可自定义
# file_names:[],//可选参数。若需要监控具体文件或目录，请填写路径
0 8 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/github.js, tag=GitHub, img-url=https://raw.githubusercontent.com/Orz-3/task/master/github.png,enabled=true

# Steam价格监控(By Peng-YM)
# 1. 浏览器打开steam网站：https://store.steampowered.com/，搜索你想添加的游戏。
# 2. 以GTA5为例，GTA5的STEAM商店链接为：https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/。
# 3. id中填写271590即可, name中填写名字。
0 8 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/steam.js, tag=Steam价格监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/steam.png,enabled=true

# 汇率监控(By Peng-YM)
0 8 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/exchange.js, tag=汇率监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/exchangerate.png,enabled=true

# Epic周免(By Peng-YM)
0 8 */7 * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/epic.js, tag=Epic周免, img-url=https://raw.githubusercontent.com/Orz-3/task/master/epic.png, enabled=true

# PSN会免(By Peng-YM)
0 9 1 * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/psn.js, tag=PSN会免, img-url=https://raw.githubusercontent.com/Orz-3/task/master/PSN.png, enabled=true

# 疫情日报 (By Peng-YM)
0 9 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/nCov.js, tag=疫情日报, img-url=https://raw.githubusercontent.com/Orz-3/task/master/COVID-19.png,enabled=true

# 机场流量 (By Peng-YM)
0 9 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/flow.js, tag=机场流量, img-url=https://raw.githubusercontent.com/Orz-3/task/master/airport.png,enabled=true

# TG图片推送 (By Peng-YM)
0 9 * * * https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/telegram.js, tag=TG图片推送, img-url=https://raw.githubusercontent.com/Orz-3/task/master/tgpic.png,enabled=true

# 京东价格提醒(By toulanboy)
# 前往boxjs，填写你需要监控的京东链接和目标价格
5 0 * * * https://raw.githubusercontent.com/toulanboy/scripts/master/jd_price_detect/jd_price_detect.js, tag=京东价格提醒, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true

# 哔哩哔哩番剧监控(By @lowking)
# App点击我的-动态，即可获取cookie
0 0 0,1 * * ? https://raw.githubusercontent.com/lowking/Scripts/master/bilibili/bangumiMonitor.js, tag=哔哩哔哩番剧监控, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bilibili.png, enabled=false

# 签到脚本
# @chavyleung

# 电信营业厅
#打开 APP 手动签到一次: 访问下右下角 `我` > `签到` (头像下面)
1 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.js, tag=电信营业厅, img-url=https://raw.githubusercontent.com/Orz-3/task/master/10000.png,enabled=true

# AcFun
#打开 APP, 访问下`我的`
1 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/acfun/acfun.js, tag=AcFun, img-url=https://raw.githubusercontent.com/Orz-3/task/master/acfun.png,enabled=true

# APK.TW
#打开浏览器访问: https://apk.tw `(先登录! 把页面切换为电脑版)`
1 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/apktw/apktw.js, tag=APK.TW, img-url=https://raw.githubusercontent.com/Orz-3/task/master/apktw.png,enabled=true

# bilibili
#打开浏览器访问: https://www.bilibili.com 或 https://live.bilibili.com
2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.js, tag=bilibili, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bilibili.png,enabled=true
#如需银瓜子转硬币，取消下方注释
;2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.silver2coin.js, tag=bilibili银瓜子转硬币, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bilibili.png,enabled=true

# 懂球帝
#打开懂球帝 (打开前先杀掉 APP)
2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/dongqiudi/dongqiudi.js, tag=懂球帝, img-url=https://raw.githubusercontent.com/Orz-3/task/master/dongqiudi.png,enabled=true

# 威锋网
#打开浏览器访问: https://www.feng.com`(先登录! 把页面切换为电脑版)`
2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/feng/feng.js, tag=威锋网, img-url=https://raw.githubusercontent.com/Orz-3/task/master/feng.png,enabled=true

# 飞客茶馆
#打开 APP, 访问下`个人中心`
3 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/flyertea/flyertea.js, tag=飞客茶馆, img-url=https://raw.githubusercontent.com/Orz-3/task/master/flyertea.png,enabled=true

# 网易云音乐
#1. 先登录: <https://music.163.com/m/login>
#2. 再访问: <https://music.163.com/#/user/level>
#3. 提示: `获取会话: 成功!`
3 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/quanx/neteasemusic.js, tag=网易云音乐, img-url=https://raw.githubusercontent.com/Orz-3/task/master/Netease.png,enabled=true

# 网易新闻
#打开 APP 然后手动签到 1 次
3 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/neteasenews/neteasenews.js, tag=网易新闻, img-url=https://raw.githubusercontent.com/Orz-3/task/master/neteasenews.png,enabled=true

# 去哪儿
#打开 APP 然后手动签到 1 次
4 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/qunar/qunar.js, tag=去哪儿, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qunar.png,enabled=true

# 人人视频
#打开 APP, 访问下`个人中心`
4 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.js, tag=人人视频, img-url=https://raw.githubusercontent.com/Orz-3/task/master/rrtv.png,enabled=true

# 顺丰速运
#打开 APP, 访问下`我的顺丰` > `去签到` (访问下`去签到`的页面即可, 不用点`签到`)
#打开 APP或小程序, 访问下`27周年庆`
4 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js, tag=顺丰速运, img-url=https://raw.githubusercontent.com/Orz-3/task/master/sfexpress.png,enabled=true

# 什么值得买
#浏览器访问并登录: https://zhiyou.smzdm.com/user/login
5 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/smzdm/quanx/smzdm.js, tag=什么值得买, img-url=https://raw.githubusercontent.com/Orz-3/task/master/smzdm.png,enabled=true

# 百度签到
#先登录,浏览器访问一下: https://tieba.baidu.com 或者 https://tieba.baidu.com/index/
5 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.js, tag=百度签到, img-url=https://raw.githubusercontent.com/Orz-3/task/master/tieba.png,enabled=true

# V2EX
#浏览器打开https://www.v2ex.com/mission/daily ，待弹出获取成功即可
5 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/quanx/v2ex.js, tag=V2EX, img-url=https://raw.githubusercontent.com/Orz-3/task/master/v2ex.png,enabled=true

# 腾讯视频
#1.手机浏览器访问并登录: https://film.qq.com/
6 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.js, tag=腾讯视频, img-url=https://raw.githubusercontent.com/Orz-3/task/master/videoqq.png,enabled=true

# 喜马拉雅
#打开 APP, 访问下右下角`账号`
6 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js, tag=喜马拉雅, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ximalaya.png,enabled=true

# 网易严选
#打开 APP, 访问下`个人`>`每日签到`(右上角)
# 6 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/yanxuan/yanxuan.js, tag=网易严选, img-url=https://raw.githubusercontent.com/Orz-3/task/master/yanxuan.png,enabled=true

# 字幕组
#网页:打开浏览器访问: http://www.rrys2019.com, App: 打开 APP 即可
7 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.js, tag=字幕组, img-url=https://raw.githubusercontent.com/Orz-3/task/master/zimuzu.png,enabled=true

# QQ音乐
#打开 APP 然后手动签到 1 次
7 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/qqmusic/qqmusic.js, tag=QQ音乐, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qqmusic.png,enabled=true

# CSDN
# 打开 APP , 系统提示: `获取刷新链接: 成功`,然后手动签到 1 次, 系统提示: `获取Cookie: 成功`
7 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/csdn/csdn.js, tag=CSDN, img-url=https://raw.githubusercontent.com/Orz-3/task/master/csdn.png,enabled=true

# 加油广东
#打开 APP 然后手动签到 1 次
1 7 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/gdoil/gdoil.js, tag=加油广东, img-url=https://raw.githubusercontent.com/Orz-3/task/master/gdoil.png,enabled=true

# 芒果TV
#打开 APP 然后手动签到 1 次
8 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/mgtv/mgtv.js, tag=芒果TV, img-url=https://raw.githubusercontent.com/Orz-3/task/master/mgtv.png,enabled=true

# 米游社
#打开 APP
8 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/mihoyo/mihoyo.js, tag=米游社, img-url=https://raw.githubusercontent.com/Orz-3/task/master/mihoyo.png,enabled=true

# 中国联通
#1打开 APP , 进入签到页面, 系统提示: `获取刷新链接: 成功`,然后手动签到 1 次
#2首页>天天抽奖, 系统提示 `2` 次: `获取Cookie: 成功 (登录抽奖)` 和 `获取Cookie: 成功 (抽奖次数)`
8 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.js, tag=中国联通, img-url=https://raw.githubusercontent.com/Orz-3/task/master/10010.png,enabled=true

# 猫咪音乐
#打开 网站 `https://www.maomicd.com` 然后手动签到 1 次
9 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/maomicd/maomicd.js, tag=猫咪音乐, img-url=https://raw.githubusercontent.com/Orz-3/task/master/maomicd.png,enabled=true

# 中国移动
#打开 APP , 进入签到页面, 系统提示: `获取刷新链接: 成功`,然后手动签到 1 次
9 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.js, tag=中国移动, img-url=https://raw.githubusercontent.com/Orz-3/task/master/10086.png,enabled=true

# 美团外卖
#打开 APP , 进入签到页面, 系统提示: `获取刷新链接: 成功`,然后手动签到 1 次
9 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.js, tag=美团外卖, img-url=https://raw.githubusercontent.com/Orz-3/task/master/wmmeituan.png,enabled=true

# 美团
#打开 APP , 然后手动签到 1 次, (`首页` > `红包签到`)
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.js, tag=美团, img-url=https://raw.githubusercontent.com/Orz-3/task/master/meituan.png,enabled=true

# 时光相册
#打开 APP 然后手动签到 1 次
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/everphoto/everphoto.js, tag=时光相册, img-url=https://raw.githubusercontent.com/Orz-3/task/master/everphoto.png,enabled=true

# 百词斩
#打开 APP 手动签到一次: 访问下右下角 `我` > `我的铜板` > `加入百词斩小班` > `去查看` > `我的小班进去 领铜板`
0 8-20/4 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bcz/bcz.js, tag=百词斩, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bcz.png,enabled=true

# 叮咚买菜
#打开 APP, 访问下`我的`>`积分`
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/mcdd/mcdd.js, tag=叮咚买菜, img-url=https://raw.githubusercontent.com/Orz-3/task/master/mcdd.png,enabled=true

# 分期乐
#打开 APP 手动签到一次: 访问下右下角 `我的` > `乐星` > `签到`
#`我的` > `账单点击` > `超级乐星日/天天领乐星`
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/fenqile/fenqile.js, tag=分期乐, img-url=https://raw.githubusercontent.com/Orz-3/task/master/fenqile.png,enabled=true

# 樊登读书
#打开 APP 手动签到一次: 访问下右下角 `我的` > `签到`
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/fandeng/fandeng.js, tag=樊登读书, img-url=https://raw.githubusercontent.com/Orz-3/task/master/fandeng.png,enabled=true

# 全民K歌
#打开 APP 手动签到一次: 访问下右下角 `我的` > `任务中心` > `签到`
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/qmkg/qmkg.js, tag=全民K歌, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qmkg.png,enabled=true

# 合创
#打开 APP 然后手动签到 1 次
11 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/hycan/hycan.js, tag=合创, img-url=https://raw.githubusercontent.com/Orz-3/task/master/hycan.png,enabled=true

# 蔚来
#打开 APP 手动签到一次
11 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/nio/nio.js, tag=蔚来, img-url=https://raw.githubusercontent.com/Orz-3/task/master/nio.png,enabled=true

# 京东到家
#手机浏览器打开`https://daojia.jd.com/html/index.html` 点击签到
# 11 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.js, tag=京东到家, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jddj.png,enabled=true

# 海底捞
#打开APP 然后手动签到 1 次
12 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/haidilao/hdl.js, tag=海底捞, img-url=https://raw.githubusercontent.com/Orz-3/task/master/haidilao.png,enabled=true

# 网易考拉
#打开 APP 手动签到一次: 访问下右下角 `我的考拉` > `领考拉豆` > `签到`
12 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/wykl/wykl.js, tag=网易考拉, img-url=https://raw.githubusercontent.com/Orz-3/task/master/wykl.png,enabled=true

# WPS
# 打开 APP 我 > 签到 (右上角, 不用手动签到)
12 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/wps/wps.js, tag=WPS, img-url=https://raw.githubusercontent.com/Orz-3/task/master/wps.png,enabled=true

# 七猫小说
# APP内手动日常签到(观看小视频领取奖励)和新手领福利签到以及幸运大转盘 1 次
12 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/qimao/qmnovel.js, tag=七猫小说, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qimao.png,enabled=true

# 智行火车
# 打开 APP 手动签到一次: 访问下右下角 `个人中心` > `签到`
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/zxhc/zxhc.js, tag=智行火车, img-url=https://raw.githubusercontent.com/Orz-3/task/master/zxhc.png,enabled=true

# 苏宁易购
# 首页 > 签到有礼
# 首页 > 领取红包
# 首页  > 天天低价
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.js, tag=苏宁易购, img-url=https://raw.githubusercontent.com/Orz-3/task/master/suning.png,enabled=true

# Zaker
# 打开App,然后手动签1次
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/zaker/zaker.js, tag=Zaker, img-url=https://raw.githubusercontent.com/Orz-3/task/master/zaker.png,enabled=true

# 不背单词
# 打开App,然后手动签1次
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bubei/bubei.js, tag=不背单词, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bubei.png,enabled=true

# 豆瓣时间
# 打开 APP 手动签到一次:  `市集` > `豆瓣时间` > `签到`
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/dbsj/dbsj.js, tag=豆瓣时间, img-url=https://raw.githubusercontent.com/Orz-3/task/master/dbsj.png,enabled=true

# 哈啰出行
# 打开 APP 进入签到页面:  `我的` > `有哈有车`
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/hellobike/hellobike.js, tag=哈啰出行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/hellbike.png,enabled=true

# 掌上飞车
# 打开 APP[掌上飞车],然后手动签到 1 次
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/zsfc/zsfc.js, tag=掌上飞车, img-url=https://raw.githubusercontent.com/Orz-3/task/master/zsfc.png,enabled=true

# 趣头条
# 打开 APP 进入签到:  `右上角` > `签到`
# 阅读篇数获取Cookie:`小视频`中播放一段时间视频即可获取,具体的阅读篇数奖励请到应用内手动点击
# 首页金币奖励:此Cookie在首页的推荐中随机出现,随机获取,并不一定会出现。
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/qtt/qtt.js, tag=趣头条, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qtt.png,enabled=true

# 米读
# 打开 APP 进入`我的` -> `疯狂摇摇乐`,系统提示: `签到:获取Cookie: 成功`
# 阅读时长获取Cookie:打开 APP 选取文章阅读， `书城` > `任意文章阅读` 等到提示获取Cookie成功即可
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/midu/miduRead.js, tag=米读, img-url=https://raw.githubusercontent.com/Orz-3/task/master/midu.png,enabled=true
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/midu/miduSign.js, tag=米读, img-url=https://raw.githubusercontent.com/Orz-3/task/master/midu.png,enabled=true

# 多看
# `我的` > `签到任务` 等到提示获取 Cookie 成功即可
13 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/duokan/duokan.js, tag=多看, img-url=https://raw.githubusercontent.com/Orz-3/task/master/duokan.png,enabled=true

# 京东618
10,20,30,40,50 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/jd/jd.618.js, tag=京东618,img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true
0 10,12,18,20,21 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/jd/jd.618.boom.js, tag=京东618炸弹,img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true

# 有道云笔记
3 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/noteyoudao/noteyoudao.js, tag=有道云笔记,img-url=https://raw.githubusercontent.com/Orz-3/task/master/noteyoudao.png,enabled=true

# 切换会话
# 访问: https://8.8.8.8/home管理
0 12 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/box/switcher/box.switcher.js, tag=切换会话,img-url=https://raw.githubusercontent.com/Orz-3/task/master/box.png,enabled=true

# 中国移动-查话费
# 打开app获取一次，点击话费余额获取一次
# "我的"-"设置"-"登陆设置"中关闭指纹登陆，打开自动登录，登陆以后关后台重进，才能保证获取到ck
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.fee.js, tag=中国移动-查话费, img-url=https://raw.githubusercontent.com/Orz-3/task/master/10086fee.png,enabled=true

# > 万达电影
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/wanda/wanda.js, tag=wanda-签到, img-url=https://raw.githubusercontent.com/Orz-3/task/master/wanda.png,enabled=true

# > 百果园
# 进入小程序直接签到
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/pagoda/pagoda.js, tag=百果园, img-url=https://raw.githubusercontent.com/Orz-3/task/master/pagoda.png, enabled=true

# > IT之家
# 获取方式:app进入签到页面获取
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/ithome/ithome.js, tag=ithome-签到, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ithome.png, enabled=true

# > 南方周末
# 获取方式:点击签到获取
10 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/nfzm/nfzm.js, tag=南方周末, img-url=https://raw.githubusercontent.com/Orz-3/task/master/nfzm.png,enabled=true

# @NobyDa

# 京东
#浏览器登录 https://bean.m.jd.com 点击签到并且出现签到日历
1,3 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, tag=京东, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true

# 贴吧
#打开App,访问下右下角 `我的
1,2,3 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js, tag=贴吧, img-url=https://raw.githubusercontent.com/Orz-3/task/master/tieba.png,enabled=true

# 爱奇艺
#打开App,访问下右下角 `我的
1 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js, tag=爱奇艺, img-url=https://raw.githubusercontent.com/Orz-3/task/master/iQIYI.png,enabled=true

# 52破解
#浏览器访问https://www.52pojie.cn/home.php?mod=space 即可
2 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js, tag=52破解, img-url=https://raw.githubusercontent.com/Orz-3/task/master/52pj.png,enabled=true

# 哔哩哔哩漫画
#打开App,访问下右下角 `我的
2 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js, tag=哔哩哔哩漫画, img-url=https://raw.githubusercontent.com/Orz-3/task/master/manga.png,enabled=true


# 一键签到  (By @sazs34)
# 贴吧，爱奇艺，网易云，52，V2ex,饿了么,电信
2 0 * * * nzw9314/sazs34/all_in_one.js, tag=一键签到, img-url=https://raw.githubusercontent.com/Orz-3/task/master/all_in_one.png,enabled=false


# 其他

# > 机场签到 (by evilbutcher & Neurogram )
# 使用BoxJs配置订阅及密码
2 0 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkin_env.js, tag=机场签到, img-url=https://raw.githubusercontent.com/Orz-3/task/master/airport.png,enabled=true

# 联通查话费流量
# 需要自己填key
3 0 * * * nzw9314/NavePnow/Scripts/10010+_qx.js, tag=联通查话费流量, img-url=https://raw.githubusercontent.com/Orz-3/task/master/10010.png,enabled=true

# 饿了么   (By @syzzzf)
#打开 APP, 访问下`我的`>`签到领红包`(左上角)
3 0 * * * https://raw.githubusercontent.com/songyangzz/QuantumultX/master/elem/elemSign.js, img-url=https://raw.githubusercontent.com/Orz-3/task/master/elem.png,enabled=true
3 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/elem/elemCheckIn.js, tag=饿了么-打卡领红包, img-url=https://raw.githubusercontent.com/Orz-3/task/master/elem.png,enabled=true

# 斗鱼鱼吧 By @yyfyyf123
3 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/yubaSign.js, tag=斗鱼鱼吧, img-url=https://raw.githubusercontent.com/Orz-3/task/master/douyu.png,enabled=true

# 携程旅行  (By @barrymchen)
#打开App 点击"我的",然后点击"我的积分",再点击下面的"签到.任务"即可
4 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/ctrip.js, tag=携程旅行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ctrip.png,enabled=true
# 小程序(登录携程微信小程序，我的特权)
4 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/ct_sign.js, tag=携程旅行小程序, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ctrip.png,enabled=true

# 腾讯新闻 (By 红鲤鱼与绿鲤鱼与驴 & @Macsuny)
#1.打开腾讯新闻app，阅读一篇文章，倒计时结束后即可获取Cookie
#2.现阶段每日共9个阶梯红包，具体阅读篇数视腾讯情况而变动
#3.脚本运行一次阅读一篇文章，请不要连续运行，防止封号，可设置每几分钟运行一次
#4.打开腾讯新闻app，阅读一篇文章，倒计时结束后即可获取Cookie,红包ID的Cookie，点击红包倒计时，或者点击活动页面的专属红包任务，有些账号可能无
4 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/txnews.js, tag=腾讯新闻, img-url=https://raw.githubusercontent.com/Orz-3/task/master/txnews.png,enabled=true

# 楼兰小说论坛 (By @iNotification)
#网页登录 www.lltxt.com 点击 "我的信息 - 签到 - 开始签到"
5 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/loulancheck.js, tag=楼兰小说论坛, img-url=https://raw.githubusercontent.com/Orz-3/task/master/loulan.png,enabled=true

# 招行信用卡(公众号) (By @iNotification)
#招商银行信用卡微信公众号："领积分 - 签到领积分"
5 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/cmbchina.js, tag=招行信用卡, img-url=https://raw.githubusercontent.com/Orz-3/task/master/cmbchina.png,enabled=true

# 京东成长分 (By @barrymchen)
#打开京东金融app，"信用"-》"小白成长分"
5 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/jdczf.js, tag=京东成长分, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jdczf.png,enabled=true

# 工银e生活 (By @barrymchen)
# App首页"欢趣签到",手动签到1次
5 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/icbc_sign.js, tag=工银e生活, img-url=https://raw.githubusercontent.com/Orz-3/task/master/icbc.png,enabled=true

# 微信小程序-同程艺龙 (By @barrymchen)
6 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/tongc_sign.js, tag=同程艺龙, img-url=https://raw.githubusercontent.com/Orz-3/task/master/tongc.png,enabled=true
6 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/tongc_info.js, tag=同程艺龙, img-url=https://raw.githubusercontent.com/Orz-3/task/master/tongc.png,enabled=true

# 京东到家 (By @barrymchen, @GideonSenku & @Macsuny)
#APP登陆账号后，点击主页'签到',即可
6 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/jddj.js, tag=京东到家, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jddj.png,enabled=true

# 微信小程序-来客有礼 (By @Macsuny)
# 微信搜索'来客有礼'小程序,登陆京东账号，点击'领京豆->翻牌'
6 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/lkyl.js, tag=来客有礼, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true

# 电视家 (By @Macsuny)
# APP登陆账号后，点击底部'赚赚'进入签到页面,即可获取Cookie.
0 7,20 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/dianshijia.js, tag=电视家, img-url=https://raw.githubusercontent.com/Orz-3/task/master/dianshijia.png,enabled=true

# 快手极速版 (By @Macsuny)
#APP登陆账号后，点击'钱包'
6 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/kuaishou.js, tag=快手极速版, img-url=https://raw.githubusercontent.com/Orz-3/task/master/kuaishou.png,enabled=true

# > 微博 & 微博钱包 (By @Macsuny)
#1.打开微博App获取Cookie.获取后请注释或禁用Cookie
#2.打开微博钱包点击签到，获取Cookie，
#3.钱包已经签到无法获取
6 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/weibo.js, tag=微博, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weibo.png,enabled=true

# > 新浪新闻 (By @Macsuny)
# 1.打开app,点击"我的"=>"签到"，获取第一个Cookie，通知获取信息成功
# 2.在未签到情况下，先禁用第一条Cookie链接，然后再次进入签到，通知获取签到Cookie成功
6 0 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/sinanews.js, tag=新浪新闻, img-url=https://raw.githubusercontent.com/Orz-3/task/master/sinanews.png,enabled=true

# > 中青看点极速版 (By @Macsuny)
# 1.进入app，签到一次,即可获取Cookie.
# 2.阅读一篇文章，获取阅读请求body，
# 3.在阅读文章最下面有个惊喜红包，点击获取惊喜红包请求
# 4.激励视频获取方法: 关闭vpn，进入任务中心=>抽奖赚点击下面第一个宝箱，出现视频广告页面，然后打开vpn，等待视频播放完毕，点击点我继续领青豆，再重复一次上面操作，获取激励视频请求的body
0 9 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js,tag=中青看点极速版, img-url=https://raw.githubusercontent.com/Orz-3/task/master/youth.png,enabled=true

# 数码之家 (By @Macsuny)
# 登陆数码之家电脑版网页，签到一次,即可
0 9 * * * https://raw.githubusercontent.com/Sunert/Scripts/master/Task/mydigit.js,tag=数码之家, img-url=https://raw.githubusercontent.com/Orz-3/task/master/mydigit.png, enabled=true

# 微信小程序-活动抽奖 (By @makexp & @zZPiglet)
#打开微信小程序 进入"活动抽奖"，手动签到一次或点击"已签到"
30 20 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/WeChatLottery_new.js, tag=微信小程序-活动抽奖, img-url=https://raw.githubusercontent.com/Orz-3/task/master/wechatlottery.png,enabled=true

# 滴滴出行  (By @zZPiglet)
# 进入"滴滴出行"，若弹出"首次写入滴滴出行 Token 成功"
1 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/DiDi/DiDi.js, tag=滴滴出行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/didi.png,enabled=true
59 23 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/DiDi/DiDi_reward.js, tag=滴滴出行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/didi.png,enabled=true

# 115 (By @zZPiglet)
# 进入"115"并摇一摇
1 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/115/115.js, tag=115, img-url=https://raw.githubusercontent.com/Orz-3/task/master/115.png,enabled=true

# 奈雪 (By @zZPiglet)
# 进入"奈雪点单"小程序，若弹出"首次写入奈雪の茶 Token 成功"
1 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/Naixue/Naixue.js, tag=奈雪, img-url=https://raw.githubusercontent.com/Orz-3/task/master/Naixue.png,enabled=true

# 掌门好老师 (By @zZPiglet)
# 进入"掌门好老师"，点击左上方"签到"或"📅"日历图标
1 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/ZMTeacher/ZMTeacher.js, tag=掌门好老师, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ZMTeacher.png,enabled=true

# 便利蜂 (By @zZPiglet)
# 进入"便利蜂"，点击"签到赚礼金"
1 0 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/Blibee/Blibee.js, tag=便利蜂, img-url=https://raw.githubusercontent.com/Orz-3/task/master/Blibee.png,enabled=true

# 欧可林(By @zZPiglet)
# 进入"欧可林"并点击"活动"
0 0 10,21 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/Oclean/Oclean.js, tag=欧可林, img-url=https://raw.githubusercontent.com/Orz-3/task/master/Oclean.png,enabled=true

# 微信小程序 - 欧可林商城(By @zZPiglet)
# 进入微信小程序"欧可林商城"并点击"每日任务"
0 0 10,21 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/Oclean/Oclean_mini.js, tag=欧可林商城, img-url=https://raw.githubusercontent.com/Orz-3/task/master/Oclean.png,enabled=true

# 小黑盒 (By @zZPiglet)
# 进入"小黑盒" - "我"，若弹出"首次写入heybox Cookie 成功"即可
0 * * * * https://raw.githubusercontent.com/zZPiglet/Task/master/heybox/heybox.js, tag=小黑盒, img-url=https://raw.githubusercontent.com/Orz-3/task/master/heybox.png

# 豆瓣电影日历 (By @zZPiglet)
# 进入  widget 界面（iOS 13 负一屏），添加「豆瓣·电影日历」，并重新进入此界面使其刷新获取内容，若弹出"首次写入 MovieCalendar APIKey 成功"即可正常食用
0 18 * * * https://raw.githubusercontent.com/zZPiglet/Task/master/MovieCalendar/MovieCalendar.js, tag=电影日历

# 微信小程序-喜马拉雅 (By @makexp)
# 微信小程序 - 喜马拉雅 - 我的： 签到 " 获取 Cookie
6 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/xmly_wc.js, tag=微信喜马拉雅, img-url=https://raw.githubusercontent.com/Orz-3/task/master/ximalaya.png,enabled=true

# 360扫地机 (By @qiaoborui)
# 首页右上角-签到🎁
6 0 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/360.js, tag=360扫地机, img-url=https://raw.githubusercontent.com/Orz-3/task/master/360.png,enabled=true

# 京东农场 (By liuxiaoyucc、lxk0301 & iepngs)
# 京东App - 右下角"我的"- 游戏与互动-东东农场
1 0 7,12,18 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_fruit.js, tag=京东农场, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdsg.png, enabled=true

# 京东萌宠 (By liuxiaoyucc、lxk0301 & iepngs)
# 京东App - 右下角"我的"- 游戏与互动-东东萌宠
1 0 7,12,18 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_pet.js, tag=京东萌宠, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdmc.png, enabled=true

# 京东宠汪汪 (By uniqueque、lxk0301 & iepngs)
# 京东App - 右下角"我的"- 游戏与互动-宠汪汪
0 */3 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_joy.js, tag=京东宠汪汪, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdww.png, enabled=true

1 0-16/8 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_joy_reward.js, tag=宠汪汪积分兑换奖品,img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdww.png, enabled=true

# 京东种豆得豆 (By uniqueque、lxk0301 & iepngs)
# 京东App - 右下角"我的"- 游戏与互动-摇钱树
1 7-21/3 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_plantBean.js, tag=京东种豆得豆, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdzd.png, enabled=true

# 京东摇钱树 (By lxk0301)
# 京东App - 右下角"我的"- 游戏与互动-摇钱树
*/6 * * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_moneyTree.js, tag=京东摇钱树, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/moneyTree.png, enabled=true

# 京东加速 (By lxk0301)
# 京东App - 右下角"我的"- 游戏与互动-天天加速
1 */3 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_speed.js, tag=京东加速, img-url=https://raw.githubusercontent.com/znz1992/Gallery/master/jdttjs.png, enabled=true

# 京东818手机节 (By lxk0301)
1 0-18/6 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_818.js, tag=京东818手机节, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,enabled=true

# 取关京东店铺商品 (By lxk0301)
55 23 * * * https://raw.githubusercontent.com/lxk0301/scripts/master/jd_unsubscribe.js, tag=取关京东店铺商品, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, enabled=true

# 叮咚农场(By iepngs)
# 叮咚买菜App - 右下角"我的"- 叮咚农场
1 8,12,17 * * * https://raw.githubusercontent.com/iepngs/Script/master/dingdong/index.js, tag=叮咚农场, img-url=https://raw.githubusercontent.com/Orz-3/task/master/mcdd.png, enabled=false

# 微博超话 (By Evilbutcher & toulanboy)
# 1.打开微博APP，"我的"， "超话社区"， "底部栏--我的"， "关注"， 弹出通知，提示获取已关注超话链接成功。
# 2. 点进一个超话页面，手动签到一次。弹出通知，提示获取超话签到链接成功。 若之前所有已经签到，关注一个新超话进行签到。
3 0 * * * https://raw.githubusercontent.com/toulanboy/scripts/master/weibo/weibotalk.js, tag=微博超话, img-url=https://raw.githubusercontent.com/Orz-3/task/master/weibo.png,enabled=true

# Funboat  (By Evilbutcher)
# 微信搜索小程序Funboat，如想购买Funko手办可关注。点我的，提示获取积分Cookie成功，手动签到一次，提示获取签到Cookie成功，即可使用。
5 8 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/funboat/funboat.js, tag= Funboat, img-url=https://raw.githubusercontent.com/Orz-3/task/master/funboat.png,enabled=true

# 小木虫论坛(By toulanboy)
# 打开小木虫app => 发现页面 => 签到领红包 => 拆红包。
5 0 * * * https://raw.githubusercontent.com/toulanboy/scripts/master/muchong/muchong.js, tag=小木虫论坛, img-url=https://raw.githubusercontent.com/Orz-3/task/master/muchong.png,enabled=true

# qq会员成长值签到 (By @lowking)
# 手机qq进入左侧会员，滑动即可
0 0 0,1 * * ? https://raw.githubusercontent.com/lowking/Scripts/master/QQVip/qqVipCheckIn.js, tag=qq会员成长值, img-url=https://raw.githubusercontent.com/Orz-3/task/master/qqvip.png, enabled=true

# 索尼俱乐部(By @lowking)
# 订阅BoxJs之后填写帐号密码
0 0 0 * * ? https://raw.githubusercontent.com/lowking/Scripts/master/sony/sonyClub.js, tag=索尼俱乐部, img-url=https://raw.githubusercontent.com/Orz-3/task/master/SONY.png, enabled=false

# 惠头条签(By 红鲤鱼与绿鲤鱼与驴)
# 作者的邀请码:53150681 
# nzw9314邀请码: 12773106
#时段签到, 阅读数据, 小视频和视频 4个cookie
*/2 0-11/1 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/htt_task.js, tag=惠头条

# 趣看天下(By 红鲤鱼与绿鲤鱼与驴)
# 作者的邀请码:9656852 
# nzw9314邀请码:9850323
# iepngs邀请码:9848880
*/3 0-20/1 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/qktx_task.js, tag=趣看天下

# 特仑苏 (By 红鲤鱼与绿鲤鱼与驴)
# 点击进入"特仑苏向往的生活"小程序授权登录后    点击放牧获取ck
28 9 * * * https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/tls_task.js, tag=特仑苏

# 无忧行 (by @vinewx)
# 1.打开无忧行App, 通知成功写入「 AccountID | UserID | Mobile | Token 」.
# 2.依次点击"我的" 👉 "任务中心". 通知成功写入「 TaskID 」.
0 9 * * * https://ooxx.be/js/jegotrip.js, tag=无忧行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jegotrip.png, enabled=false

# 优麦医生(by @vinewx)
# 打开优麦医生App，通知成功获取Cookie
0 9 * * * https://ooxx.be/js/umer.js, tag=优麦医生, img-url=https://raw.githubusercontent.com/Orz-3/task/master/umer.png, enabled=false

# 时代天使 (by chouchoui)
# 打开微信小程序 时代天使小管家，点击左下角刷新按钮，提示Cookie获取成功
30 8,13,19 * * * https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/angelalign/angelalign.task.js, tag=时代天使, enabled=false, img-url=https://raw.githubusercontent.com/Orz-3/task/master/angelalign.png

# NGA刮墙 (by chouchoui)
# 杀掉NGA后台并重新打开NGA，提示Cookie获取成功
10 0 * * * https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/nga/nga.js, tag=NGA刮墙, enabled=false, img-url=https://raw.githubusercontent.com/Orz-3/task/master/nga.png

