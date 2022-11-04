---
title: 'SEO'
description: 'This doc will guide you to improve the SEO of the website, and have better results in Google or another search engine.'
tags: search, docs, nextjs, google, seo
---

# SEO

If you want to have good results with search engines, like Google, you probably will find this content interesting.

## What is SEO?

>SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance, and link popularity so its pages can become easily findable, more relevant, and popular towards user search queries, and as a consequence, search engines rank them better.

When talking about SEO, meta tags are an important resource to improve the site results, in the next section, we will show you how to configure, and use them.

## But what are meta tags?

Meta tags are invisible tags that show information about your website to search engines, they can provide information like, description, title, images, tags, and more. It is added in the `head` area of the `HTML` page.

```html
<head>
  <link rel="shortcut icon" href="/favicon.ico" />
  <title>site title</title>
  <meta name="description" content="site description" />
</head>
```

## Adding meta tags in Engrafia 

Whenever you create anew page in Engrafia, you should add some metadata, you can do that by `getStaticProps`, when using javascript files:

```jsx
//exports the page metadata
export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: 'My custom page',
        description: 'This is a custom page example',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};
```

Or by YAML syntax when using `mdx` or `md` files:

```md
---
title: 'My page title'
description: 'This is a custom page example'
tags: react, docs, nextjs, i18n, internationalization
---

# Page
```

> Engrafia allows you to add more than just `title`, `description`, and `tags`, you can also add custom metadata.

## Configuring meta tags

To configure meta tags it's necessary to make some changes in `theme.config.js`, in the HEAD property, every metadata added to the page can be recovered by HEAD function.

 ```jsx
   head: ({ title, meta }) => (
    <>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{meta.title}</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
    </>
  ),
 ```
 ## Principal tags

### Title
The most important tag, title tag is one of the first things that users notice in the SERPs. It’s the title of your page that offers a preview of what your content is about.

 ```html
 <title>site title</title>
```
 ### Description

 The meta description is of equal importance to the title tag. If the title tag is the title that appears at the top of a search result, the meta description is the snippet that displays underneath.

The meta description should provide an accurate description of the content of your page. It is usually the element that determines whether users will click on your page, which makes it important to spend time on its optimization.

 ```html
 <meta name="description" content="Here is a precise description of my awesome webpage.">
```


### Other tags

You can also add specific tags for social media, and images:

```jsx
<meta property="og:title" content={meta.title} />
<meta property="og:url" content="https://engrafia.vercel.app" />
<meta property="og:site_name" content="Engrafia" />
<meta property="og:type" content="website" />
{meta.description && (
  <meta property="og:description" content={meta.description} />
)}
<meta
  property="og:image"
  content={
    meta.socialImage ??
      'https://engrafia.vercel.app/imgs/engrafia-social-image.png'
    }
  />
```

### Twitter tags


```jsx
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:site" content="juciano_barbosa" />
<meta property="twitter:title" content={title} />
{meta.description && (
  <meta property="twitter:description" content={meta.description} />
)}
<meta
  property="twitter:image"
  content={
    meta.socialImage ??
    'https://engrafia.vercel.app/imgs/engrafia-social-image.png'
  }
/>
```