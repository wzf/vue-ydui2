# vue-ydui2

特别说明：这是基于 vue-ydui 组件升级的 UI 库，因为作者实在是太懒了，许久都不更新。<br/>
通过`npm i git`的方式使用过程中，遇到了一个问题，新增的组件就是不编译，所以无奈就单独开了一个版本出来。

## 使用

工程目录下面执行，引入组件

```
npm i --save https://github.com/wzf/vue-ydui2
```

main.js 里面 import 并安装

```
import YDUI from 'vue-ydui2';
import 'vue-ydui2/dist/ydui.rem.css';
import 'vue-ydui2/dist/ydui.flexible';
Vue.use(YDUI);
```

## 组件计划

~~- 画板`yd-canvasboard`（新增）~~
~~- 选择器`yd-picker`（新增）~~
~~- 时间选择`datetime`（修改）~~
~~- 大图预览`imagepreview`（新增）~~

- 图片选择`yd-filepicker`（新增）
- 进度条`yd-progressbar`（升级）
- 分割线`yd-divider`（新增）
- 下拉菜单`yd-dropdown`（新增）
- 时间线`yd-timeline`（升级）
- 图片`yd-image`（升级）
- 标签`yd-tag`（新增）
- 章节头`yd-sectionheader`（新增）
- 自动弹出键盘方案`yd-autoinput`（新增）
- 历史搜索`yd-searchhistory`（新增）
- 空数据提醒`yd-empty`（新增）
- 导航条`yd-navbar`（升级）
- 启动广告图`yd-launchad`（新增）
- 图标`yd-icon`（持续升级）
- 全局样式库（持续升级）

## YDUI 原有组件

