import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { name } from "../package.json";
const file = type => `dist/${name}.${type}.js`

// tsconfig
/* const overrides = {
  compilerOptions: { 
    declaration: true,
  },
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts"
  ]
} */
const overrides = {
  compilerOptions: { declaration: true, },
  // 如果不包含"src/App.vue","src/main.ts",打包的時候会包一层src
  exclude: [ "node_modules",'tests/**/*.ts', 'tests/**/*.tsx' ]
}
export { name, file }
export default {
  input: 'src/App.vue',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({tsconfigOverride: overrides}),
    vue(),
    postcss({
      extract: 'bundle.css',
      plugins: [
        autoprefixer({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
      ]
    }),
    // css({output: 'bundle.css'})

  ],
  external: ['vue', 'lodash-es'],
  /* external: (id) => {
    // id是库文件名称
    return /^vue/.test(id)
  } */
}