import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { name } from "../package.json";
import autoprefixer from 'autoprefixer';
const file = type => `dist/${name}.${type}.js`

// tsconfig
const overrides = {
  compilerOptions: { 
    declaration: true, // 设置生成ts声明文件
  },
  exclude: [
    'node_modules',
  ],
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({tsconfigOverride:overrides}),
    vue(),
    postcss({
      extract: 'bundle.css',
      plugins: [
        autoprefixer({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
      ]
    })
  ],
  external: ['vue', 'lodash-es'],
  /* external: (id) => {
    // id是库文件名称
    return /^vue/.test(id)
  } */
}