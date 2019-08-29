<template lang="pug">
  ul.equity-disposal-wrapper
    li
      .equity-disposal-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
      dl.equity-disposal-info
        dt  出质人：
        dd （2018）沪0015民初45468号
        dt  质权人：
        dd  上海联伟信息技术有限公司
        dt  出质股权数额：
        dd  华设资产管理（上海）有限公司
        dt  股权出质设立登记日期：
        dd  华设资产管理（上海）有限公司
        dt  状态：
        dd  华设资产管理（上海）有限公司
      .equity-disposal-divider
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
.equity-disposal-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.equity-disposal-title {
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
		.equity-disposal-info {
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
		.equity-disposal-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
