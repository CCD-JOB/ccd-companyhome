<template lang="pug">
.trust-com-wrapper
  el-collapse.trust-com-main(accordion)
    el-collapse-item(v-for="item in list" :key="item.id")
      template(slot="title")
        i.first.iconfont &#xe690;
        div
          span.title {{item.fullName}}
          p
            span {{item.trustFunction | trustFunctionFilter}}
            span {{item.inverstIndustry | inverstIndustryFilter}}
            span {{item.propertyRightDesc | propertyRightDescFilter}}
      .collapse-content
        .title
          p 发行机构
          h5 {{item.trusteeship}}
        .main
          p
            span 产品编码
            span {{item.productCode }}
          p
            span 首次申请登记日期
            span {{item.firstApplicationRegistion}}
          p
            span 存续期限（月）
            span {{item.recordTime}}
          p
            span 主要投向行业
            span {{item.inverstIndustry}}
          p
            span 财产运用方式
            span {{trustFunction}}
          p
            span 公示日期
            span {{publicityDate}}
  product-drawer(:isProductDrawerVisible="isProductDrawerVisible" @close="isProductDrawerVisible=false" :drawerTitle='drawerTitle')
    .private-placement-com-drawer-slot
        .private-placement-com-drawer-main-part
          h4
            i.iconfont &#xe690;
            span 信托功能
          ul.private-placement-com-drawer-main-btns.clearfix
            li(v-for="(item,index) in drawerFilterBtnGroupOne" :key="item.id" :class="{ active: currentFilter.trustFunction == index }" @click="handleChoseFilter(index,item.id,'trustFunction')") {{item.name}}
        .private-placement-com-drawer-main-part(style="margin-top:66px;")
          h4
            i.iconfont &#xe690;
            span 主要投向行业
          el-dropdown.private-placement-com-drawer-main-dropdown(trigger="click")
            button.flex-b
              span {{filterOptName.inverstIndustry}}
              i.iconfont &#xe61a;
            el-dropdown-menu.private-placement-com-drawer-main-dropdown-menu(slot="dropdown")
              el-dropdown-item(v-for="(item,index) in drawerFilterBtnGroupTwo" :key="item.id" :class="{ active: currentFilter.inverstIndustry == index }")
                div( @click="handleChoseFilter(index,item.id,'inverstIndustry')") {{item.name}}
        .private-placement-com-drawer-main-part(style="margin-top:66px;")
          h4
            i.iconfont &#xe690;
            span 财产运用方式
          el-dropdown.private-placement-com-drawer-main-dropdown(trigger="click")
            button.flex-b
              span {{filterOptName.propertyRightDesc}}
              i.iconfont &#xe61a;
            el-dropdown-menu.private-placement-com-drawer-main-dropdown-menu(slot="dropdown")
              el-dropdown-item(v-for="(item,index) in drawerFilterBtnGroupThree" :key="item.id" :class="{ active: currentFilter.propertyRightDesc == index }" )
                div(@click="handleChoseFilter(index,item.id,'propertyRightDesc')") {{item.name}}
        .private-placement-com-drawer-main-operatebtns
          el-button-group
            el-button(@click="resetFilter") 重置
            el-button.active(@click="sureFilter") 确认
</template>

