<template lang="pug">
  .privateman-info-wrapper
    home-modal(:isHomeModalVisible="isHomeModalVisible" @close="isHomeModalVisible=false")
      ul.home-modal-slot
        li
          i.iconfont &#xe710;
            span 已注销
          p 该公司于 2019-07-26 主动注销
    .privateman-top-wrapper
      i.iconfont &#xe68f;
        span 更新时间： 2019-07-26
    .privateman-main-wrapper
      .privateman-main-notice
        .privateman-main-notice-item
          i.iconfont &#xe710;
          div
            h4 异常机构
            p 未按要求进行产品更新或重大事项更新累计2次asdad
          i.iconfont &#xe61a;
        .privateman-main-notice-item
          i.iconfont &#xe710;
          div
            h4 其他诚信信息
            p 未按要求进行产品更新或重大事项更新累计2次及以...
          i.iconfont &#xe61a;
        .privateman-main-notice-item
          i.iconfont &#xe710;
          div
            h4 特别提示
            p 实缴资本低于100万或实缴资本低于25%
          i.iconfont &#xe61a;
      .privateman-main-part
        .privateman-main-part-title
          i.iconfont &#xe690;
            h3 机构信息
        .privateman-main-part-first
          p 基金管理人
          h4 华设资产管理（上海）有限公司
          el-divider
        .privateman-main-part-second
          ul.clearfix
            li
              p 登记编号
              p P1009585
            li
              p 组织机构代码
              p 07811798-9
            li
              p 登记时间
              p 2015-03-25
            li
              p 成立时间
              p 2013-09-08
          el-divider(style="margin-top:20px;")
        .privateman-main-part-three
          div
            p 注册地址
            p 上海市崇明区黄埔区北沿公路3栋
          div
            p 办公地址
            p 上海市崇明区黄埔区北沿公路3栋
          div
            p 机构网址
            p https://www.hwasbank.com
          el-divider(style="margin-top:20px;")
        .privateman-main-part-four
          div.flex-b
            span 注册资本(万元)(人民币)
            span 1,255.65
          div.flex-b
            span 实缴资本(万元)(人民币)
            span 1,068.33
          div.flex-b
            span 注册资本实缴比例
            span 88%
          el-divider(style="margin-top:20px;")
        .privateman-main-part-four
          div.flex-b
            span 企业性质
            span 内资企业
          div.flex-b
            span 机构类型
            span 其他私募投资基金管理人
          div.flex-b
            span 全职员工人数
            span 24
          div.flex-b
            span 取得基金从业人数
            span 19
        .privateman-main-part-title
          i.iconfont &#xe690;
            h3 会员信息
        .privateman-main-part-four
          div.flex-b
            span 是否为会员_中国证券投资基金协会
            span 是
          div.flex-b
            span 当前会员类型
            span 观察会员
          div.flex-b
            span 入会时间
            span 2015-08-25
        .privateman-main-part-title
          i.iconfont &#xe690;
            h3 法律意见书信息
        .privateman-main-part-four
          div.flex-b
            span 法律意见书状态
            span 是
        .privateman-main-part-title
          i.iconfont &#xe690;
            h3 高管信息
        ul.privateman-main-part-five
          li
            .left.flex-c
              img(src="https://i.loli.net/2017/08/21/599a521472424.jpg")
            .right
              h3 哈哈
              p
                span 法定代表人
                span 董事长
                span 信息填报负责人
              p
                span 具有基金从业资格（通过考试）
        .privateman-main-part-title
          i.iconfont &#xe690;
            h3 产品信息
        .privateman-main-part-six
          p 暂行办法实施前成立的基金
            span 0
          p 暂行办法实施后成立的基金
            span 35
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
.privateman-info-wrapper {
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
	.privateman-top-wrapper {
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
	.privateman-main-wrapper {
		background: rgba(248, 248, 248, 1);
		padding-bottom: 100px;
		.privateman-main-notice {
			.privateman-main-notice-item {
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
		.privateman-main-part {
			padding: 0 36px;
			.privateman-main-part-title {
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
			.privateman-main-part-first {
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
			.privateman-main-part-second {
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
			.privateman-main-part-three {
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
					}
				}
			}
			.privateman-main-part-four {
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
			.privateman-main-part-five {
				li {
					display: flex;
					justify-content: flex-start;
					padding-left: 30px;
					.left {
						height: 180px;
						img {
							width: 130px;
							height: 130px;
							border-radius: 50%;
						}
					}
					.right {
						margin: 30px 0 0 20px;
						width: 100%;
						position: relative;
						h3 {
							font-size: 32px;
							line-height: 44px;
							color: #333;
							font-weight: bold;
						}
						p:nth-of-type(1) {
							font-size: 24px;
							line-height: 48px;
							span {
								margin-right: 22px;
								color: #999999;
							}
						}
						p:nth-of-type(2) {
							margin-top: 6px;
							color: #999999;
						}
					}
				}
			}
			.privateman-main-part-six {
				padding-left: 36px;
				p {
					margin-top: 32px;
					padding: 18px 50px 18px 40px;
					font-size: 30px;
					line-height: 50px;
					background: #f8f8f8;
					border-radius: 20px;
					box-shadow: 0px 1px 12px rgba(153, 153, 153, 0.16);
					color: #999;
					span {
						float: right;
						color: #333;
						font-weight: bold;
					}
				}
			}
		}
	}
}
</style>
