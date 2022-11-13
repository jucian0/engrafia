---
title: 'Code Highlight'
description: 'This doc will help you to understand how to use  code highlight.'
tags: docs, nextjs, code, codeblock, prism
---

# Code Highlight

Code Highlight allows you to expose code examples, so your reader can have a better experience and examples of code implementation.

```jsx
import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';

function App({ Component, pageProps }: AppProps) {
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
```

This feature is supported using `md`, and `mdx` files, to use it just add three quotation marks, and the language syntax you want to use, like the example below:

```md
/```jsx

import { AppProps } from 'next/app';
import { Engrafia } from 'engrafia';

function App({ Component, pageProps }: AppProps) {
  return (
    <Engrafia>
      <Component {...pageProps} />
    </Engrafia>
  );
}

export default App;
```/
```


```javascript
const values = [1,2,3,4,5]
```
```md
/```javascript
const values = [1,2,3,4,5]
```/
```