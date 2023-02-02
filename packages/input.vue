<template>
  <div class="hm-input" :class="{ 'hm-input_suffix': showSuffix }">
    <input
      class="hm-input_inner"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      :class="{
        'is-disabled': disabled,
      }"
    />
    <span class="hm-input_suffix" v-if="showSuffix">
      <!-- 清空按钮 -->
      <i
        class="on-input_icon hm-icon-cancel"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <!-- 小眼睛图标 -->
      <i
        class="on-input_icon hm-icon-video"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
        :class="[passwordVisiable ? 'active' : '']"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmInput',
  data() {
    return {
      passwordVisiable: false,
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisiable = !this.passwordVisiable
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    },
  },
}
</script>

<style lang="scss" scoped>
.hm-input {
  width: 50%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.hm-input_suffix {
  .hm-input_inner {
    padding-right: 30px;
  }
  .hm-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    & .active {
      color: rgb(82, 18, 245);
    }
  }
}
</style>
