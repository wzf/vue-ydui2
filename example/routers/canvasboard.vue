<template>
  <yd-layout title="CanvasBoard(手写板)">

    <yd-canvasboard ref="canvasboard">

    </yd-canvasboard>

    <div class="preview"
         v-show="showPreview">

      <div style="height:1rem"></div>
      <canvas :width="screenW"
              :height="imageHeight"
              style="background-color:#ffffff;"
              ref="previewCanvas">
      </canvas>

      <div class="toolbar">
        <yd-button class="btn"
                   size="large"
                   bgcolor="#a0a0a0"
                   color="#ececec"
                   @click.native="_clickCancel">取消</yd-button>
        <yd-button class="btn"
                   size="large"
                   @click.native="_clickOK">确定</yd-button>
      </div>
    </div>

    <div class="fixed-button-view">
      <yd-button class="fixed-button"
                 type="warning"
                 @click.native="_clickClear">重置</yd-button>
      <div style="height:0.2rem"></div>
      <yd-button class="fixed-button"
                 @click.native="_clickGetImage">预览</yd-button>
    </div>
  </yd-layout>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      imageData: null,
      showPreview: false,
      imageHeight: 500
    };
  },

  mounted() {},
  computed: {
    screenW: () => document.body.clientWidth
  },
  methods: {
    _clickCancel() {
      this.showPreview = false;
      this.$refs.canvasboard.clear();
    },

    _clickOK() {
      const canvas = this.$refs.previewCanvas;
      const imageData = canvas.toDataURL('image/png');
      console.log('预览后的签名文件', imageData);

      this._clickCancel();
    },

    _clickClear() {
      this.$refs.canvasboard.clear();
    },

    // 点击获取图片
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
  }
};
</script>


<style scoped>
.fixed-button-view {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.fixed-button {
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  padding: 0;
}

.preview {
  position: fixed;
  top: 1rem;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(200, 200, 200, 0.8);
}

.preview .toolbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.toolbar .btn {
  /* flex: 1; */
  width: 45%;
}
</style>
