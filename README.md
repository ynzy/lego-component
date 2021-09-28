# lego-component

# 特性

- typescript
- Vue3
- 单元测试
- 提交发布前验证
- travis 实现自动发布

# 提交 tag 自动发布

```js
git tag -a v.1.0.7 -m "version 1.0.7"
git push --tags # 推送tag
```

# npm 版本号

```js
// version = v1.0.0
npm version patch
// v1.0.1
npm version prepatch
// v1.0.2-0
npm version minor
// v1.1.0
npm version major
// v2.0.0
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
