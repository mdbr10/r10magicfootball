# Sistema de Internacionalização (i18n)

Este projeto utiliza o [i18next](https://www.i18next.com/) e [react-i18next](https://react.i18next.com/) para gerenciar as traduções e internacionalização.

## Estrutura de Arquivos

```
src/i18n/
├── index.ts              # Configuração principal do i18next
├── I18nProvider.tsx      # Provedor React para i18next
└── locales/              # Arquivos de tradução
    ├── pt-BR.json        # Português (Brasil)
    ├── en-US.json        # Inglês (EUA)
    ├── es-ES.json        # Espanhol (Espanha)
    ├── fr-FR.json        # Francês (França)
    ├── it-IT.json        # Italiano (Itália)
    └── zh-CN.json        # Chinês (China)
```

## Como Usar

### Em Componentes React

```tsx
'use client'; // Importante para componentes do Next.js

import { useTranslation } from 'react-i18next';

function MeuComponente() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('chave.do.titulo')}</h1>
      <p>{t('chave.do.paragrafo')}</p>
      
      {/* Idioma atual */}
      <p>Idioma atual: {i18n.language}</p>
      
      {/* Mudar idioma programaticamente */}
      <button onClick={() => i18n.changeLanguage('en-US')}>
        Mudar para Inglês
      </button>
    </div>
  );
}
```

### Adicionando Novas Traduções

1. Adicione as chaves de tradução nos arquivos JSON em `src/i18n/locales/`
2. Mantenha a mesma estrutura de chaves em todos os arquivos de idioma
3. Use namespaces (como `common`, `home`, etc.) para organizar as traduções

Exemplo:

```json
{
  "translation": {
    "common": {
      "botao": "Clique Aqui"
    },
    "pagina": {
      "titulo": "Meu Título",
      "descricao": "Minha descrição"
    }
  }
}
```

### Usando Parâmetros nas Traduções

```json
{
  "translation": {
    "bemvindo": "Olá, {{nome}}!"
  }
}
```

```tsx
// No componente
t('bemvindo', { nome: 'João' }) // Resultado: "Olá, João!"
```

### Pluralização

```json
{
  "translation": {
    "itens": "{{count}} item",
    "itens_plural": "{{count}} itens"
  }
}
```

```tsx
// No componente
t('itens', { count: 1 }) // Resultado: "1 item"
t('itens', { count: 5 }) // Resultado: "5 itens"
```

## Detecção de Idioma

O sistema detecta automaticamente o idioma do usuário na seguinte ordem:

1. Preferência salva nos cookies
2. Idioma do navegador
3. Fallback para português (pt-BR)

## Mapeamento de Idiomas

O sistema inclui um mapeamento para lidar com variantes de idiomas:

- `pt-PT` → `pt-BR` (Português de Portugal para Brasil)
- `en-GB` → `en-US` (Inglês Britânico para Americano)
- etc.

Para adicionar novos mapeamentos, edite o objeto `languageMapping` em `src/i18n/index.ts`. 