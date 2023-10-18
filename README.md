# vite-template-lib-ts

This template provides a minimal setup to get TypeScript working in [Vite](https://cn.vitejs.dev/guide/) with HMR and some ESLint rules.

## Directory Structure

```bash
    |
    |-- demo    // demo page
    |-- dist    // build file, will upload to npm
    |-- src     // lib source file
    |-- test    // test scripts with vitest
```

## Usage

### Dev

```bash
// run a demo page
yarn dev
```

- entery file: `demo/main.tsx`

### Build

```bash
// build lib
yarn build
```

- entery file: `src/main.ts`

### Test

```bash
// run test
yarn test
```
