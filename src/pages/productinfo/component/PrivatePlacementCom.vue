<template lang="pug">
.private-placement-com-wrapper
  el-collapse.private-placement-com-main(accordion)
    el-collapse-item(v-for="item in list" :key="item.id" disabled)
      template(slot="title")
        i.first.iconfont &#xe690;
        div
          span.title {{item.fullName}}
          p
            span {{item.fundState | fundStateFilter}}
            span {{item.managementType | managementTypeFilter}}
            span {{item.methodImplementation | methodImplementationFilter}}
  product-drawer(:isProductDrawerVisible="isProductDrawerVisible" @close="isProductDrawerVisible=false")
    .private-placement-com-drawer-slot
      .private-placement-com-drawer-main-part
        h4
          i.iconfont &#xe690;
          span 运作状态
        ul.private-placement-com-drawer-main-btns.clearfix
          li(v-for="(item,index) in drawerFilterBtnGroupOne" :key="item.id" :class="{ active: currentFilter.fundState == index }" @click="handleChoseFilter(index,item.id,'fundState')") {{item.name}}
      .private-placement-com-drawer-main-part(style="margin-top:66px;")
        h4
          i.iconfont &#xe690;
          span 管理类型
        ul.private-placement-com-drawer-main-btns.clearfix
          li(v-for="(item,index) in drawerFilterBtnGroupTwo" :key="item.id" :class="{ active: currentFilter.managementType == index }" @click="handleChoseFilter(index,item.id,'managementType')") {{item.name}}
      .private-placement-com-drawer-main-part(style="margin-top:66px;")
        h4
          i.iconfont &#xe690;
          span 备案阶段
        ul.private-placement-com-drawer-main-btns.special.clearfix
          li(v-for="(item,index) in drawerFilterBtnGroupThree" :key="item.id" :class="{ active: currentFilter.methodImplementation == index }" @click="handleChoseFilter(index,item.id,'methodImplementation')") {{item.name}}
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
      isProductDrawerVisible: false,
      currentFilter: {
        fundState: 0,
        methodImplementation: 0,
        managementType: 0
      },
      drawerFilterBtnGroupOne: [
        {
          id: 300,
          name: '正在运作'
        },
        {
          id: 301,
          name: '延期运作'
        },
        {
          id: 302,
          name: '提前清算'
        },
        {
          id: 303,
          name: '正常清算'
        },
        {
          id: 304,
          name: '非正常清算'
        },
        {
          id: 305,
          name: '投顾协议终止'
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
          id: 1,
          name: '暂行办法实施前'
        },
        {
          id: 2,
          name: '暂行办法实施后'
        }
      ],
      filterOpt: {},
      filterOptName: {}
    }
  },
  created () {
    this.initFilter()
  },
  methods: {
    handleChoseFilter (index, key, type) {
      this.currentFilter[type] = index
      this.filterOpt[type] = key

      if (type === 'fundState') {
        let fundStateFilter = this.$options.filters['fundStateFilter']
        this.filterOptName[type] = fundStateFilter(key)
      } else if (type === 'managementType') {
        let managementTypeFilter = this.$options.filters['managementTypeFilter']
        this.filterOptName[type] = managementTypeFilter(key)
      } else if (type === 'methodImplementation') {
        let methodImplementationFilter = this.$options.filters[
          'methodImplementationFilter'
        ]
        this.filterOptName[type] = methodImplementationFilter(key)
      }
    },
    initFilter () {
      this.filterOpt = {
        fundState: this.drawerFilterBtnGroupOne[0].id,
        managementType: this.drawerFilterBtnGroupTwo[0].id,
        methodImplementation: this.drawerFilterBtnGroupThree[0].id
      }
      this.filterOptName = {
        fundState: this.drawerFilterBtnGroupOne[0].name,
        managementType: this.drawerFilterBtnGroupTwo[0].name,
        methodImplementation: this.drawerFilterBtnGroupThree[0].name
      }
    },
    resetFilter () {
      this.currentFilter.fundState = 0
      this.currentFilter.methodImplementation = 0
      this.currentFilter.managementType = 0
    },
    sureFilter () {
      this.isProductDrawerVisible = false
      this.$emit('filterClose', this.filterOpt, this.filterOptName)
    }
  },
  filters: {
    fundStateFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 300:
          str = '正在运作'
          break
        case 301:
          str = '正常清算'
          break
        case 302:
          str = '提前清算'
          break
        case 303:
          str = '延期清算'
          break
        case 304:
          str = '非正常清算'
          break
        case 305:
          str = '投顾协议已终止'
          break
      }
      return str
    },
    managementTypeFilter: val => {
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
    methodImplementationFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 1:
          str = '暂行办法实施前'
          break
        case 2:
          str = '暂行办法实施后'
          break
      }
      return str
    }
  },
  watch: {
    currentFilter: {
      handler (val, newVal) {
        this.filterOpt = {
          fundState: this.drawerFilterBtnGroupOne[newVal.fundState]
            .id,
          managementType: this.drawerFilterBtnGroupTwo[
            newVal.managementType
          ].id,
          methodImplementation: this.drawerFilterBtnGroupThree[
            newVal.methodImplementation
          ].id
        }
        this.filterOptName = {
          fundState: this.drawerFilterBtnGroupOne[newVal.fundState]
            .name,
          managementType: this.drawerFilterBtnGroupTwo[
            newVal.managementType
          ].name,
          methodImplementation: this.drawerFilterBtnGroupThree[
            newVal.methodImplementation
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
