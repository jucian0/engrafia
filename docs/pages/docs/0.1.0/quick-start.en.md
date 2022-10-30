---
title: 'Quick start'
description: 'This section will guide you through principals ideas and how to start to use it.'
position: 0
---

# Quick start

Engrafia is an opensource project designed to build documentation websites without any effort. Engrafia is built up NextJs, it means that you have the power, and performance of NextJs to build your documentations.

## Motivations

The main motivation to build Engrafia is to provide the better options to build a website for documentation with no efforts, something to make you stay focused just in writing your document, don't worry about things like configs, layouts, stay focused writing MD, and MDX files.

## Technologies

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Next UI](https://nextui.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Creating a new documentation

This is the default process to start a new Engrafia application, open the terminal and run the fallowing command:

```bash
yarn create engrafia
```

This command will guide through some steps to decide which template would you like to use. After all, you will have a new application up to production.

## Development mode

To write new documents, it's useful if you are up the development environment.

Do that running the command `yarn dev`, the development environment will be available in [`http://localhost:3000`](http://localhost:3000)

![engrafia-start](/engrafia-start.png)

### MD files

To write a new document you need to create a new `md` or `mdx` file, and add some metadata, like `title`, `description`,`tags`, and options data named `position`, which is used to define the position of the item in a menu category.

> If you are new with `md`, `mdx` files, you can read the documentation [here](https://www.markdownguide.org/)

```mdx
---
title: 'Quick start'
description: 'This section will guide you through principals ideas and how to start to use it.'
position: 0
---

# Quick start

Engrafia is opensource project designed to build documentation websites. without any effort. Engrafia is builded up NextJs, it means that you have the power, and performance of NextJs to build your documentations.
```

```mdx
# H1 heading

## H2 heading

This is a list in markdown:

- One
- Two
- Three
```

### Images

If you want to add images in your documentation, just add it into public folder in the root of your project, after that, link it into your document.

```md
    ![img-example](/img-from-public.png)
```

## Production mode

Okay, after you wrote some documents, you want to publish it to the world, so let start, by choosing the place you want to deploy it. Engrafia is built up NextJs, so the best choice should be Vercel, but there are more than just one good options to do that, wherever you can deploy a NextJs application, you can deploy an Engrafia application too.

To have a production artifact you just need to run the fallowing command `yarn build`.

Done!
