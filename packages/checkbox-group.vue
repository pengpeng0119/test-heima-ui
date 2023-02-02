<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'HmCheckboxGroup',
  provide() {
    return {
      CheckboxGroup: this,
    }
  },
  props: {
    value: {
      type: Array,
    },
  },
}
</script>
