# vite-template-lib-ts

This template provides a minimal setup to get TypeScript working in [Vite](https://cn.vitejs.dev/guide/) with HMR and some ESLint rules.

## Dev

```bash
// run a demo page
yarn dev
```

- run a React app to test lib file(`src/main.ts`)
- demo app entery file: `demo/main.tsx`

## Build

```bash
// build lib
yarn build
```

- will be compiled to `dist/` (`vite-lib.js` & `vite-lib.umd.cjs`)
- lib entery file: `src/main.ts`

## Test

```bash
// run test
yarn test
```

- with [vitest](https://cn.vitest.dev/guide/)
- test scripts: `test/`
