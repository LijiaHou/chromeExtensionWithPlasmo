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

## import
由于plasmo同时负责打包的工作，与webpack 在 config 文件中配置导入文件的loader以及导入资源的形式不同，plasmo 无需配置文件loader，而是在 import 的时候采用
```js
import <scheme>:<file path>
```
的形式，有多种 scheme 可选

### raw
1. 直接拷贝文件到 build 目录下
2. 并赋予一个 hash 的文件名
3. 返回拷贝后的地
```js
import imageUrl from "raw:~/assets/image.png"
 
console.log(imageUrl) // chrome-extension://<extension-id>/image.<hashA>.png
```

### url
1. 将资源转换为浏览器可识别的类型(html/js/css/images)
2. 将转换后的文件及其依赖拷贝到根目录
3. 赋予一个 hash 文件名
4. 如果是 content-script ，还会将文件添加到 `web_accessible_resources`
(如果用url导入图片还会优化size)

### data-text
1. 读取文件内容
2. 转换为 (html/js/css/images)
3. 返回内容的 string

```js
import styleText from "data-text:~/assets/style.scss"
 
console.log(styleText)
// {
//   "color": "red",
// }
```

### data-base64
1. 读取文件内容
2. 转化为 (html/js/css/images)
3. 将结果再转为 base64 格式，并以字符串的形式返回

### react:*.svg
将 svg 资源转换为 React 组件

```js
import Logo from "react:~/assets/logo.svg"
 
const Hello = () => <Logo />
```
