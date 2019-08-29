<template lang="pug">
  .private-placement-com-wrapper
    .private-placement-com-filter
      span 默认排序
      span 588
    el-collapse.private-placement-com-main(accordion)
      el-collapse-item
        template(slot="title")
          i.first.iconfont &#xe690;
          div
            span.title 外贸信托-乐瑞强债2号尊享E期集合资金信托计划
            p
              span 正常清算
              span 受托管理
              span 暂行办法实施前
        .collapse-content
          .title
            p 发行机构
            h5 中国对外贸易经济信托有限公司
          .main
            p
              span 产品编码
              span ZXD44Z2019060100294499
            p
              span 首次申请登记日期
              span 2019-08-08
            p
              span 存续期限（月）
              span 47.5
            p
              span 主要投向行业
              span 金融业
            p
              span 财产运用方式
              span 资产及其收益权（不附回购）
            p
              span 公示日期
              span 2019-08-13
    product-drawer(:isProductDrawerVisible="isProductDrawerVisible" @close="isProductDrawerVisible=false")
      .private-placement-com-drawer-slot
        .private-placement-com-drawer-main-part
          h4
            i.iconfont &#xe690;
            span 运作状态
          ul.private-placement-com-drawer-main-btns.clearfix
            li.active(v-for="item in drawerFilterBtnGroupOne" :key="item.id") {{item.name}}
        .private-placement-com-drawer-main-part(style="margin-top:66px;")
          h4
            i.iconfont &#xe690;
            span 管理类型
          ul.private-placement-com-drawer-main-btns.clearfix
            li.active(v-for="item in drawerFilterBtnGroupTwo" :key="item.id") {{item.name}}
        .private-placement-com-drawer-main-part(style="margin-top:66px;")
          h4
            i.iconfont &#xe690;
            span 备案阶段
          ul.private-placement-com-drawer-main-btns.special.clearfix
            li.active(v-for="item in drawerFilterBtnGroupThree" :key="item.id") {{item.name}}
        .private-placement-com-drawer-main-operatebtns
          el-button-group
            el-button.active 重置
            el-button 确认
</template>

<script>
import ProductDrawer from 'components/ProductDrawer'
export default {
  components: {
    ProductDrawer
  },
  data () {
    return {
      isProductDrawerVisible: false,
      drawerFilterBtnGroupOne: [
        {
          id: 0,
          name: '正在运作'
        },
        {
          id: 1,
          name: '延期运作'
        },
        {
          id: 2,
          name: '提前清算'
        },
        {
          id: 3,
          name: '正常清算'
        },
        {
          id: 4,
          name: '非正常清算'
        },
        {
          id: 5,
          name: '投顾协议终止'
        }
      ],
      drawerFilterBtnGroupTwo: [
        {
          id: 0,
          name: '受托管理'
        },
        {
          id: 1,
          name: '自我管理'
        },
        {
          id: 2,
          name: '顾问管理'
        }
      ],
      drawerFilterBtnGroupThree: [
        {
          id: 0,
          name: '暂行办法实施前'
        },
        {
          id: 1,
          name: '暂行办法实施后'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.private-placement-com-drawer-slot {
	padding-bottom: 70px;
	.private-placement-com-drawer-main-part {
		h4 {
			margin-left: 36px;
			i {
				font-size: 30px;
				color: #1253fc;
			}
			span {
				font-size: 34px;
				font-weight: bold;
				line-height: 50px;
				color: #333;
				margin-left: 12px;
			}
		}
		.private-placement-com-drawer-main-btns {
			margin: 21px 0 0 27px;
			li {
				width: 214px;
				height: 72px;
				line-height: 72px;
				font-size: 28px;
				line-height: 73px;
				text-align: center;
				background: #f8f8f8;
				float: left;
				margin: 9px;
				color: #666;
				&.active {
					background: #1253fc;
					color: #fff;
				}
			}
			&.special {
				li {
					width: 330px;
				}
			}
		}
	}
	.private-placement-com-drawer-main-operatebtns {
		text-align: center;
		margin-top: 110px;
		.el-button {
			font-size: 34px;
			line-height: 50px;
			color: #333;
			width: 340px;
			height: 98px;
			font-weight: 600;
			&.active {
				background: #1253fc;
				color: #fff;
			}
		}
	}
}
.private-placement-com-wrapper {
	background: #f8f8f8;
	.private-placement-com-filter {
		padding: 19px 36px;
		border-bottom: 1px solid #eee;
		span {
			font-size: 24px;
			line-height: 50px;
			font-weight: bold;
			color: #666;
			&:nth-of-type(2) {
				margin-left: 16px;
			}
		}
	}
	.private-placement-com-main {
		.el-collapse-item {
			padding: 44px 0;
			background: #f8f8f8;
			position: relative;
			.el-collapse-item__header {
				background: #f8f8f8;
				border-bottom: none;
				height: auto;
				i.first {
					margin-left: 36px;
					font-size: 40px;
					color: #b8b8b8;
				}
				div {
					margin-left: 20px;
					span.title {
						width: 560px;
						font-size: 32px;
						display: inline-block;
						line-height: 46px;
						font-weight: bold;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					p {
						span {
							font-size: 26px;
							line-height: 50px;
							color: #999;
							margin-right: 24px;
						}
					}
				}

				i.el-icon-arrow-right {
					font-size: 36px;
					color: #666;
					margin-right: 25px;
				}
				&:after {
					position: absolute;
					top: 100%;
					left: 96px;
					content: '';
					width: calc(100% - 96px);
					height: 1px;
					background: #eff2f7;
				}
			}
			.el-collapse-item__wrap {
				margin-top: 34px;
				border-bottom: none;
				background: #f8f8f8;
				padding: 0 36px;
				.collapse-content {
					background: #fff;
					padding: 44px 58px;
					box-shadow: 0px 4px 20px rgba(191, 191, 191, 0.08);
					border-radius: 58px;
					.title {
						p {
							font-size: 24px;
							line-height: 48px;
							font-weight: 500;
							color: #999;
						}
						h5 {
							font-size: 28px;
							line-height: 50px;
							font-weight: bold;
							color: #6179af;
						}
					}
					.main {
						margin-top: 44px;
						p {
							font-size: 24px;
							line-height: 50px;
							font-weight: 500;
							span:nth-child(odd) {
								width: 250px;
								display: inline-block;
								color: #999;
							}
							span:nth-child(even) {
								color: #666;
							}
						}
					}
				}
			}
		}
	}
}
</style>
