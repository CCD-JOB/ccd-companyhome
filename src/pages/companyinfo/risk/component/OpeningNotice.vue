<template lang="pug">
  ul.opening-notice-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .opening-notice-title.flex-b
        .flex-s
          em {{String(index+1).padStart(2, '0')}}
          span {{item.caseOfAction}}
      dl.opening-notice-info
        dt  案号:
        dd  {{item.caseNumber}}
        dt  原告/上诉人：
        dd  {{item.plaintiff}}
        dt  被告/被上诉人：
        dd  {{item.accused}}
        dt  开庭时间：
        dd  {{item.courtDate.split(' ')[0]}}
      .opening-notice-divider
</template>

<script>
export default {
  name: 'opening-notice',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'announcement')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.opening-notice-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.opening-notice-title {
			padding: 36px 20px 0 38px;
			em {
				font-size: 36px;
				font-weight: bold;
				line-height: 54px;
				color: #999999;
			}
			span {
				font-size: 30px;
				font-weight: bold;
				line-height: 56px;
				color: #222;
				margin-left: 14px;
			}
			i {
				font-size: 30px;
				font-weight: bold;
			}
		}
		.opening-notice-info {
			padding: 0 20px 60px 38px;
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
		.opening-notice-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
