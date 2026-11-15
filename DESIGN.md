---
name: "Project Dossier — Midnight Campus Graphic Overdrive"
description: "一个以钴蓝斜切、菜单式白面板、电子青数据信号与柠檬黄高亮为核心的个人项目作品集。"
colors:
  void: "#020713"
  void-soft: "#030D1D"
  surface: "#071529"
  surface-raised: "#0A2140"
  cobalt: "#174DFF"
  cobalt-deep: "#0C32C9"
  electric-cyan: "#3EF2FF"
  lemon: "#F7FF35"
  alert-red: "#FF335F"
  hot-pink: "#FF4FA3"
  ink: "#F8FBFF"
  muted: "#B9C9ED"
  pale-blue: "#DBE7FF"
typography:
  display:
    fontFamily: "Portfolio Sans, Portfolio Display, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6.75rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Portfolio Sans, PingFang SC, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  hud:
    fontFamily: "Portfolio HUD, Portfolio Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sharp: "0px"
  control: "0px"
  mock-ui: "12px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "34px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.lemon}"
    textColor: "{colors.void}"
    rounded: "{rounded.sharp}"
    padding: "0 22px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "0 22px"
  button-outline:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
    rounded: "{rounded.sharp}"
    padding: "0 22px"
  menu-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
    rounded: "{rounded.sharp}"
    padding: "26px 28px"
  project-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
    rounded: "{rounded.sharp}"
    padding: "0px"
---

# Design System: Project Dossier — Midnight Campus Graphic Overdrive

## Overview

**Creative North Star: “午夜校园电子菜单”**

这是一个原创、面向招聘方的项目档案界面。视觉借鉴高饱和钴蓝、电子青、柠檬黄、红粉、黑白反差、斜切色块与菜单式选中态所共同形成的游戏化节拍，但不使用《女神异闻录 3》的角色、Logo、游戏截图、原版字体或任何受版权保护素材。

页面像一套会在夜间切入的校园档案终端：首屏用大色块、超大编号和厚重标题建立瞬间识别；项目卡以“白色信息区 + 彩色视觉区”形成菜单式切换；详情页再用全宽色带、流程节点与截图窗口把项目事实逐层展开。视觉张力来自编辑式排版、色块节奏和明确交互动作，而不是装饰性粒子或持续闪烁。

**Key Characteristics:**
- 近黑蓝作舞台，钴蓝负责主结构，电子青负责数据与交互，柠檬黄负责选中态和核心标题，红色只作句点、警示与切换信号。
- 大面积直角、斜切和粗边框；圆角只保留在模拟移动端内部。
- 白色菜单面板与深色舞台形成游戏 UI 式反差，项目事实仍然优先于装饰。
- 每屏只保留一个主动作；悬停、揭幕和滚动显现分别承担不同层级的反馈。

## Colors

### Primary
- **Cobalt**：首页大斜切块、项目视觉区和流程区主背景，建立强烈的图形结构。
- **Electric Cyan**：数据线、技术标签、边框和系统状态。
- **Lemon**：标题高亮、菜单悬停、主按钮和工作流节点。
- **Alert Red / Hot Pink**：关键句点、边界面板、悬停切换和少量错位阴影。

### Neutral
- **Void / Soft Midnight**：页面舞台与章节底色。
- **Screen Ink**：高对比标题、白色菜单和媒体窗口。
- **Muted Blue White / Pale Blue**：正文辅助文字和浅色卡面，保持可读性。

**The Three-Signal Rule.** 每个局部最多同时使用三种高饱和信号色；第四种颜色只能作为极小面积的状态或句点出现。

## Typography

**Display Font:** Portfolio Sans 900 / Archivo Black
**Body Font:** Noto Sans SC 子集（PingFang SC 回退）
**Label Font:** Barlow Condensed 700/800

**Character:** 中文标题厚重、紧凑，英文编号像校园广播与档案打印；HUD 标签窄而高，承担状态、编号和系统语言。

### Hierarchy
- **Display**（900，clamp 3.5–6.75rem，0.98 行高）：首页和项目页主标题。
- **Headline**（900，2.5–4.75rem，1.03 行高）：章节标题与边界报告。
- **Title**（900，1.35–1.6rem）：模块名、流程节点和项目卡标题。
- **Body**（400，16px，1.75 行高，最大 65–75ch）：解释正文。
- **Label**（700/800，12px，0.1–0.16em 字距）：HUD 状态、编号、坐标和辅助标签。

**The One Type Voice Rule.** 不用仿古或装饰字体模拟游戏；冲击力来自字重、尺度、错位色块和留白。

## Layout

