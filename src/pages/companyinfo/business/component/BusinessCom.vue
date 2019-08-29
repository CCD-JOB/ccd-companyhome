<template lang="pug">
  .business-component-wrapper
    .business-component-main-wrapper
      .business-component-main-part
        div
          span 法定代表人
          span 刘华设
        div
          span 注册资本
          span 1255.6万元人民币
        div
          span 成立日期
          span 2006/08/23
        div
          span 企业状态
          span 在营
      .divider
      .business-component-main-part
        div
          span 统一社会信用代码
          span 91310230087117989Q
        div
          span 工商注册号
          span 078119798-9
        div
          span 组织机构代码
          span 310230000608845
      .divider
      .business-component-main-part
        div
          span 公司类型
          span 其他责任有限公司
        div
          span 所属行业
          span 商务服务业
        div
          span 登记机关
          span 崇明区市场监督局
        div
          span 核准日期
          span 2013/09/07
      .divider
      .business-component-main-part.business-component-main-part2
        .business-component-main-specical
          p 公司地址
          div
            span 上海市崇明区北沿公路2099号2栋（上海崇明森林旅游园区）
            i.iconfont &#xe638;
        div
          p 营业期限
          p 2013/09/07 至 2033/09/06
        .business-component-main-specical2
          p 经营范围
          p 基金管理人将基金财产投资于：1、金融投资产品：信托计划、基金公司及基金字公司资产管理计划...

</template>
<script>
export default {}
</script>

<style lang="scss">
.business-component-wrapper {
	.business-component-main-wrapper {
		background: rgba(248, 248, 248, 1);
		.divider {
			height: 20px;
			background: rgba(241, 241, 241, 1);
		}
		.business-component-main-part {
			padding: 40px 36px;
			div {
				p,
				span {
					font-size: 28px;
					line-height: 48px;
					color: #666666;
					font-weight: 500;
					display: inline-block;
					&:nth-of-type(1) {
						width: 300px;
					}
					&:nth-of-type(2) {
						font-weight: bold;
					}
				}
			}
		}
		.business-component-main-part2 {
			div {
				margin-top: 40px;
				&.business-component-main-specical {
					div {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
					p {
						display: block;
					}
					span {
						width: 500px;
						display: inline-block;
						font-weight: bold;
					}
					i {
						font-size: 37px;
						color: #1253fc;
						margin-left: 28px;
					}
				}
				&.business-component-main-specical2 {
					p {
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
}
</style>
