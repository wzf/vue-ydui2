import Vue from 'vue';
import { pageScroll } from '../../../../utils/assist';

const ToastConstructor = Vue.extend(require('./toast.vue'));

const instance = new ToastConstructor({
  el: document.createElement('div')
});

ToastConstructor.prototype.closeToast = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  pageScroll.unlock();

  typeof this.callback === 'function' && this.callback();
};

let timer;

// 点击隐藏
instance.clickIconClose = () => {
  clearTimeout(timer);
  instance.closeToast();
};

const Toast = (options = {}) => {
  instance.mes = options.mes;
  instance.icon = options.icon;
  instance.timeout = ~~options.timeout || 2000;
  instance.callback = options.callback;

  document.body.appendChild(instance.$el);

  pageScroll.lock();

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  timer = setTimeout(() => {
    instance.closeToast();
  }, instance.timeout + 100);
};

export default Toast;
