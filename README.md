# [www.belugasubs.com](www.belugasubs.com)

Beluga Subtitle Groups Official Website. 白鲸字幕组官方网站

## 1. 使用的库及对应的仓库链接

- hexo
- hexo-filter-nofollow
  - [https://github.com/hexojs/hexo-filter-nofollow](https://github.com/hexojs/hexo-filter-nofollow)
- hexo-theme-Chic
  - [https://github.com/Siricee/hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic)

## 2. 特别注意

每次生成的时候，需要手动更新两个sitemap文件的lastmodify，并删除public里面的archieves和posts两个文件夹。

## 3. 文件存放

所有的自定义文件均存放在了themes-Chic-source的文件夹里，基本上都在assets文件夹中。删除了原主题的非常多文件。

- head html头部，layout-\_partial-head.ejs
- footer html body底部的版权信息layout-\_partial-footer.ejs
- basicStyle 基本的body部分a标签样式，字体定义，source-css-base.styl
- font 字体导入，source-css-font.css

## 4. Change logs

### [3.0.0] - 2025-10-28

- Update 更新 Hexo 到 `8.1.0`
- Feat 更新了 header 和 footer 的样式
- Feat 限制了页面最大内容显示宽度
- Docs 添加了最新信息
- Docs 移除了备案号

### [2.1.1] - 2024-03-03

- Fix 修复错误的图片链接
- Update 部署到 Cloudflare pages 替代境外 gh pages 分流
- Update 增加 Prettier

### [2.1.0] - 2024-01-18

- Update 新增 icp.gov.moe 备案号
- Fix members 地图无法自适应。
- Fix img 标签 lazy load 占位符出现在不该在的地方，限制了只会给账号和合作伙伴占位。
- Fix 修复部分 SEO 优化，如简介中的换行符。

### [2.0.0] - 2024-01-16

- Update 重构项目，重新使用最新版的 `hexo 7.0.0` 和最新版本的 `Chic 4.2.2` 重构了整个项目。
- Update 将页面重构，选项更改为旗下账号、成员名单、关于我们、加入我们、商业合作。
- Fix 多处文字内容修复及更新。
- Fix 修复了 Google Analytics 代码、right reserved 时间。
- Fix 修复了 sitemap 和部分 SEO 优化（如 robots.txt）（手动更新！！！）
- Delete 删除文章展示。
