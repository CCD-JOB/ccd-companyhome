<template lang="pug">
  .product-info-wrapper
    .product-info-top
      .product-info-switch.flex-b
        div
          span(@click="handleSwitch(1)" :class="{ active: currentSelect == 1 }") 私募
          span(@click="handleSwitch(2)" :class="{ active: currentSelect == 2 }") 信托
        i.iconfont(@click="handleShowFilter") &#xe62d;
      .private-info-filter
        span {{totalFilter}}
        span {{totalNum}}
    .product-info-main-wrapper
      scroll-com(
        ref="scrollCom"
        pullup
        @scrollToEnd="handleLoadMore"
        :data="list"
      )
        component(
          ref="componentRef"
          :is="currentTabComponent[currentSelect-1]"
          :list="list"
          @destory="componentDestoryed"
          @filterClose="filterClose"
        )
</template>

<script>
import ScrollCom from 'components/ScrollCom'
import PrivatePlacementCom from './component/PrivatePlacementCom'
import TrustCom from './component/TrustCom'
import { log } from 'util'
export default {
  components: {
    PrivatePlacementCom,
    TrustCom,
    ScrollCom
  },
  data () {
    return {
      list: [],
      totalNum: 0,
      totalFilter: '' || '默认排序',
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
    async getDataList () {
      try {
        let result = await this.$api.productinfo
          .getProductList(this.queryParam)
          .then(res => {
            return JSON.parse(res)
          })

        if (!result.data.list.length || result.code !== 200) return
        this.list = [...this.list].concat(result.data.list)
        this.totalNum = result.data.total
      } catch (error) {
        console.log(error)
      }
    },
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
    },
    handleSwitch (type) {
      this.currentSelect = type
      this.resetParam()
      this.getDataList()
    },
    handleLoadMore () {
      this.queryParam.startPage++
      this.getDataList()
    },
    filterClose (filterOpt, filterOptName) {
      this.resetParam()
      this.queryParam = Object.assign(this.queryParam, filterOpt)

      let arr = []
      for (let idx in filterOptName) {
        arr.push(filterOptName[idx])
      }

      if (arr.length) {
        this.totalFilter = arr.join(' / ')
      }

      this.getDataList()
    },
    componentDestoryed () {
      this.resetParam()
      this.$refs.scrollCom.destroy()
      this.$refs.scrollCom._initScroll()
    },
    handleShowFilter () {
      this.$refs.componentRef.isProductDrawerVisible = true
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
