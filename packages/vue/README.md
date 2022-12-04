# cyber-icons

<p align="center">

<image width="100px" src="logo.svg" />

+280 Free SVG cyberpunk icons. Contributions, corrections & requests can be made on GitHub.


  <a href="https://badgen.net/github/checks/avastjs/cyber-icons">
    <img src="https://badgen.net/github/checks/avastjs/cyber-icons" />
  </a>
  <a href="https://github.com/avastjs/cyber-icons/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/avastjs/cyber-icons" alt="license">
  </a>
  <a href="https://badgen.net/bundlephobia/minzip/@vastjs/cyber-icons-react">
    <img src="https://badgen.net/bundlephobia/minzip/@vastjs/cyber-icons-react" />
  </a>
  <a href="https://badgen.net/bundlephobia/dependency-count/@vastjs/cyber-icons-react">
    <img src="https://badgen.net/bundlephobia/dependency-count/@vastjs/cyber-icons-react" />
  </a>
  <a href="https://badgen.net/bundlephobia/tree-shaking/@vastjs/cyber-icons-react">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@vastjs/cyber-icons-react"  />
  </a>
  <a href="https://badgen.net/npm/types/@vastjs/cyber-icons-react">
    <img src="https://badgen.net/npm/types/@vastjs/cyber-icons-react"  />
  </a>
</p>

<image width="600px" src="ss1.png" />

Demo: https://cyber-icons-demo.vercel.app/

<hr />

## Next steps:

- +100 futuristics svg icons components (and more after)
- Angular Lib
- Svelte Lib

# Install


## Vue

<image width="80px" src="vue-min.png" />

https://www.npmjs.com/package/@vastjs/cyber-icons-vue

npm

```
npm install @vastjs/cyber-icons-vue
```

yarn

```
yarn add @vastjs/cyber-icons-vue
```

### Usage Vue3

```typescript
// plugins/CyberIcons.ts
import { FaceAngel, FaceAngry } from 'cyber-icons-vue';

export default {
  install: (app: any, options: any) => {
    app.component("FaceAngel", FaceAngel);
    app.component("FaceAngry", FaceAngry);
    // other icons...
  },
};
```

```javascript
// your component 
<template>
  <FaceAngry />
</template>
```

### Usage Nuxt 3 

```typescript
// plugins/cyber-icons.client.js
import { FaceAngel } from '@vastjs/cyber-icons-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FaceAngel", FaceAngel);
  // others...
})
```

```javascript
// your component 
<template>
  <FaceAngry />
</template>
```


## Options

### Themes

- default
- soft
- stellar
- eclipse
- twilight
- jupiter
- mars
- spacex
- dark

```html
  <ApplicationsEngineering theme="spacex" />
```

<image width="100%" src="themes.png" />

### Custom Color


```html
  <ApplicationsEngineering primary="#f50a0a" secondary="#f0e5e5" border="#fbff00" />
```

<image width="100px" src="custom.png" />


### Size


you can pass pixels, ems, etc

```html
  <ApplicationsEngineering size="2.6em" />
```

### Stroke 

you can pass pixels, ems, etc

```html
  <ApplicationsEngineering stroke="4px" />
```