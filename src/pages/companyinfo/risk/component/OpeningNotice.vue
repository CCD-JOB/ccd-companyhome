<template lang="pug">
  ul.opening-notice-wrapper
    li
      .opening-notice-title.flex-b
        .flex-s
          em 01
          span 合同协议纠纷
        i.iconfont &#xe64d;
      dl.opening-notice-info
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  原告/上诉人：
        dd  上海联伟信息技术有限公司
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  被告/被上诉人：
        dd  华设资产管理（上海）有限公司
        dt  开庭时间：
        dd  2018-08-16  08:39
      .opening-notice-divider
    li
      .opening-notice-title.flex-b
        .flex-s
          em 01
          span 合同协议纠纷
        i.iconfont &#xe64d;
      dl.opening-notice-info
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  原告/上诉人：
        dd  上海联伟信息技术有限公司
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  被告/被上诉人：
        dd  华设资产管理（上海）有限公司
        dt  开庭时间：
        dd  2018-08-16  08:39
      .opening-notice-divider
    li
      .opening-notice-title.flex-b
        .flex-s
          em 01
          span 合同协议纠纷
        i.iconfont &#xe64d;
      dl.opening-notice-info
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  原告/上诉人：
        dd  上海联伟信息技术有限公司
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  被告/被上诉人：
        dd  华设资产管理（上海）有限公司
        dt  开庭时间：
        dd  2018-08-16  08:39
      .opening-notice-divider
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
				padding-left: 22px;
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
