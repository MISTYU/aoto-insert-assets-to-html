export interface urlType {
  tag: 'link' | 'script'
  load?: 'preload' | 'prefetch' | null
  url: string
}
export interface OptionsType {
  urls: urlType[]
  location: 'string'
}
