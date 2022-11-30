# aoto-insert-assets-to-html
用于 Webpack 打包时，自动插入CDN链接到HTML

## Usage
**webpack.config.js**

```js
const AutoInsertAssetsToHmtl = require('auto-insert-assets-to-html')
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new AutoInsertAssetsToHmtl({
      location: '</title>',
      urls: [
        {
          tag: 'link',
          url: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
          load: 'preload'
        },
        {
          tag: 'script',
          url: 'https://unpkg.com/vue@2.6.10/dist/vue.runtime.min.js',
          load: 'preload'
        }
      ]
    })
  ]
}
```


|  name   | type  | description |
|  ----  | ----  | ---- |
| location  | String | insert on position
| urls  | Array<UrlType> | urls
| UrlType | { tag: 'link' \| 'script', url: string, load: 'preload' \| 'prefetch' \| null } | url