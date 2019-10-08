<template lang="pug">
  .filling-info-wrapper
    .filling-top-wrapper
      i.iconfont &#xe68f;
        span 更新时间： 2019-07-26
    .filling-main-wrapper
      .filling-main-part
        .filling-main-part-title
          i.iconfont &#xe690;
            h3 基本信息
        .filling-main-part-first
          p 基金名称
          h4 华设资产管理（上海）有限公司
          el-divider
        .filling-main-part-second
          ul.clearfix
            li
              p 基金编号
              p P1009585
            li
              p 备案时间
              p 07811798-9
            li
              p 成立时间
              p 2015-03-25
            li
              p 到期时间
              p 2013-09-08
          el-divider(style="margin-top:20px;")
        .filling-main-part-three
          div
            p 基金备案阶段
            p.spec 暂行办法实施后成立的基金
          div
            p 基金类型
            p.spec 证券公司及其子公司的资产管理计划
          el-divider(style="margin-top:20px;")
        .filling-main-part-three
          div
            p 管理人名称
            p 上海市崇明区黄埔区北沿公路3栋
          div
            p 管理类型
            p.spec 受托管理
          div
            p 托管人名称
            p 平安银行股份有限公司
          div
            p 直投子公司名称
            p.spec 海通开源投资有限公司
          el-divider(style="margin-top:20px;")
        .filling-main-part-four
          div.flex-b
            span 是否分级
            span 是
          div.flex-b
            span 投资类型
            span 商品及金融衍生品类
          div.flex-b
            span 组织形式
            span 有限合伙企业
          el-divider(style="margin-top:20px;")
        .filling-main-part-title
          i.iconfont &#xe690;
            h3 信息披露情况
        .filling-main-part-five
          table
            tr
              th
              th 应披露
              th 未披露
            tr
              td 当月季报
              td 0
              td 0
            tr
              td 季报
              td 0
              td 0
            tr
              td 半年报
              td 0
              td 0
            tr
              td 年报
              td 0
              td 0
</template>

<script>
import HomeModal from 'components/HomeModal'

export default {
  components: {
    HomeModal
  },
  data () {
    return {
      isHomeModalVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.filling-info-wrapper {
	.home-modal-slot {
		padding: 46px 48px;
		li {
			margin-top: 40px;
			&:nth-of-type(1) {
				margin-top: 0;
			}
			i {
				color: #f84e4d;
				font-size: 30px;
				span {
					font-size: 32px;
					line-height: 56px;
					font-weight: bold;
					margin-left: 8px;
					color: #333;
				}
			}
			p {
				font-size: 28px;
				line-height: 40px;
				color: #666666;
			}
		}
	}
	.filling-top-wrapper {
		text-align: center;
		padding: 20px 0;
		i {
			font-size: 30px;
			line-height: 56px;
			color: #1253fc;
			span {
				font-size: 28px;
				line-height: 56px;
				color: #333;
				font-weight: bold;
				margin-left: 10px;
			}
		}
	}
	.filling-main-wrapper {
		background: rgba(248, 248, 248, 1);
		padding-bottom: 100px;
		.filling-main-notice {
			.filling-main-notice-item {
				position: relative;
				display: flex;
				justify-content: flex-start;
				padding: 30px 36px 20px 36px;
				background: rgba(241, 122, 31, 0.08);
				i {
					color: #f84e4d;
					font-size: 30px;
					margin-top: 7px;
					&:nth-of-type(2) {
						margin-top: 26px;
						margin-left: 40px;
						color: #999999;
						font-size: 26px;
					}
				}
				div {
					margin-left: 12px;
					h4 {
						font-size: 28px;
						line-height: 56px;
						font-weight: bold;
						color: #333;
					}
					p {
						font-size: 24px;
						line-height: 34px;
						font-weight: 500;
						display: inline-block;
						width: 550px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						word-break: break-all;
						color: #666;
					}
				}
				&:after {
					position: absolute;
					top: 100%;
					left: 72px;
					content: '';
					width: calc(100% - 72px);
					height: 1px;
					background: #e5e5e5;
				}
			}
		}
		.filling-main-part {
			padding: 0 36px;
			.filling-main-part-title {
				padding-top: 72px;
				i {
					font-size: 30px;
					color: #1253fc;
				}
				h3 {
					font-size: 38px;
					line-height: 48px;
					font-weight: 800;
					color: #333;
					display: inline-block;
					margin-left: 10px;
				}
			}
			.filling-main-part-first {
				padding-left: 36px;
				margin-top: 32px;
				p {
					font-size: 28px;
					line-height: 48px;
					color: #999;
				}
				h4 {
					font-size: 34px;
					line-height: 48px;
					color: #6179af;
					font-weight: bold;
				}
			}
			.filling-main-part-second {
				padding-left: 36px;
				li {
					float: left;
					width: 50%;
				}
				p {
					font-size: 28px;
					font-weight: 500;
					line-height: 48px;
					&:nth-child(odd) {
						color: #999999;
					}
					&:nth-child(even) {
						color: #666666;
						font-weight: bold;
					}
				}
			}
			.filling-main-part-three {
				padding-left: 36px;
				div {
					margin-top: 40px;
					p {
						font-size: 28px;
						line-height: 48px;
						color: #999;
						&:nth-child(even) {
							color: #6179af;
							font-weight: bold;
						}
						&.spec {
							color: #666;
						}
					}
				}
			}
			.filling-main-part-four {
				padding-left: 36px;
				div {
					margin-top: 24px;
					span {
						font-size: 28px;
						line-height: 48px;
						color: #999;
						font-weight: 500;
						&:nth-child(even) {
							font-weight: bold;
							color: #666666;
						}
					}
				}
			}
			.filling-main-part-five {
				table {
					margin-top: 48px;
					th,
					td {
						font-size: 30px;
						font-weight: 500;
						line-height: 50px;
						color: #999;
						padding: 10px 49px;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
