# CloudBase 同步部署说明

这个文件夹里是腾讯云 CloudBase 云函数模板。

需要创建两个普通云函数：

- `submitRecord`：保存她提交的小记录
- `listRecords`：读取你收到的小记录

数据库集合名称：

- `gift_records`

网页里需要填写 CloudBase 环境 ID：

```js
provider: "cloudbase",
cloudBaseEnvId: "你的环境ID",
```

云函数内部使用 `@cloudbase/node-sdk`，在云函数环境中无需填写密钥。
