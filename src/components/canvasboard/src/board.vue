<template>
  <div class="yd-canvasboard"
       ref="container">
    <canvas :width="canvasW"
            :height="canvasH"
            ref="canvas"
            style="background-color: #ffffff">
      <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
    </canvas>
  </div>
</template>

<script type="text/babel">
import { isColor } from '../../../utils/assist';

export default {
  name: 'yd-canvasboard',
  data() {
    return {
      touches: {
        startX: 0, //开始坐标x
        startY: 0, //开始坐标Y
        lastX: 0, //最近坐标x
        lastY: 0 //最近坐标y
      },
      canvasW: '300px',
      canvasH: '300px'
    };
  },
  props: {
    height: {
      type: [String, Number],
      default: '100%'
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
    strokeLineWidth: {
      type: Number,
      default: 3.0
    },
    theme: {
      validator(value) {
        return ['1', '2'].indexOf(value) > -1;
      },
      default: '1'
    },
    current: {
      validator(val) {
        return /^\d*$/.test(val);
      },
      default: 0
    },
    currentColor: {
      validator(value) {
        return isColor(value);
      },
      default: '#0DB78A'
    }
  },

  methods: {
    init() {
      this.canvas = this.$refs.canvas;
      this.drawingCtx = this.canvas.getContext('2d');
      this.canvasW = this.$refs.container.clientWidth + 'px';
      this.canvasH = this.$refs.container.clientHeight + 'px';
      this.addCanvasEvent();
    },

    // 绑定事件
    addCanvasEvent() {
      window.document.addEventListener('touchmove', this._preventWindowScroll, { passive: false });

      this.canvas.addEventListener('touchstart', this._eventTouchStart, false);
      this.canvas.addEventListener('touchmove', this._eventTouchMove, { passive: false });
      this.canvas.addEventListener('touchend', this._eventTouchEnd, false);
    },

    // 移除事件
    removeCanvasEvent() {
      this.canvas.removeEventListener('touchstart', this._eventTouchStart);
      this.canvas.removeEventListener('touchmove', this._eventTouchMove);
      this.canvas.removeEventListener('touchend', this._eventTouchEnd);

      window.document.removeEventListener('touchmove', this._preventWindowScroll);
    },

    _preventWindowScroll(event) {
      // 特别说明，在浏览器里面（包括微信），滑动事件会严重干扰手写过程，所以通过这个方法，把默认的滑动行为关闭
      event.preventDefault();
    },

    _eventTouchStart(event) {
      const currentX = event.touches ? event.touches[0].clientX : event.clientX;
      const currentY = event.touches ? event.touches[0].clientY : event.clientY;

      // 开始绘制
      const canvas = this.canvas;
      this.drawingCtx.lineWidth = this.strokeLineWidth;
      this.drawingCtx.beginPath();
      const { top, left } = canvas.getBoundingClientRect();
      this.drawingCtx.moveTo(currentX - left, currentY - top);
    },
    _eventTouchMove(event) {
      const currentY = event.touches ? event.touches[0].clientY : event.clientY;
      const currentX = event.touches ? event.touches[0].clientX : event.clientX;

      // 连线
      const canvas = this.canvas;
      const { top, left } = canvas.getBoundingClientRect();
      this.drawingCtx.lineTo(currentX - left, currentY - top);
      this.drawingCtx.stroke();
    },
    _eventTouchEnd(event) {
      // 结束
      this.drawingCtx.closePath();
    },
    // 获取canvas实例
    canvasInstance() {
      return this.canvas;
    },
    // 获取canvas上下文
    canvasContext() {
      return this.canvas.getContext('2d');
    },
    // 获取base64值
    imageBase64Data() {
      return this.canvas.toDataURL('image/png');
    },
    // 清空
    clear() {
      const canvas = this.canvas;
      const { width, height } = canvas.getBoundingClientRect();
      this.drawingCtx.clearRect(0, 0, width, height);
    }
  },
  mounted() {
    this.$nextTick(this.init);
  },
  beforeDestroy() {
    this.removeCanvasEvent();
    this.canvas = null;
    this.drawingCtx = null;
  },
  watch: {
    // current() {
    //     this.$nextTick(() => {
    //         this.updateChildStatus(true);
    //     });
    // }
  }
};
</script>

<style lang="less">
@import '../../../styles/components/canvasboard.less';
</style>
