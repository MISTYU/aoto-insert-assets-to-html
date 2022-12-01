import { OptionsType, urlType } from "./types"

const templateStr = {
  link: '<link rel="stylesheet" href="x" load>',
  script: '<script src="x" load></script>'
}

function getFinanlUrlsStr (urls: urlType[]) {
  let urlsStr = ''
  urls.forEach(url => {
    urlsStr += templateStr[url.tag].replace('x', url.url).replace('load', url.load ? url.load : '')
  })
  return urlsStr
}

class AutoInsertExternalsCDNToHtml {
  urls: urlType[]
  location: string

  constructor (options: OptionsType) {
    this.urls = options.urls
    this.location = options.location
  }
  apply(compiler) {
    // 在打包结束后写入 dist 前会调用
    compiler.hooks.emit.tap('AutoInsertExternalsCDNToHtml', compilation => {
      const htmlContent = compilation.assets['index.html'].source()
      const newHtmlContent = htmlContent.replace(this.location, this.location + getFinanlUrlsStr(this.urls))
      compilation.assets['index.html'] = {
        source: () => newHtmlContent,
        size: () => newHtmlContent.length
      }
    })
  }
  
}

export default AutoInsertExternalsCDNToHtml
