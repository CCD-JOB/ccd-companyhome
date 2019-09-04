<template lang="pug">
.historical-wrapper
  .historical-top
    .historical-title.flex-b
      div
        span 变更记录 45
      i.iconfont(@click="isProductDrawerVisible = true") &#xe62d;
  ul.historical-main
    li
      .historical-main-title
        .flex-b
          .flex-s
            em 01
            h3 投资人(股权)变更
          span 2019-06-08
      .historical-main-info
        .historical-main-info-item
          h5 变更前
          p 上海华夏有新科技创业投资管理合伙企业（有限合伙）；
          p 上海尤以德商务咨询合伙企业（有限合伙）；
        .historical-main-info-item
          h5 变更后
          p 上海华夏有新科技创业投资管理合伙企业（有限合伙）；
          p 天津夏划无限科技创业投资管理合伙企业（有限合伙）；
    li
      .historical-main-title
        .flex-b
          .flex-s
            em 02
            h3 章程备案
          span 2019-06-08
      .historical-main-info
        .historical-main-info-item
          h5 变更前
          p 无
        .historical-main-info-item
          h5 变更后
          p 2019-02-15章程备案
    li
      .historical-main-title
        .flex-b
          .flex-s
            em 03
            h3 监事备案
          span 2019-06-08
      .historical-main-info
        .historical-main-info-item
          h5 变更前
          p 无
        .historical-main-info-item
          h5 变更后
          p 2019-02-15章程备案
  product-drawer(:isProductDrawerVisible="isProductDrawerVisible" @close="isProductDrawerVisible=false" :drawerTitle='drawerTitle')
    ul.historical-drawer-list
      li(v-for="(item,index) in list" :key="item.id" :class="{active: currentSelect=== index}" @click="currentSelect = index") {{item.name}}
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
      drawerTitle: '选择变更项目',
      currentSelect: 0,
      list: [
        { id: 0, name: '全部' },
        { id: 1, name: '高级管理人员备案' },
        { id: 2, name: '股东、发起人变更' },
        { id: 3, name: '章程备案' },
        { id: 4, name: '法定代表人、负责人变更' },
        { id: 5, name: '经营范围变更' },
        { id: 6, name: '注册资本变更' },
        { id: 7, name: '住所变更' },
        { id: 8, name: '公司类型变更' },
        { id: 9, name: '联系方式变更' }
      ]
    }
  },
  methods: {
    handleShowFilter () {}
  }
}
</script>

<style lang="scss">
.historical-drawer-list {
	text-align: center;
	padding: 10px 0 50px;
	li {
		font-size: 30px;
		line-height: 50px;
		padding: 20px 0;
		color: #666666;
		width: 600px;
		margin: 0 auto;
		&.active {
			background: #1253fc;
			color: #fff;
			border-radius: 8px;
		}
	}
}
.historical-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	.historical-top {
		position: relative;
		z-index: 1;
		background: #fff;
		.historical-title {
			padding-top: 20px;
			div {
				margin-left: 14px;
				span {
					font-size: 42px;
					line-height: 56px;
					font-weight: bold;
					padding: 0 8px;
					margin: 0 20px;
					position: relative;
					color: #000000;
					&.active {
						&:after {
							position: absolute;
							top: 100%;
							left: 0;
							content: '';
							width: 100%;
							height: 10px;
							background: #fcd116;
							margin-top: -10px;
							z-index: -1;
						}
					}
				}
			}
			i {
				font-size: 62px;
				color: #1253fc;
				margin-right: 20px;
			}
		}
	}
	.historical-main {
		padding: 0 36px;
		li {
			position: relative;
			.historical-main-title {
				padding: 35px 20px 35px 0;
				em {
					font-size: 36px;
					font-weight: bold;
					line-height: 54px;
					color: #999999;
				}
				h3 {
					font-size: 30px;
					color: #222;
					font-weight: bold;
					padding-left: 14px;
				}
				span {
					font-size: 30px;
					color: #999;
				}
			}
			.historical-main-info {
				padding: 27px 0 60px;
				background: #f8f8f8;
				display: flex;
				justify-content: space-between;
				.historical-main-info-item {
					padding: 0 24px;
					border-right: 1px solid #eee;
					h5 {
						font-size: 24px;
						line-height: 50px;
						color: #999;
						padding-bottom: 20px;
					}
					p {
						font-size: 28px;
						line-height: 40px;
						color: #6179af;
						padding-top: 20px;
					}
					&:nth-of-type(2) {
						border-right: none;
						padding-right: 34px;
					}
				}
			}
		}
	}
}
</style>
