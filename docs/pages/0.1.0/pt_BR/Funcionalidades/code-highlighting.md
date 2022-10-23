---
title: 'Trechos de códigos'
description: 'Este é um guia lhe ensina como exibir trechos de códigos no documento.'
---

# Trechos de código

Em casos de documentação técnica é muito importante prover exemplos de uso do que esta sendo documentado, isso pode ser feito com trechos de código.

Engrafia usa [Prims](https://prismjs.com/) para exibir trechos de código, abaixo, alguns exemplos de uso.


```jsx
import { createTheme, globalCss } from '@nextui-org/react';

export const myDarkTheme = createTheme({
    type: 'light',
  theme: {},
});
```

Prims suporta uma grande quantidade de linguagens, e você pode escolher a mais apropriada para exibir os blocos de código.
![code-example](/code.png)