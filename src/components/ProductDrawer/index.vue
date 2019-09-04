<template lang="pug">
  el-drawer.product-drawer(:title="drawerTitle"
  :visible.sync="isProductDrawerVisible"
  :direction="direction"
  :before-close="closeDrawer")
    slot
</template>

<script>
export default {
  props: {
    isProductDrawerVisible: Boolean,
    drawerTitle: String
  },
  data () {
    return {
      direction: 'btt'
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.product-drawer {
	.el-drawer__header {
		span {
			text-align: center;
			font-size: 36px;
			line-height: 56px;
			font-weight: bold;
			color: #333;
		}
		i {
			font-size: 40px;
			font-weight: bold;
			color: #333;
		}
	}
	.el-drawer {
		height: auto !important;
	}
}
</style>
