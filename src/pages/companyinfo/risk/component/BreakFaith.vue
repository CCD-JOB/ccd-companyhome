<template lang="pug">
  ul.break-faith-wrapper
    li
      .break-faith-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
      dl.break-faith-info
        dt  案号：
        dd （2018）沪0015民初45468号
        dt  执行法院：
        dd  上海联伟信息技术有限公司
        dt  履行情况：
        dd （2018）沪0015民初45468号
        dt  立案日期：
        dd  华设资产管理（上海）有限公司
        dt  发布日期：
        dd  华设资产管理（上海）有限公司
      .break-faith-divider
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
.break-faith-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.break-faith-title {
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
		.break-faith-info {
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
		.break-faith-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
