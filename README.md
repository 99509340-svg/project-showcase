# 个人项目作品集网站

面向寒假实习申请的双项目作品集。首页在 30–60 秒内说明候选人背景、两个项目解决的问题和可核验证据；两个独立项目页展示功能、界面截图、技术栈、真实边界与体验入口。

## 公开地址

- 作品集首页：https://99509340-svg.github.io/project-showcase/
- 口袋理财项目页：https://99509340-svg.github.io/project-showcase/pocket-licai.html
- 松拼 SongRide 项目页：https://99509340-svg.github.io/project-showcase/songpin.html

## 视觉与交互

站点采用原创的“午夜校园电子菜单 / P3-inspired Graphic Overdrive”视觉：

- 近黑蓝舞台搭配钴蓝大斜切块、电子青数据线、柠檬黄选中态和红粉句点。
- 首页终端面板改为白色菜单式档案板，使用钴蓝大编号、黄色整行悬停和红色偏移阴影。
- 项目卡采用“白色信息区 + 钴蓝/黄色视觉区”，详情页使用全宽色带、超大编号和粗边证据窗口。
- 页面进入时使用三段斜切色块揭幕；标题使用遮罩上移与红色句点弹出。
- 滚动时采用分组错峰显现，流程节点按顺序点亮；桌面支持有限指针视差。
- 不引用《女神异闻录 3》的角色、Logo、游戏截图、原版字体或受版权保护素材，只借鉴高对比色块与强节奏的视觉氛围。
- 支持键盘焦点、原生 dialog、移动端单栏、320px–1440px 无横向滚动和 `prefers-reduced-motion` 降级。

## 页面

- `index.html`：作品集首页、双项目入口与真实边界说明。
- `pocket-licai.html`：口袋理财 · 收益管家。
- `songpin.html`：松拼 SongRide。

## 体验入口

- 口袋理财：https://99509340-svg.github.io/pocket-licai/
- 松拼 SongRide：微信小程序；当前体验码待更新，页面会明确说明状态，不展示可能失效的旧二维码。
- 源码：
  - https://github.com/99509340-svg/pocket-licai
  - https://github.com/99509340-svg/songpin-miniprogram

## 页面截图位置

- 口袋理财界面截图：`assets/images/pocket/`
- 松拼品牌图：`assets/images/brand/songpin-logo.png`
- 松拼页面中的手机界面是根据源码字段重绘的示意，不标记为真实产品截图。

## 本地运行

```bash
python3 -m http.server 4173
```

打开 `http://127.0.0.1:4173/`。

站点为纯静态 HTML / CSS / JavaScript，不需要 npm 或构建步骤，可直接部署到 GitHub Pages。

## 内容边界

- 口袋理财是本地优先的个人财务 Web/PWA MVP，不是生产级金融产品。
- 核心财务数据保存在浏览器 localStorage，不自动跨设备同步。
- 松拼是单设备本地数据为主的微信小程序 MVP，未实现真实多人云端车单池、实时同步或即时通讯。
- 松拼订阅消息仍有待完成云开发、模板申请与配置验证的部分。
- 松拼当前未取得新的有效微信预览码，体验按钮会打开状态说明。
- 页面截图使用虚构演示数据；不展示虚构用户量、收益、留存、获奖或运营成绩。

## 字体与许可

- 中文正文：Noto Sans SC 子集，字重 400 / 700 / 900。
- 展示英文与 HUD 标签：Archivo Black、Barlow Condensed。
- 字体均自托管在 `assets/fonts/`，OFL 许可证同目录保存。
