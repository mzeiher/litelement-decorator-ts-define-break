 * `yarn install`
 * `yarn rollup -c`
 * `npx http-static`
 * navigate to `http://127.0.0.1:3333` -> proeprty is beeing reflected
 * uncomment `useDefineForClassFields` in `tsconfig.json`
 * `yarn rollup -c`
 * navigate to `http://127.0.0.1:3333` -> proeprty is **NOT** beeing reflected, change detection does not trigger