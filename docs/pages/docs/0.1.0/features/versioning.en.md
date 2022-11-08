---
title: 'Versioning'
description: 'This doc will guide you through the versioning feature, and how to have versioned documentation.'
tags: docs, nextjs, semantic-version, semver, version
---

# Versioning

Versioning is a high priority when talking about documentation, your readers should be able to access documentation for every version of your product(lib, software). They need to know what changed between versions, when they can't do that, they easily can make mistakes using your product, and it can bring you some extra work answering questions that could be explained in versioned documentation.

## Semver

Engrafia uses [SEMVER](https://semver.org/) (Semantic versioning) versioning model, but what does that mean, well the better way to explain is by a note of the documentation:

> *Semantic Versioning is a standardized way to give meaning to your software releases. It's a way for software authors to communicate succinctly to the consumers of their software important info they should know about this release. Semver is represented by just three numbers separated by periods.*

Documentation versioning should follow the product version, so, whenever your software has a new version that changes some feature or implements any new feature, it's necessary to write a new version of the documentation.

## How does Engrafia apply semantic versioning?

Engrafia uses file system to organize the versions of the documentation, which means that every time that you need to write a new version of your documentation, you need to create a new folder following the rules of SEMVER, for example; `0.1.1`, `1.0.0`, these folders should be into `pages` folder.

```mdx
engrafia-app
  - pages
    - docs
      - 0.0.0
        - page-examples
```

> Remember to update the links to the last version of your documentation

## Switching versions

To switch between versions, just use the version selector at the top of the right side. 

![versioning-semantic-version](/imgs/versioning.png)
