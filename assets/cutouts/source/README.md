把你发给我的 LABUBU、星星人、小野、ZSIGA 图鉴原图保存到这个文件夹。

建议命名：

- `labubu-guide.jpg`
- `star-guide.jpg`
- `hirono-guide.jpg`
- `zsiga-guide.jpg`

然后运行：

```text
python tools/extract_cutouts.py
```

脚本会把裁出来的 PNG 放到：

```text
assets/cutouts/extracted/
```

如果你电脑自带的 `python` 没有 Pillow，可以让我来运行，Codex 自带的 Python 已经有 Pillow。
