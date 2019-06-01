<template>
  <yd-layout title="Picker">

    <div style="height:1rem;line-height:1rem;text-align:center;font-size:0.34rem;">{{cityName}}</div>
    <yd-picker :options="options"
               :show="show"
               @onChange="_onCityPicked"
               @onConfirm="_onCityPickFinish"
               @onCancel="_onCityPickCancel"
               :default="city"></yd-picker>

    <yd-button size="large"
               @click.native="show=true">选择一个城市</yd-button>

    <p style="color:red;font-size:.3rem;font-weight:bold;margin-top:.4rem">picker只是提供“选项”及“选择功能”，具体要显示的值，自行通过html标签进行展示</p>

  </yd-layout>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      show: false,
      options: [
        { value: 'beijing', name: '北京' },
        { value: 'shanghai', name: '上海' },
        { value: 'guangzhou', name: '广州' },
        { value: 'shenzhen', name: '深圳' },
        { value: 'hangzhou', name: '杭州' },
        { value: 'xiongan', name: '雄安' },
        { value: 'suzhou', name: '苏州' },
        { value: 'jinan', name: '济南' },
        { value: 'shouguang', name: '寿光' },
        { value: 'xian', name: '西安' }
      ],
      city: '',
      cityName: ''
    };
  },
  mounted() {
    this._doLoadData();
  },
  methods: {
    _doLoadData() {
      // 假设这里有api请求
      setTimeout(() => {
        this.city = 'shouguang';
        const index = this.options.findIndex(i => i.value == this.city);
        this.cityName = this.options[index].name;
      }, 1000);
    },
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
};
</script>
