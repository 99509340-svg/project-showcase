# 个人项目作品集网站

用于寒假实习申请的双项目作品集。首页负责建立候选人背景与项目索引，两个独立项目页负责展示功能、截图、设计思路、技术栈、真实边界和体验入口。

## 页面

- `index.html`：作品集首页
- `pocket-licai.html`：口袋理财 · 收益管家
- `songpin.html`：松拼 SongRide

## 体验入口

- 口袋理财：https://99509340-svg.github.io/pocket-licai/
- 松拼 SongRide：微信小程序，需扫描最新的开发者工具预览码
- 源码：https://github.com/99509340-svg/pocket-licai 与 https://github.com/99509340-svg/songpin-miniprogram

> 松拼页面中的二维码区域目前明确标注“体验码待更新”，不会使用可能失效的旧二维码。取得新预览码后替换 `songpin.html` 中 `.qr-slot` 内容即可。

## 本地运行

```bash
python3 -m http.server 4173
```

打开 `http://127.0.0.1:4173/`。

站点为静态 HTML/CSS/JavaScript，不需要 npm 或构建步骤。

## 内容边界

- 口袋理财是个人财务 Web/PWA MVP，不是生产级金融产品。
- 松拼是单设备本地数据为主的微信小程序 MVP，未实现真实多人云端车单池。
- 页面截图使用虚构演示数据。
- 不展示虚构用户量、收益、留存、获奖或运营成绩。

## 字体

使用 Noto Serif SC 与 Noto Sans SC 的子集文件，许可证位于 `assets/fonts/`。
