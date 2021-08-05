import basicConfig,{name,file} from './rollup.config'

export default {
  ...basicConfig,
  output: {
    name: 'LegoComponents',
    file: file('umd'),
    format: 'umd',
    globals: { // 全局变量对应的包名
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  },
}