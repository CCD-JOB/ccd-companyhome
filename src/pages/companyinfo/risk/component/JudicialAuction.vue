<template lang="pug">
  ul.judicial-auction-wrapper
    li
      .judicial-auction-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
        p 海南省高级人民法院关于海南省陵水县光坡镇香水湾B区国有土地使用权及地上建筑物（第二次拍卖）的公告（二次）
      dl.judicial-auction-info
        .flex-b
          div
            dt  评估价：
            dd(style="width:217px;") 0.00
          div
            dt  起拍价：
            dd(style="width:217px;")  0.00
        dt  公告时间：
        dd （2018）沪0015民初45468号
      .judicial-auction-divider
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
.judicial-auction-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.judicial-auction-title {
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
			p {
				font-size: 30px;
				font-weight: bold;
				line-height: 40px;
				color: #222;
			}
		}
		.judicial-auction-info {
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
				padding-left: 22px;
				width: 462px;
				box-sizing: border-box;
				background: #f8f8f8;
				color: #999999;
			}
		}
		.judicial-auction-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
