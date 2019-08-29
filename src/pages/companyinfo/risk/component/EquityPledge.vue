<template lang="pug">
  ul.equity-pledge-wrapper
    li
      .equity-pledge-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
      dl.equity-pledge-info
        .flex-b
          div
            dt  股票代码：
            dd(style="width:217px;") 0.00
          div
            dt  股票简称：
            dd(style="width:217px;")  0.00
        .flex-b
          div
            dt  质押比例：
            dd(style="width:217px;") 0.00
          div
            dt  质押投股(股)：
            dd(style="width:217px;")  0.00
        .flex-b
          div
            dt  质押市值：
            dd(style="width:217px;") 0.00
          div
            dt  质押笔数：
            dd(style="width:217px;")  0.00
        dt  无限售股质押数(股)：
        dd  0.00
        dt  限售股质押数(股)：
        dd  0.00
        .flex-b
          div
            dt  限售股质押数(股)：
            dd(style="width:217px;") 0.00
          div
            dt  限售股质押数(股)：
            dd(style="width:217px;")  0.00
        dt  交易日期：
        dd  0.00
        dt  数据来源：
        dd  0.00
      .equity-pledge-divider
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
.equity-pledge-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.equity-pledge-title {
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
		.equity-pledge-info {
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
		.equity-pledge-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
