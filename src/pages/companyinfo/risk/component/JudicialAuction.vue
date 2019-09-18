<template lang="pug">
  ul.judicial-auction-wrapper
    li(v-for="(item,index) in list" :key="item.auctionNotice")
      .judicial-auction-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
        p {{item.auctionNotice}}
      .judicial-auction-info
        .flex-b
          div(style="width:217px")
            span  评估价：
            span(style="width:100%") {{item.auctionTarget | startFilter}}
          div(style="width:217px")
            span  起拍价：
            span(style="width:100%")  {{item.auctionTarget | judgeFilter}}
        div
          span  公告时间：
          span(style="width:462px")  {{item.publicationDate}}
      .judicial-auction-divider
</template>

<script>
export default {
  name: 'judicial-auction',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'judicialSale')
  },
  destroyed () {
    this.$emit('comDestory')
  },
  filters: {
    judgeFilter: val => {
      let str = ''
      if (!val) return str
      let str2 = val.split('起拍价格：')
      str = str2[1].split('评估价格：')
      return str[1]
    },
    startFilter: val => {
      let str = ''
      if (!val) return str
      let str2 = val.split('起拍价格：')
      str = str2[1].split('评估价格：')
      return str[0]
    }
  }
}
</script>

<style lang="scss">
.judicial-auction-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.judicial-auction-title {
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
		.judicial-auction-info {
			padding: 10px 20px 60px 38px;
			span:nth-of-type(odd) {
				font-size: 26px;
				line-height: 56px;
				font-weight: 500;
				color: #333;
				display: inline-block;
			}
			span:nth-of-type(even) {
				font-size: 24px;
				line-height: 56px;
				font-weight: 500;
				padding: 0 22px;
				box-sizing: border-box;
				background: #f8f8f8;
				color: #999999;
				display: inline-block;
			}
		}
		.judicial-auction-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
