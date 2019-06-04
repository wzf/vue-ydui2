<template>
  <div>
    <yd-mask v-model="show"
             @click.native="close"
             :opacity="maskerOpacity"></yd-mask>
    <div class="yd-picker"
         :class="show ? 'yd-picker-active' : ''">
      <div class="yd-picker-head">
        <a href="javascript:;"
           @click.stop="close">{{cancelText}}</a>
        <a href="javascript:;"
           @click.stop="setValue">{{confirmText}}</a>
      </div>
      <div class="yd-picker-content">
        <div class="yd-picker-item">
          <div class="yd-picker-item-box"
               ref="component">
            <div class="yd-picker-item-content"
                 ref="content">
              <span v-for="(item, key) in options"
                    :data-value="item.value"
                    v-html="item.name"
                    :key="key"></span>
            </div>
          </div>
        </div>
        <div class="yd-picker-shade"></div>
        <div class="yd-picker-indicator"><span></span></div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { isIOS, pageScroll } from '../../../utils/assist';
import Mask from '../../mask/src/mask.vue';
import Scroller from '../../scroller/scroller.js';

export default {
  name: 'yd-picker',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    default: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    show: false
  },
  data() {
    return {
      itemHeight: 38,
      value: '',
      scroller: null,
      current: '',
      scrolling: false,
      readonly: false,
      maskerOpacity: 0.5
    };
  },
  components: {
    'yd-mask': Mask
  },
  watch: {
    show: function(value) {
      if (value && this.scroller) {
        // 2019-06-04 [bug修复] 属性options改变时，需要重新组织scroller，不然会因为数据不一致，而造成无法滑动
        this.render();
        this.scroller.select(this.default, false);
      }
    }
  },
  methods: {
    init() {},
    render() {
      const _this = this;
      const component = this.$refs.component;
      const content = this.$refs.content;
      _this.scroller = new Scroller(component, content, {
        itemHeight: _this.itemHeight,
        onSelect(value) {
          _this.current = value;
          _this.scrolling = false;
          const index = _this.optionIndex(value);
          _this.$emit('onChange', { index, value });
        },
        callback(top, isDragging) {
          if (isDragging) {
            _this.scrolling = true;
          }
          content.style.webkitTransform = 'translate3d(0, ' + -top + 'px, 0)';
        }
      });

      const len = _this.options.length;
      _this.scroller.setDimensions(7 * _this.itemHeight, len * _this.itemHeight, len);
      _this.scroller.select(_this.default, false);
      _this.scrolling = false;
    },
    setValue() {
      let value = this.current;
      const index = this.optionIndex(value);
      this.$emit('onConfirm', { index, value });
    },
    inDatas(items, key) {
      let b = false;
      items.forEach(item => {
        if (item.value == key) b = true;
      });
      return b;
    },
    optionIndex(value) {
      const index = this.options.findIndex(i => i.value == value);
      return index;
    },
    open() {
      if (this.readonly) return;
      this.show = true;
      isIOS && pageScroll.lock();
    },
    close() {
      const value = this.default;
      const index = this.optionIndex(this.default);
      this.$emit('onCancel', { index, value });
      isIOS && pageScroll.unlock();
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(this.render);
  },
  beforeDestroy() {
    isIOS && pageScroll.unlock();
    this.scroller = null;
  }
};
</script>

<style lang="less">
@import '../../../styles/components/picker.less';
</style>
