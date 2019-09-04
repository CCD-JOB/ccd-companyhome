<template lang="pug">
  .product-info-wrapper
    .product-info-top
      .product-info-switch.flex-b
        div
          span(@click="handleSwitch(1)" :class="{ active: currentSelect == 1 }") 私募
          span(@click="handleSwitch(2)" :class="{ active: currentSelect == 2 }") 信托
        i.iconfont(@click="handleShowFilter") &#xe62d;
      .private-info-filter
        span {{totalFilterName}}
        span {{listInfo.totalNum}}
    .product-info-main-wrapper
      scroll-com(
        ref="scrollCom"
        pullup
        :data="list"
        @scrollToEnd="handleLoadMore"
      )
        component(
          ref="componentRef"
          :is="currentTabComponent[currentSelect-1]"
          :list="list"
          @destory="handleComponentDestoryed"
          @filterClose="handleFilterClose"
        )
</template>

<script>
import ScrollCom from 'components/ScrollCom'
import PrivatePlacementCom from './component/PrivatePlacementCom'
import TrustCom from './component/TrustCom'
export default {
  components: {
    PrivatePlacementCom,
    TrustCom,
    ScrollCom
  },
  data () {
    return {
      list: [],
      listInfo: {
        totalNum: 0,
        totalPages: 0
      },
      queryParam: {
        startPage: 1,
        pageSize: 10,
        type: 1,
        administratorId: '',
        fundState: '',
        methodImplementation: '',
        managementType: '',
        trustFunction: '',
        inverstIndustry: '',
        propertyRightDesc: ''
      },
      totalFilterName: '' || '默认排序',
      currentSelect: 1,
      currentTabComponent: ['private-placement-com', 'trust-com']
    }
  },
  created () {
    this.queryParam.administratorId = this.$route.query.id
    this.queryParam.type = this.currentSelect
    this.getDataList()
  },
  methods: {
    resetParam () {
      this.list = []
      this.queryParam = {
        startPage: 1,
        pageSize: 10,
        type: this.currentSelect,
        administratorId: this.$route.query.id,
        fundState: '',
        methodImplementation: '',
        managementType: '',
        trustFunction: '',
        inverstIndustry: '',
        propertyRightDesc: ''
      }
      this.listInfo = {
        totalNum: 0,
        totalPages: 0
      }
    },
    async getDataList () {
      try {
        let result = await this.$api.productinfo
          .getProductList(this.queryParam)
          .then(res => {
            return JSON.parse(res)
          })

        if (!result.data.list.length || result.code !== 200) {
          this.$refs.scrollCom.forceUpdate()
          return
        }
        this.list = [...this.list].concat(result.data.list)
        this.listInfo.totalNum = result.data.total
        this.listInfo.totalPages = result.data.pages
      } catch (error) {
        console.log(error)
      }
    },
    // 加载更多
    handleLoadMore () {
      if (this.queryParam.startPage >= this.listInfo.totalPages) {
        this.$refs.scrollCom.forceUpdate()
        return
      }
      this.queryParam.startPage++
      this.getDataList()
    },
    // 切换组件
    handleSwitch (type) {
      if (this.currentSelect === type) return
      this.currentSelect = type
      this.resetParam()
      this.getDataList()
    },
    // 销毁组件
    handleComponentDestoryed () {
      this.resetParam()
      this.$refs.scrollCom.destroy()
      this.$refs.scrollCom._initScroll()
    },
    // 展示筛选框
    handleShowFilter () {
      this.$refs.componentRef.isProductDrawerVisible = true
    },
    // 关闭筛选框
    handleFilterClose (filterOpt, filterOptName) {
      let arr = []
      for (let idx in filterOptName) {
        arr.push(filterOptName[idx])
      }

      if (arr.length) {
        this.totalFilterName = arr.join(' / ')
      }

      this.resetParam()
      this.queryParam = Object.assign(this.queryParam, filterOpt)
      this.getDataList()
    }
  }
}
</script>

<style lang="scss" scoped>
.product-info-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	.product-info-top {
		position: relative;
		z-index: 1;
		background: #fff;
		.product-info-switch {
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
		.private-info-filter {
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
	}
	.product-info-main-wrapper {
		height: calc(100% - 200px);
	}
}
</style>
