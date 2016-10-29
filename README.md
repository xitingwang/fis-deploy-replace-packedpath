# fis-deploy-replace-packedpath

Replace require path for packager file.
## use
```node
npm install --save fis-deploy-replace-packedpath
```

## settings
```javascript
// 替换字符串
fis.match('**', {
    deploy: [
        fis.plugin('replace-packedpath', {
            path: ['/lib/min.js'] //要替换的路径
        })
    ]
});

```