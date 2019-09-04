<template lang="pug">
  .clear-information-wrapper
    ul.clear-information-info
      li(v-for="(item,index) in list" :key="item.id")
        h4 清算组负责人
        .flex-s
          img(src="https://i.loli.net/2017/08/21/599a521472424.jpg")
          span {{item.personInCharge}}
        h4 清算组成员
        .flex-s
          img(src="https://i.loli.net/2017/08/21/599a521472424.jpg")
          span {{item.members}}
</template>

<script>
export default {
  name: 'clear-information',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'clearing')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.clear-information-wrapper {
	padding-top: 8px;
	background: #ffffff;
	.clear-information-info {
		padding: 40px 20px 0 38px;
		h4 {
			font-size: 26px;
			line-height: 56px;
			font-weight: 500;
			color: #333;
		}
		div {
			padding: 26px 0;
			img {
				width: 62px;
				height: 62px;
				border-radius: 50%;
			}
			span {
				margin-left: 16px;
				font-size: 24px;
				line-height: 32px;
				font-weight: bold;
				color: #333;
			}
		}
	}
	.clear-information-divider {
		width: 110%;
		overflow: hidden;
		height: 1px;
		background: #f8f8f8;
	}
}
</style>