桌面最大宽度约 1320px。首页采用不对称双栏首屏、两条纵向项目档案、钴蓝工作流和红色边界带。项目页采用 Hero 双栏、彩色模块栅格、全宽流程轨道、截图证据区和白色边界报告。

大区块之间使用 86–158px 的垂直节奏；同一组信息内部保持紧凑。色块负责换气，斜切负责方向，编号负责定位，不为每个区块重复同一种圆角卡片。

## Elevation & Depth

层次主要来自白/黑/钴蓝的硬切换、粗边框和带方向的偏移阴影。截图窗口、白色菜单面板和边界报告可以使用 8–14px 的红色或钴蓝色偏移块阴影，形成“被拍在屏幕上的档案纸”效果。

**The Screen-Not-Glass Rule.** 需要深度时使用边框、裁切和偏移阴影，不使用磨砂玻璃或半透明悬浮卡片。

## Shapes

轮廓以矩形、斜切角和 2–4px 技术线为主。按钮与项目卡使用局部切角；手机模拟界面内部才允许出现小圆角。标题高亮使用轻微斜切色块，红色句点独立放大。

## Components

### Buttons
- **Primary:** 柠檬黄底、黑色文字；悬停切换为钴蓝底和白色文字。
- **Outline:** 白色底、黑色文字与粗边；悬停切换为红底和黑色文字。
- **Interaction:** 桌面端可使用有限磁吸偏移；键盘焦点保持 2px 可见描边。

### Menu Panel
- **Style:** 白色底、粗技术边框、彩色顶部条、钴蓝大数字和偏移阴影。
- **Purpose:** 首页用“菜单列表”直接展示两个项目入口，形成可被招聘方一眼理解的导航。
- **State:** 行悬停时以柠檬黄整行高亮，并保留清晰的箭头和项目编号。

### Project Panels
- **Style:** 白色信息区与钴蓝/柠檬黄视觉区并置，顶部以项目主色粗边区分。
- **State:** 悬停时整体轻微向左上抬起，以钴蓝偏移阴影强化切换感；移动端关闭位移。

### Boundary Panels
- **Style:** 白色证据纸、红色或柠檬黄粗边、彩色编号与清晰的数据边界。
- **Rule:** 所有未完成能力与本地存储限制都必须在这里直说。

### Screens / Media
- **Style:** 白色媒体窗、电子青边框、黑色内部画面和红色偏移阴影。
- **Behavior:** 桌面端允许不超过 12px 的指针视差；移动端和 reduced-motion 下关闭。

## Motion

- 页面进入时使用三块斜切色带快速揭幕，总时长控制在 1.35 秒内。
- 标题以遮罩上移和红色句点弹出完成第一次视觉落点。
- 滚动内容按组错峰显现；项目卡和流程节点只在进入视口时点亮一次。
- 悬停动作只改变颜色、位移与阴影，不设置无限漂浮或闪烁。
- `prefers-reduced-motion` 下关闭揭幕、视差、位移和长动画，但保留全部静态色块与信息层级。

## Do's and Don'ts

### Do:
- **Do** 用钴蓝、柠檬黄、白色菜单和红色句点建立强识别度。
- **Do** 保持正文高对比、字号不低于 12px 的功能性标签，并让 CTA 在首屏可见。
- **Do** 明确标注“界面示意”“演示数据”和“体验码待更新”。
- **Do** 让全宽色带承担章节结构，让斜切只出现在有方向含义的位置。

### Don't:
- **Don't** 使用 P3 的角色、Logo、原版字体、游戏截图或受版权保护素材。
- **Don't** 使用渐变文字、装饰性玻璃拟态、持续闪烁或与内容无关的粒子系统。
- **Don't** 用虚构用户量、收益、留存、获奖或上线成绩撑起视觉叙事。
- **Don't** 把单设备本地 MVP 描述成多人云端产品或生产级金融系统。

## Proof and factual constraints

- 口袋理财是本地优先的个人财务 Web/PWA MVP，不是生产级金融产品；核心财务数据保存在浏览器 localStorage，不声称真实用户量、收益、留存或获奖。
- 松拼是面向松江大学城场景、可完整演示发布—浏览—报名—车主确认—收藏—个人管理的微信小程序 MVP；当前核心订单数据以本地存储为主，不声称已具备真实多人云端车单池或多端同步。
- 微信体验码未取得有效更新前，页面只展示真实状态说明，不伪造二维码。
- 截图使用虚构演示数据，不展示真实账户、姓名或交易备注。

## Accessibility

简体中文正文对比度至少满足 WCAG AA；交互控件提供可见焦点；动效尊重 `prefers-reduced-motion`；桌面、平板和手机端均不产生横向滚动。
