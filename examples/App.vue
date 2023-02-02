<template>
  <div id="app">
    <hm-button type="primary">确定</hm-button>
    <div class="row">
      <hm-button icon="bluetoothon"></hm-button>
      <hm-button type="primary" icon="camera">照相机</hm-button>
      <hm-button type="success" icon="course"></hm-button>
      <hm-button type="info" icon="bluetooth_link"></hm-button>
      <hm-button type="danger" icon="addto"></hm-button>
      <hm-button type="warning" icon="audio"></hm-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .hm-button {
    margin-right: 20px;
  }
}
</style>
