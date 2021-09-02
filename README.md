## 本地配置

1. 安装 `jekyll`

2. 直接`jekyll serve` 就可以在 `localhost:4000` 中运行了。

## 服务器部署

1. 先`git`下来

2. `npm i`

3. `npm build`

4. `pm2 start index.js` 

> 重新运行`pm2 restart index.js`
> 查看状态`pm2 status`
> 停止 `pm2 stop index.js`

这时就会在服务器的3000端口上运行网页了。然后配置好Nginx反向代理3000端口就可以，默认是已经配置好了的。

## 工程组织架构

### 主目录

- index.js: 这个是一个javascript的脚本，比较方便指定html在哪个端口运行。
- package.json: 服务于js的一个文件，可以打包生成一些自定义的指令，这里我生成了`npm run build` | `npm run dev` 用于调试和部署。

### index

- 这里放所有的导航出来的主页面，这里尽量写成.html的形式，因为这里每个页面都不太一样，方便调整显示格式。

- 如果需要新建页面，可以参考其他的html，然后注意修改一下 permalink 就可以了，这个是一个绝对地址。如果没有这一项，会自动生成一个和路径相关的链接。

- [ ] 需要做一下新闻的主页，显示所有新闻消息的。

### images

- [ ] 这里暂时放一些图片，但是因为服务器的带宽很低，以后需要搞一个图床，把这里的都替换掉。


### assets

这些和sass一样是一些样式文件。如果需要自定义一些css，可以参考custom中的几个来新建css。然后在自己的html中添加css:xxx.css。可以参考404.html 这样可以了。


### _team

这里就是放人员信息的数据的。

### _post

这里添加新的新闻什么的

### _layout

这里是一些页面的排版

- [ ] 需要做一下个人介绍的排版，让个人信息好看一些。
- [ ] 需要做一下新闻的排版


### _include

这里放一些页面的小零件

### _data

存放数据 research 等。 

- [ ] 最好把publication也整合到这里来。