import { urlType } from "./types"

export const templateStr = {
  link: '<link rel="stylesheet" href="x" load>',
  script: '<script src="x" load></script>'
}

export function getFinanlUrlsStr (urls: urlType[]) {
  let urlsStr = ''
  urls.forEach(url => {
    urlsStr += templateStr[url.tag].replace('x', url.url).replace('load', url.load ? url.load : '')
  })
  return urlsStr
}
