<template lang="pug">
  ul.final-case-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .final-case-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
          i.iconfont &#xe64d;
      dl.final-case-info
        dt  执行法院：
        dd {{item.court}}
        dt  案号：
        dd  {{item.caseNumber}}
        dt  立案日期：
        dd  {{item.courtDate}}
      .final-case-divider
</template>

<script>
export default {
  name: 'final-case',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'endCase')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.final-case-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.final-case-title {
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
		.final-case-info {
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
		.final-case-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
