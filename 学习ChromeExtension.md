# 插件常见包含的文件

## `manifest.json`
`manifest.json` 文件是名称固定，而且必须置于插件的根目录下，具体格式参见 https://developer.chrome.com/docs/extensions/mv3/manifest/

manifest 指定了conetent scripts 、service worker 的文件路径，以及声明授权给插件使用 chrome 的 api 等

## The service worker
service worker 可以使用 Chrome 的 api，来做一些 Dom 页面做不了的事情，比如导航到新的页面、移除书签、关闭一个tab，运行在浏览器的后台插件环境中

## Content scripts
在 web 页面上下文环境中执行 js，它可以注入到页面中，操作页面中的 DOM ，不过 Content scripts 一般不可以直接调用 Chrome 的 api，但是可以间接的通过通信手段来调用

# plasmo框架
plkasmo是专门为开发浏览器插件而生的框架，它可以让我们专注开发插件的内容，而不用过度关心manifest等配置的问题，对 React 和 Ts 都支持的很好，自动生成 manifet ，同时包含打包的功能，也就是说打包后的可直接发布插件，不再需要webpack了，还可以配置 env 变量文件等

### import


