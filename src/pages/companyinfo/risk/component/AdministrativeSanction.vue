<template lang="pug">
  ul.administrative-sanction-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .administrative-sanction-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
          i.iconfont &#xe64d;
      dl.administrative-sanction-info
        dt  决定书文号：
        dd  {{item.documentNumber}}
        dt  处罚事由：
        dd  {{item.penaltyReason}}
        dt  决定机关：
        dd  {{item.decisionOrgan}}
        dt  处罚决定日期：
        dd  {{item.penaltyDecisionDate}}
      .administrative-sanction-divider
</template>

<script>
export default {
  name: 'administrative-sanction',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'punish')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.administrative-sanction-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.administrative-sanction-title {
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
		.administrative-sanction-info {
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
		.administrative-sanction-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
