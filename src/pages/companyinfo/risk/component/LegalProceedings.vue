<template lang="pug">
  ul.legal-proceedings-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .legal-proceedings-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
        p {{item.caseName}}
      dl.legal-proceedings-info
        dt  案号:
        dd  {{item.caseNumber}}
        dt  案由：
        dd  {{item.caseOfAction}}
        dt  发布日期：
        dd  {{item.publishedDate}}
        dt  案件身份：
        dd.special
          p {{item.caseIdentity}}
      .legal-proceedings-divider
</template>

<script>
export default {
  name: 'legal-proceedings',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'lawsuit')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.legal-proceedings-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.legal-proceedings-title {
			padding: 36px 20px 0 38px;
			em {
				font-size: 36px;
				font-weight: bold;
				line-height: 54px;
				color: #999999;
			}
			i {
				font-size: 30px;
				font-weight: bold;
			}
			p {
				font-size: 30px;
				font-weight: bold;
				line-height: 40px;
				color: #222;
			}
		}
		.legal-proceedings-info {
			padding: 10px 20px 60px 38px;
			dt {
				font-size: 26px;
				line-height: 56px;
				font-weight: 500;
				color: #333;
			}
			dd {
				font-size: 24px;
				line-height: 56px;
				font-weight: 500;
				padding: 0 22px;
				width: 462px;
				box-sizing: border-box;
				background: #f8f8f8;
				color: #999999;
				&.special {
					padding: 10px 22px;
					p {
						font-size: 24px;
						line-height: 36px;
						&:nth-of-type(2) {
							margin-top: 10px;
						}
					}
				}
			}
		}
		.legal-proceedings-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
