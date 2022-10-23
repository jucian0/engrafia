---
title: 'Tradução e versionamento'
description: 'Este é um guia lhe ensina com usar tradução e versionamento em um app Engrafia.'
position: 2
---

# Tradução mais versionamento

Nos tutoriais anteriores, foi demonstrado como usar [traduções](/0.1.0/pt_BR/Tutoriais/translation), e [versionamento](/0.1.0/pt_BR/Tutoriais/versioning) nos apps Engrafia, e nesse pequeno tutorial, vai ser demonstrado como usar esses dois recursos juntos.

Em apps Engrafia, é importante seguir um esquema de pasta especifico para que esses dois recursos possam funcionar de forma correta, primeiro precisamos da pasta que representa a versão da documentação, e dentro dela as pastas que representam os idiomas disponíveis.

```mdx
    engrafia-app
      - pages
        - 0.0.0
          - en_US
            - page-examples
          - pt_BR
            - page-examples
        - 0.0.1
          - en_US
            - page-examples
          - pt_BR
            - page-examples
```

Seguindo esse esquema de configuração, Engrafia vai entender como cada pasta deve ser tratada e organizara o conteúdo de forma correta no menu lateral.