<script>
import ProductDrawer from 'components/ProductDrawer'
export default {
  components: {
    ProductDrawer
  },
  props: {
    list: Array
  },
  data () {
    return {
      drawerTitle: '筛选',
      isProductDrawerVisible: false,
      currentFilter: {
        trustFunction: 0,
        propertyRightDesc: 0,
        inverstIndustry: 0
      },
      drawerFilterBtnGroupOne: [
        {
          id: 2037,
          name: '投资类'
        },
        {
          id: 2038,
          name: '融资类'
        },
        {
          id: 2039,
          name: '事务管理'
        }
      ],
      drawerFilterBtnGroupTwo: [
        {
          id: 351,
          name: '受托管理'
        },
        {
          id: 352,
          name: '自我管理'
        },
        {
          id: 353,
          name: '顾问管理'
        }
      ],
      drawerFilterBtnGroupThree: [
        {
          id: 2031,
          name: '其他'
        },
        {
          id: 2032,
          name: '持有并管理'
        },
        {
          id: 2033,
          name: '准资产证券化'
        },
        {
          id: 2034,
          name: '资产证券化'
        },
        {
          id: 2035,
          name: '出租'
        },
        {
          id: 2036,
          name: '出售'
        }
      ],
      filterOpt: {},
      filterOptName: {}
    }
  },
  created () {
    this.getAllIndustry()
    this.initFilter()
  },
  methods: {
    getAllIndustry () {
      this.$api.productinfo
        .getAllIndustry({ administratorId: this.$route.query.id })
        .then(res => {
          console.log(res)
          // let result = JSON.parse(res)
          // this.drawerFilterBtnGroupTwo = result.data
        })
    },
    handleChoseFilter (index, key, type) {
      this.currentFilter[type] = index
      this.filterOpt[type] = key

      if (type === 'trustFunction') {
        let trustFunctionFilter = this.$options.filters['trustFunctionFilter']
        this.filterOptName[type] = trustFunctionFilter(key)
      } else if (type === 'inverstIndustry') {
        let inverstIndustryFilter = this.$options.filters[
          'inverstIndustryFilter'
        ]
        this.filterOptName[type] = inverstIndustryFilter(key)
      } else if (type === 'propertyRightDesc') {
        let propertyRightDescFilter = this.$options.filters[
          'propertyRightDescFilter'
        ]
        this.filterOptName[type] = propertyRightDescFilter(key)
        console.log(this.filterOptName)
      }
    },
    initFilter () {
      this.filterOpt = {
        trustFunction: this.drawerFilterBtnGroupOne[0].id,
        inverstIndustry: this.drawerFilterBtnGroupTwo[0].id,
        propertyRightDesc: this.drawerFilterBtnGroupThree[0].id
      }
      this.filterOptName = {
        trustFunction: this.drawerFilterBtnGroupOne[0].name,
        inverstIndustry: this.drawerFilterBtnGroupTwo[0].name,
        propertyRightDesc: this.drawerFilterBtnGroupThree[0].name
      }
    },
    resetFilter () {
      this.currentFilter.trustFunction = 0
      this.currentFilter.inverstIndustry = 0
      this.currentFilter.propertyRightDesc = 0
    },
    sureFilter () {
      this.isProductDrawerVisible = false
      this.$emit('filterClose', this.filterOpt, this.filterOptName)
    }
  },
  filters: {
    trustFunctionFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 2037:
          str = '投资类'
          break
        case 2038:
          str = '融资类'
          break
        case 2039:
          str = '事务管理'
          break
      }
      return str
    },
    inverstIndustryFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 351:
          str = '受托管理'
          break
        case 352:
          str = '自我管理'
          break
        case 353:
          str = '顾问管理'
          break
      }
      return str
    },
    propertyRightDescFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 2031:
          str = '暂行办法实施前'
          break
        case 2032:
          str = '持有并管理'
          break
        case 2033:
          str = '准资产证券化'
          break
        case 2034:
          str = '资产证券化'
          break
        case 2035:
          str = '出租'
          break
        case 2036:
          str = '出售'
          break
      }
      return str
    }
  },
  watch: {
    currentFilter: {
      handler (val, newVal) {
        this.filterOpt = {
          trustFunction: this.drawerFilterBtnGroupOne[newVal.trustFunction].id,
          inverstIndustry: this.drawerFilterBtnGroupTwo[newVal.inverstIndustry]
            .id,
          propertyRightDesc: this.drawerFilterBtnGroupThree[
            newVal.propertyRightDesc
          ].id
        }
        this.filterOptName = {
          trustFunction: this.drawerFilterBtnGroupOne[newVal.trustFunction]
            .name,
          inverstIndustry: this.drawerFilterBtnGroupTwo[newVal.inverstIndustry]
            .name,
          propertyRightDesc: this.drawerFilterBtnGroupThree[
            newVal.propertyRightDesc
          ].name
        }
      },
      deep: true
    }
  },
  destroyed () {
    this.$emit('destory')
  }
}
</script>

<style lang="scss">
.private-placement-com-drawer-main-dropdown-menu {
	width: 678px !important;
	left: 36px !important;
	li {
		font-size: 30px !important;
		text-align: center;
		padding: 10px 0;
	}
}
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
	.private-placement-com-drawer-main-dropdown {
		margin-top: 30px;
		display: block;
		text-align: center;
		button {
			margin: 0 auto;
			width: 678px;
			padding: 0 36px;
			box-sizing: border-box;
			background: #1253fc;
			font-size: 28px;
			line-height: 72px;
			font-weight: 500;
			color: #fff;
			i {
				font-size: 20px;
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
.trust-com-wrapper {
	background: #f8f8f8;
	.trust-com-filter {
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
	.trust-com-main {
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
				span {
					width: 560px;
					font-size: 32px;
					line-height: 46px;
					font-weight: bold;
					color: #333;
					margin-left: 20px;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
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
