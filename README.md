# 5.20 慢慢靠近计划

这是一个复古风格的纯前端小程序，直接打开 `index.html` 就能用。

## 现在的玩法

- 关卡会一关一关解锁
- 后面的关卡默认隐藏，只显示“未解锁档案”
- 完成当前关卡后，下一关才会显示真实标题和到货日期
- 如果下一关礼物还没到货，会显示“待到货”
- 整体视觉是潮玩收藏主题，背景有小怪兽、星星人、Zsiga 风小人、猫猫和小狗贴纸

## 四份礼物

- 第一关：两个玩偶的盲盒，二选一小问答
- 第二关：拉布布的大夏玩偶，交换答案瓶
- 第三关：小金豆，今日心情
- 第四关：最后的 520 礼盒，交换答案瓶

## 怎么改内容

打开 `app.js`，修改最上面的 `giftPlan`。

- `date`：礼物到货日期，格式是 `2026-05-10`
- `title`：关卡标题
- `gift`：完成关卡后显示的小礼物名称
- `message`：弹窗里的礼物提示或想说的话
- `game`：小游戏类型，可选 `eitherOr`、`answerBottle`、`mood`
- `questions`：二选一小问答内容
- `prompts`：交换答案瓶的问题和你的答案
- `moods`：今日心情的选项和不同文案
- `photos`：礼物照片路径，可以放多张
- `stickers`：可爱表情包或贴纸路径，可以放多张

## 怎么换成真实照片

把礼物照片放到：

```text
assets/photos/
```

比如你放了一张：

```text
assets/photos/blindbox-real.jpg
```

就把 `app.js` 里第一关的：

```js
photos: ["./assets/photos/blindbox-placeholder.svg"],
```

改成：

```js
photos: ["./assets/photos/blindbox-real.jpg"],
```

表情包也一样，可以放到：

```text
assets/stickers/
```

然后改 `stickers` 里的路径。

现在内置的可爱贴纸在：

```text
assets/stickers/
```

包括小怪兽、星星人、Zsiga 风小人、金渐层猫猫、猫猫堆和小狗队。它们都是原创 SVG 占位图，你也可以换成自己的表情包图片。

## 真实猫狗照片来源

项目里已经放了两张真实照片装饰：

- `assets/photos/real-golden-cat.jpg`
  来源：[British Shorthair golden shaded cat.jpg - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:British_Shorthair_golden_shaded_cat.jpg)，CC0。
- `assets/photos/real-puppy.jpg`
  来源：[Puppy dog face.jpg - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Puppy_dog_face.jpg)，CC BY 2.0，作者 Ian Phillips。

你也可以直接用自己的猫猫狗狗照片替换这两个文件名，页面会自动显示。

## 玩偶图鉴抠图

我已经预留了抠图素材目录：

```text
assets/cutouts/
```

你把 ZSIGA、小野、LABUBU、星星人的图鉴原图保存进去后，我可以继续帮你把具体玩偶裁切成 PNG 装饰贴纸，再挂到页面四周。

## 怎么预览

正式打开：

```text
index.html
```

调试预览全部日期限制：

```text
index.html?preview=1
```

注意：`preview=1` 只会取消日期等待，仍然保留“一关一关隐藏”的逻辑。
