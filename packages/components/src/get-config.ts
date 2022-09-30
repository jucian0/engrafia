
export type Config = {
  title?: string
  description?:string
  author?:string
  docsPage?:string
  repository?:{
    url: string
    branch:string
  }
  i18n?:{[k:string]:{[l:string]:string}}
  nav?:{
    logo?:string
    links?:{title: string, url:string}[]
  }
}

export function getConfig():Config {
  try {
    return require("root_folder/engrafia.config.json");
  } catch (err) {
    return {
      
    };
  }
}
