<template lang="pug">
  ul.tax-arrears-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .tax-arrears-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
      dl.tax-arrears-info
        dt  欠税税种：
        dd {{item.taxArrears}}
        dt  欠税余额：
        dd  {{item.taxBalance}}
        dt  当前新发生的欠税余额：
        dd  {{item.newTaxBalance}}
        dt  发布日期：
        dd  {{item.publicationDate}}
      .tax-arrears-divider
</template>

<script>
export default {
  name: 'tax-arrears',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'towntax')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.tax-arrears-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.tax-arrears-title {
			padding: 36px 20px 0 38px;
			em {
				font-size: 36px;
				font-weight: bold;
				line-height: 54px;
				color: #999999;
			}
			i {
				font-size: 30px;
				font-weight: bold;
			}
		}
		.tax-arrears-info {
			padding: 10px 20px 60px 38px;
			dt {
				font-size: 26px;
				line-height: 56px;
				font-weight: 500;
				color: #333;
			}
			dd {
				font-size: 24px;
				line-height: 56px;
				font-weight: 500;
				padding: 0 22px;
				width: 462px;
				box-sizing: border-box;
				background: #f8f8f8;
				color: #999999;
			}
		}
		.tax-arrears-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
