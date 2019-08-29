<template lang="pug">
  .product-info-wrapper
    .product-info-switch.flex-b
      div
        span(@click="currentSelect = 0" :class="{ active: !currentSelect }") 私募
        span(@click="currentSelect = 1" :class="{ active: currentSelect }") 信托
      i.iconfont(@click="handleShowFilter") &#xe62d;
    .product-info-main-wrapper
      keep-alive
        component(v-bind:is="currentTabComponent[currentSelect]" ref="componentRef")
</template>

<script>
import PrivatePlacementCom from './component/PrivatePlacementCom'
import TrustCom from './component/TrustCom'
export default {
  components: {
    PrivatePlacementCom,
    TrustCom
  },
  data () {
    return {
      currentSelect: 0,
      currentTabComponent: ['private-placement-com', 'trust-com']
    }
  },
  methods: {
    handleShowFilter () {
      this.$refs.componentRef.isProductDrawerVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-info-wrapper {
	.product-info-switch {
		margin-top: 20px;
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
</style>
