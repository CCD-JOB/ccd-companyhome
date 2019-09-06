<template lang="pug">
  ul.land-pledge-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .land-pledge-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
      dl.land-pledge-info
        dt  土地坐落：
        dd {{item.address}}
        dt  抵押土地用途：
        dd  {{item.purpose}}
        dt  抵押面积（公顷）：
        dd  {{item.area}}
        dt  起止时间：
        dd  {{item.startStopTime}}
      .land-pledge-divider
</template>

<script>
export default {
  name: 'land-pledge',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'landMortgages')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.land-pledge-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.land-pledge-title {
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
		.land-pledge-info {
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
		.land-pledge-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
