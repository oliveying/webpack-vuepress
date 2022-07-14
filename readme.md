## tsconfig.json 报错 无法写入文件 ，因为他会覆盖输入文件是怎么回事？

* tsconfig 改动
```js{6,8}
{
  "compilerOptions": {
    "module": "ES6",
    "target": "ES5",
    "allowJs": true,
    "outDir": "./"
  },
  "exclude": ["build", "node_modules", "dist"]
}

```
<!-- postcss.config.js改为.postcssrc.js -->

