<template lang="pug">
  el-drawer.home-drawer(
  :visible.sync="isHomeDrawerVisible"
  size="100%"
  :before-close="closeDrawer")

    slot
</template>

<script>
export default {
  props: {
    isHomeDrawerVisible: Boolean
  },
  methods: {
    closeDrawer () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.home-drawer.el-dialog__wrapper {
	.el-drawer__header {
		.el-drawer__close-btn {
			i {
				font-size: 50px;
			}
		}
	}
}
</style>
