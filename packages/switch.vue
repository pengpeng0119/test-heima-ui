<template>
  <div class="hm-switch" @click="handleClick" :class="{ 'is-checked': value }">
    <span class="hm-switch_core" ref="core">
      <span class="hm-switch_button"></span>
    </span>
    <input type="checkbox" class="hm-switch_input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    name: {
      tyoe: String,
      default: '',
    },
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      // 等待value发生改变，再调用函数
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
  },
  mounted() {
    this.setColor()
    this.$refs.input.checked = this.value
  },
}
</script>

<style lang="scss" scoped>
.hm-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .hm-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hm-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .hm-switch_core {
    border-color: #409eff;
    background-color: hsl(210, 100%, 63%);
    .hm-switch_button {
      // 圆球移动20
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.hm-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