[原有组件使用文档传送门](http://vue.ydui.org/docs/#/quickstart)

## 新组件说明

### datetime

**已完成** <br/>
在原来基础上，添加了一个`datetime_full`类型，对应的时间组件是`年 | 月 | 日 | 时 | 分 | 秒`

### imagepreview

**已完成** <br/>
通过 api 方式开启大图预览<br/>

> `Vue.use(YDUI);`执行以后，给 Vue.prototype 绑定了一个方法\$imagePreview，所以可以在 vue 组件内直接调用

```
const images = [
    'http://www.ydcss.com/img/1.jpg',
    'http://www.ydcss.com/img/2.jpg',
    'http://www.ydcss.com/img/3.jpg'
    ];
const index = 1;
this.$imagePreview({images, index});
```

| 参数   | 类型   | 说明         | 默认值 |
| ------ | ------ | ------------ | ------ |
| images | Array  | 图片数组     | 无     |
| index  | Number | 初始图片下标 | 0      |

### canvasboard（手写板）

**已完成** <br/>
业务中，为了解决“手写签名”而增加的这个组件<br/>
使用方式，具体参照 example/routers/canvasboard.vue

```
<!-- 添加组件 -->
<yd-canvasboard ref="canvasboard"></yd-canvasboard>
```

```
// 实际使用过程中大多数是"横屏签字，竖屏展示"
// 所以获取图像 并 进行-90度旋转

<!-- -90度旋转的画布 -->
<canvas :width="screenW"
        :height="imageHeight"
        style="background-color:#ffffff;"
        ref="previewCanvas">
</canvas>

// 获取图像并进行二次处理
_clickGetImage() {
      const imageData = this.$refs.canvasboard.imageBase64Data();
      let image = new Image();
      image.src = imageData;

      // 业务需求（横屏签名 => 竖屏显示）
      // 根据实际情况，对图片进行压缩，旋转
      this.showPreview = true;
      this.$nextTick(() => {
        const canvas = this.$refs.previewCanvas;
        const canvasW = canvas.getBoundingClientRect().width;

        const imgW = image.width;
        const imgH = image.height;

        const wR = canvasW / imgH; //缩放比例
        const diffW = canvasW - imgH; //缩放以后，高度差，需要通过位移抵消这部分值
        const rH = imgW * wR; //缩放后图片的高度
        this.imageHeight = rH;

        this.$nextTick(() => {
          const canvasH = canvas.getBoundingClientRect().height;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvasW, rH);

          ctx.translate(canvasW / 2, canvasH / 2); // 移动中心点
          ctx.rotate((-90 / 180) * Math.PI); //旋转-90度
          ctx.drawImage(image, 0, 0, imgW, imgH, canvasH / 2 - rH, -canvasW / 2, imgW * wR, imgH + diffW);
        });
      });
    }
```

### picker（选择器）

**已完成** <br/>
（这个组件是从 datetime 组件中剥离出来的）<br/>
提供一组选项，其中选项必须包括 value、name 两个值，value 是业务值，name 是显示值<br/>
使用方式，具体参照 example/routers/picker.vue

```
<yd-picker :options="options"
            :show="show"
            @onChange="_onCityPicked"
            @onConfirm="_onCityPickFinish"
            @onCancel="_onCityPickCancel"
            :default="city"></yd-picker>

methods: {
    _onCityPicked({ index, value }) {
      console.log(index, value);
    },
    _onCityPickFinish({ index, value }) {
      console.log(index, value);
      this.city = value;
      this.cityName = this.options[index].name;
      this.show = false;
    },
    _onCityPickCancel({ index, value }) {
      console.log(index, value);
      this.show = false;
    }
}
```

| 参数        | 类型    | 说明                                       | 默认值 |
| ----------- | ------- | ------------------------------------------ | ------ |
| options     | Array   | 选项（必须包含 value、name）               | []     |
| default     | String  | 默认选项的 value 值                        | ''     |
| show        | Boolean | 控制显示                                   | false  |
| confirmText | String  | "确认"按钮显示值                           | '确认' |
| cancelText  | String  | "取消"按钮显示值                           | '取消' |
| onChange    | 事件    | 选择了一个新选项，回调参数({index, value}) | -      |
| onConfirm   | 事件    | 点击"确定"按钮                             | -      |
| onCancel    | 事件    | 点击"取消"按钮                             | -      |

### progressbar（进度条）

样式升级[参照 element]

### divider（分割线）

分割线[参照 element]

### filepicker（图片选择）

基于`<input type="file"/>`从相册选择照片、拍照<br/>
如果基于 h5+做 APP 的话，建议直接使用 plus 功能，[相册](http://www.html5plus.org/doc/zh_cn/gallery.html)、[相机](http://www.html5plus.org/doc/zh_cn/camera.html)

| 参数 | 类型   | 说明                                                   | 默认值 |
| ---- | ------ | ------------------------------------------------------ | ------ |
| max  | Number | 允许最多几张图片，-1 表示不限                          | -1     |
| type | String | all(相册、拍照)、album(只允许相册)、camera(只允许拍照) | all    |
| add  | slot   | 自定义"添加"区域                                       | -      |

| 方法   | 返回值类型 | 说明                          |
| ------ | ---------- | ----------------------------- |
| images | Array      | 获取已选择的图片，base64 数组 |

### timeline（时间线）

倒序、正序

### image（图片）

占位图、懒加载

### tag（标签）

| 参数  | 类型   | 说明                     | 默认值    |
| ----- | ------ | ------------------------ | --------- |
| text  | string | 文字内容                 | 无        |
| color | string | 颜色                     | "#04be02" |
| alpha | Number | 颜色\*alpha 作为背景颜色 | 0.8       |

### dropdown（下拉菜单）

从点击位置弹出扩展菜单

### sectionheader（章节头）

| 参数       | 类型    | 说明                                    | 默认值    |
| ---------- | ------- | --------------------------------------- | --------- |
| icon-color | string  | 图标颜色                                | "#04be02" |
| icon       | slot    | 自定义"首位图标"区域                    | (竖线)    |
| text       | string  | 文字                                    | 无        |
| text       | slot    | 自定义"文字"部分                        |
| more       | boolean | 是否显示右侧的"更多"                    | false     |
| more-text  | string  | 右侧更多的文字，只有 more=true 时才显示 | "更多"    |
| more-icon  | string  | 右侧更多的图标，只有 more=true 时才显示 | ">"       |
| more       | slot    | 自定义"更多"区域                        |

### empty（空数据提醒）

| 参数       | 类型   | 说明             | 默认值                       |
| ---------- | ------ | ---------------- | ---------------------------- |
| text       | string | 提醒文字         | "~~ 暂时未发现有用的数据 ~~" |
| text-color | string | 提醒文字颜色     | "#909090"                    |
| text       | slot   | 自定义"文字"区域 |
| icon       | string | 提醒图标         |
| icon-color | string | 提醒文字颜色     | "#a0a0a0"                    |
| icon       | slot   | 自定义"图标"区域 |
