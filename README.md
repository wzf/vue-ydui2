# vue-ydui2
特别说明：这是基于vue-ydui组件升级的UI库，因为作者实在是太懒了，许久都不更新。<br/>
通过```npm i git```的方式使用过程中，遇到了一个问题，新增的组件就是不编译，所以无奈就单独开了一个版本出来。

## 使用
工程目录下面执行，引入组件
```
npm i --save https://github.com/wzf/vue-ydui2
```

main.js里面import并安装
```
import YDUI from 'vue-ydui2';
import 'vue-ydui2/dist/ydui.rem.css';
import 'vue-ydui2/dist/ydui.flexible';
Vue.use(YDUI);
```

## 组件计划
* 图片上传组件yd-file（新增）


## YDUI原有组件
[原有组件使用文档传送门](http://vue.ydui.org/docs/#/quickstart)

## 新组件说明
#### datetime
在原来基础上，添加了一个```datetime_full```类型，对应的时间组件是```年 | 月 | 日 | 时 | 分 | 秒```

#### imagepreview
通过api方式开启大图预览<br/>
> ```Vue.use(YDUI);```执行以后，给Vue.prototype绑定了一个方法$imagePreview，所以可以在vue组件内直接调用
```
const images = [
    'http://www.ydcss.com/img/1.jpg',
    'http://www.ydcss.com/img/2.jpg',
    'http://www.ydcss.com/img/3.jpg'
    ];
const index = 1;    
this.$imagePreview({images, index});
```
参数 | 类型 | 说明 | 默认值
---|---|---|---
images | Array | 图片数组 | 无
index | Number | 初始图片下标 | 0

