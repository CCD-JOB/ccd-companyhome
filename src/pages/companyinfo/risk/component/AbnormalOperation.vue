<template lang="pug">
  ul.abnormal-operation-wrapper
    li
      .abnormal-operation-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
      dl.abnormal-operation-info
        dt  列入经营异常名录原因：
        dd （2018）沪0015民初45468号
        dt  列入日期：
        dd  上海联伟信息技术有限公司
        dt  移出经营异常名录原因：
        dd  华设资产管理（上海）有限公司
        dt  做出决定机关：
        dd  华设资产管理（上海）有限公司
      .abnormal-operation-divider
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
.abnormal-operation-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.abnormal-operation-title {
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
		.abnormal-operation-info {
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
		.abnormal-operation-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
