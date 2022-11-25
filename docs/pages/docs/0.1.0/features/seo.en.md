---
title: 'SEO'
description: 'This doc will guide you to improve the SEO of the website, and have better results in Google or another search engine.'
tags: search, docs, nextjs, google, seo
---

# SEO

If you want to have good results with search engines, like Google, you probably will find this content interesting.

## What is SEO?

> SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance, and link popularity so its pages can become easily findable, more relevant, and popular towards user search queries, and as a consequence, search engines rank them better.

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
  //import Head from 'next/head';

  head: ({ title, meta }) => (
   <Head>
     <link rel="shortcut icon" href="/favicon.ico" />
     <title>{meta.title}</title>
     {meta.description && (
       <meta name="description" content={meta.description} />
     )}
   </Head>
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
<meta
  name="description"
  content="Here is a precise description of my awesome webpage."
/>
```

### Other tags

You can also add specific tags for social media, and images, there are any rules about what you can add in the head of a page.

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
    meta.image ??
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

## NextSeo

Another viable option is to use [next-seo](https://github.com/garmeeh/next-seo), this package removes all effort you should put into configuring SEO in NextJs applications.

In the link above, you can find all instructions about configuring it, but the process is very simple. Below there is an example of where you should put it.

```bash
npm install next-seo
```

```js
//import { NextSeo } from 'next-seo';

//theme.config.js

...
head:({title, meta})=>(
  <>
    <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  </>
)
```

Just by following this example, you have configured all social media tags, as well as SEO tags.

## Sitemap

A sitemap can make your website easier to navigate, and improve your website's indexation velocity in search engines. As a result, a sitemap can help you achieve better SEO site performance.

### What is a sitemap?

A site map is a model of a website's content designed to help both users and search engines navigate the site. A site map can be a hierarchical list of pages (with links) organized by topic, an organization chart, or an XML document that provides instructions to search engine crawl bots.

### How Engrafia provide it

Engrafia uses [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap) to help to generate sitemaps. The library repository has a helpful documentation, and you can find all information how to configure it there.

We will coverage the basic configuration how to use it with Engrafia, but if you want to have a more complete knowledge about it, we recommend to visit its repository, and documentation.

## Steps

### Installation

```bash
yarn add next-sitemap
```

### next-sitemap.conf.js

Add this file in the root of your project

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
```

### Build step

Add a new postbuild script to generate the sitemap.

```json
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
```

> For monorepo users, it's necessary to add the location of the build folder, do that by `sourceDir` [Config](https://github.com/iamvishnusankar/next-sitemap#configuration-options)
