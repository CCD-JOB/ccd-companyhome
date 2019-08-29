<template lang="pug">
  .clear-information-wrapper
    dl.clear-information-info
      dt  清算组负责人
      dd.flex-s
        img(src="https://i.loli.net/2017/08/21/599a521472424.jpg")
        span 丁松良
      .clear-information-divider
    dl.clear-information-info
      dt  清算组成员
        dd.flex-s
          img(src="https://i.loli.net/2017/08/21/599a521472424.jpg")
          span 丁松良
</template>

<script>
export default {
  data () {
    return {}
  },
  destroyed () {
    this.$emit('destory')
  }
}
</script>

<style lang="scss">
.clear-information-wrapper {
	padding-top: 8px;
	background: #ffffff;
	.clear-information-info {
		padding: 40px 20px 0 38px;
		dt {
			font-size: 26px;
			line-height: 56px;
			font-weight: 500;
			color: #333;
		}
		dd {
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
