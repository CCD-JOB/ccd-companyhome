<template lang="pug">
  el-dialog.home-modal.flex-c(
  :visible.sync="isHomeModalVisible"
  width="80%"
  :before-close="close"
  :show-close="false"
   )
    slot
</template>

<script>
export default {
  props: {
    isHomeModalVisible: Boolean
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.home-modal {
	.el-dialog {
		border-radius: 30px;
		margin-top: 0 !important;
		.el-dialog__header {
			padding: 0;
		}
	}
}
</style>
