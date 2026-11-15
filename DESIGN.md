---
name: "Project Dossier — Midnight Campus HUD"
description: "一个以午夜校园档案、战术 HUD 和强节奏揭幕为核心的个人项目作品集。"
colors:
  midnight: "#050814"
  midnight-soft: "#080D1D"
  surface: "#0C1224"
  surface-raised: "#111A31"
  ink: "#F4F7EF"
  muted: "#B4BED6"
  electric-cyan: "#68F5FF"
  signal-yellow: "#EDF64F"
  alert-red: "#FF405D"
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
    backgroundColor: "{colors.electric-cyan}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.control}"
    padding: "0 22px"
  button-primary-hover:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.electric-cyan}"
    rounded: "{rounded.control}"
    padding: "0 22px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 22px"
  project-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "48px"
---

# Design System: Project Dossier — Midnight Campus HUD

## Overview

**Creative North Star: “午夜校园作战档案”**

这是一个原创的、面向招聘方的项目档案界面。它借用午夜校园、广播屏幕、路线板和战术终端的气氛，用近黑蓝底、电子青、柠檬黄与警报红形成强识别度。它不重建游戏世界，不引用《女神异闻录 3》的角色、Logo、游戏截图或原版字体。

页面像一套可操作的任务终端：大的案件编号、斜切窗口、状态灯、定位标签与扫描带负责引导视线；项目事实、截图、技术栈和边界报告始终优先。视觉张力来自高对比色块和少见但明确的编排动作，而不是持续闪烁或装饰性玻璃。

**Key Characteristics:**
- 午夜蓝黑为唯一基础底色，彩色只承担状态、重点和分区。
- 矩形与斜切轮廓为主，圆角只保留在模拟移动端界面中。
- 首屏动作强烈，滚动动作克制且分组错峰。
- 每个视觉组件都能对回项目事实、流程或可核验证据。

## Colors

午夜底色支撑长时间阅读，电子青是系统与可交互信号，柠檬黄用于校园路线和第二重点，警报红用于边界、风险与关键动作强调。

### Primary
- **Electric Cyan**：口袋理财主强调色，用于主 CTA、导航状态、项目面板边框和流程节点。
- **Midnight Ink**：文字和高对比反向按钮；避免纯黑，保留蓝底层次。

### Secondary
- **Signal Yellow**：松拼 SongRide 主强调色，也用于与红色背景形成高对比警示。
- **Alert Red**：用于真实边界、错误状态、重要角标和局部危险信号。

### Neutral
- **Midnight**：页面底色。
- **Soft Midnight / Surface**：项目面板、媒体窗口、对话窗口的层次。
- **Muted Blue White**：正文辅助文字，保持 WCAG AA 对比度。

**The Signal Rarity Rule.** 荧光色只出现在状态、身份和重点交互上，不用整页渐变或随机装饰填满画面。

## Typography

**Display Font:** Portfolio Sans 900 / Archivo Black（英文 HUD 编号）
**Body Font:** Noto Sans SC 子集（PingFang SC 回退）
**Label Font:** Barlow Condensed 700/800

**Character:** 中文大标题厚重、紧凑；英文编号像档案打印；HUD 标签窄而高，承担坐标、状态和系统语言。

### Hierarchy
- **Display**（900，clamp 3.5–6.75rem，0.98 行高）：首页和项目页主标题。
- **Headline**（900，2.5–4.75rem，1.03 行高）：章节标题与边界报告。
- **Title**（900，1.35–1.6rem）：模块名、流程节点和项目卡标题。
- **Body**（400，16px，1.75 行高，最大 65–75ch）：解释正文。
- **Label**（700/800，12px，0.1–0.16em 字距，大写）：HUD 状态、编号、坐标和辅助标签。

**The One Type Voice Rule.** 中文标题不使用细衬线；档案感由字重、尺度和空间产生，不靠仿古字体。

## Layout

桌面最大宽度约 1320px，首页使用不对称双栏首屏与纵向项目档案。项目页采用 Hero 双栏、模块栅格、横向流程轨道和截图证据区。手机端收敛为单栏，保留编号、状态、标题和 CTA，不复制装饰性侧栏。

区块之间使用大尺度垂直节奏（约 86–158px）；同一组信息内部保持紧凑。板块通过斜切和全宽色带换气，而不是堆叠同尺寸圆角卡片。

## Elevation & Depth

层次主要来自色调和轮廓，不来自柔和悬浮卡片。项目面板、截图窗口和移动端示意可使用带偏移的深色阴影，表达“悬浮的屏幕”而非发光装饰。彩色光晕不用于默认状态。

**The Screen-Not-Glass Rule.** 需要深度时使用屏幕、边框、裁切和偏移阴影，不使用磨砂玻璃或透明卡片。

## Shapes

轮廓以矩形、斜切角和 1px 技术线为主。主要容器使用轻微切角（约 6–8%），按钮以局部切角形成方向感。圆角仅出现在模拟小程序界面的输入框、状态块和内部控件中，不与作品集外壳混用。

## Components

### Buttons
- **Shape:** 小型切角矩形，无胶囊。
- **Primary:** 电子青或柠檬黄底色，深色文字；悬停时反转为深底与荧光文字。
- **Secondary / Outline:** 透明深底、技术线边框；悬停后填满强调色。
- **Interaction:** 桌面端轻微磁吸偏移；键盘焦点保持 2px 可见描边。

### Project Panels
- **Style:** 深色全宽档案板，一侧为截图或品牌视觉，另一侧为项目事实、标签和体验/源码入口。
- **State:** 悬停时强调色边框亮起，扫描带单次掠过，截图轻微缩放；不使用无限漂浮。

### HUD Labels
- **Style:** Barlow Condensed，宽字距大写，配合状态灯、坐标和编号。
- **Purpose:** 标记真实状态、数据边界、页面编号和流程阶段，不做无意义装饰。

### Screens / Media
- **Style:** 深色窗口、技术线顶栏、单次启动扫描。
- **Behavior:** 桌面端可使用不超过 12px 的有限指针视差；移动端和 reduced-motion 下关闭。

### Navigation
- **Style:** 固定深色顶栏，左侧 PF / 案件编号，右侧锚点和源码入口。
- **State:** 当前动作以电子青或柠檬黄下划线回应；移动端隐藏次要锚点。

## Do's and Don'ts

### Do:
- **Do** 用大号编号、斜切面板、状态灯和坐标解释项目结构。
- **Do** 保持正文高对比、字号不低于 12px 的功能性标签，并让 CTA 在首屏可见。
- **Do** 在移动端关闭指针视差，保留一次性的揭幕、错峰显现和清晰焦点。
- **Do** 明确标注“界面示意”“演示数据”和“体验码待更新”。

### Don't:
- **Don't** 使用 P3 的角色、Logo、原版字体、游戏截图或受版权保护素材。
- **Don't** 使用渐变文字、装饰性玻璃拟态、自动跑马灯、彩色光晕或无意义的永久闪烁。
- **Don't** 用虚构用户量、收益、留存、获奖或上线成绩撑起视觉叙事。
- **Don't** 把单设备本地 MVP 描述成多人云端产品或生产级金融系统。
