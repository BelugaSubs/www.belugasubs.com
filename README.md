# belugasubs.com
Beluga Subtitle Groups Offcial Website. 白鲸字幕组官方网站

## 1. 使用的库及对应的版本号/仓库链接
- hexo (7.0.0)
- hexo-filter-nofollow (2.0.2)
	- https://github.com/hexojs/hexo-filter-nofollow

## 2. 文件存放
所有的自定义文件均存放在了themes-Chic-source的文件夹里，基本上都在assets文件夹中。删除了原主题的非常多文件。

- head			html头部，layout-_partial-head.ejs
- footer		html body底部的版权信息layout-_partial-footer.ejs
- basicStyle	基本的body部分a标签样式，字体定义，source-css-base.styl
- font			字体导入，source-css-font.css

## 3. Upate logs

### [2.0.0] - 2024-01-16

- Notice	每次生成的时候，需要手动更新两个sitemap文件的lastmodify并删除public里面的archieves和2020两个文件夹。
- Update	重构项目，重新使用最新版的`hexo 7.0.0`和最新版本的`Chic 4.2.2`重构了整个项目。
- Update	将页面重构，选项更改为旗下账号、成员名单、关于我们、加入我们、商业合作。
- Fix       多处文字内容修复及更新。
- Fix		修复了Google Analytics代码、right reserved时间。
- Fix		修复了sitemap和部分SEO优化（如robots.txt）（手动更新！！！）
- Delete    删除文章展示。