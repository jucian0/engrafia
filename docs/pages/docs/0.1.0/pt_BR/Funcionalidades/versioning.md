---
title: 'Versionamento'
description: 'Versionar uma documentação garante a consistência da mesma.'
---

# Versionamento

Versionamento é uma forma de garantir a consistência das informações, sendo uma versão a representação de um estado do documento, como a documentação deve descrever o processo de uso e recursos de determinado produto,
e quando o produto recebe uma nova funcionalidade, ou alteração, o mesmo recebe uma nova versão que represente o estado atual do produto, mantendo o estado anterior acessível, com a documentação não deve diferir, a cada nova versão do produto é necessário gerar uma nova versão de documentação descrevendo como a versão atual funciona, etc.

O sistema de versionamento do Engrafia funciona através de pastas, para criar uma documentação com versionamento, basta criar pastas com nomes que atendam ao sistema de versionamento ` semantic version`, exemplo: `1.0.0` ou `0.0.0-beta`.

```mdx
    engrafia-app
      - pages
        - docs
          - 0.0.0
            - page-examples
          - 0.5.0
            - page-examples
          - 1.0.0
            - page-examples
```

## Seletor de versão

Para selecionar uma versão basta que o usuário selecione à através do seletor que fica no canto superior direito.

> PS\* É importante lembrar que o seletor de versão aparece apenas quando existe mais de uma versão. O sistema de versionamento funciona apenas no diretório de documentação, outras páginas como Home ou 404 por exemplo não possui versionamento.
