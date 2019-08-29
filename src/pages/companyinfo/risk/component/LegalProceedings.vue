<template lang="pug">
  ul.legal-proceedings-wrapper
    li
      .legal-proceedings-title
        .flex-b
          em 01
          i.iconfont &#xe64d;
        p 汉华易美（天津）图像技术有限公司与华夏希志尤以（上海）图像影技术有限公司保证合同纠纷其他执行裁定书
      dl.legal-proceedings-info
        dt  案号:
        dd （2018）沪0015民初45468号
        dt  案由：
        dd  上海联伟信息技术有限公司
        dt  发布日期：
        dd （2018）沪0015民初45468号
        dt  案件身份：
        dd.special
          p 原告：大时代汉华易美（天津）图像技术有限公司
          p 被告：大时代汉华易美（天津）图像技术有限公司

      .legal-proceedings-divider
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
.legal-proceedings-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.legal-proceedings-title {
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
		.legal-proceedings-info {
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
				&.special {
					padding: 10px 22px;
					p {
						font-size: 24px;
						line-height: 36px;
						&:nth-of-type(2) {
							margin-top: 10px;
						}
					}
				}
			}
		}
		.legal-proceedings-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
