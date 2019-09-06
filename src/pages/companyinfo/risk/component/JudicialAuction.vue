<template lang="pug">
  ul.judicial-auction-wrapper
    li(v-for="(item,index) in list" :key="item.auctionNotice")
      .judicial-auction-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
        p {{item.auctionNotice}}
      dl.judicial-auction-info
        .flex-b
          div
            dt  评估价：
            dd(style="width:217px;") {{item.auctionTarget | startFilter}}
          div
            dt  起拍价：
            dd(style="width:217px;")  {{item.auctionTarget | judgeFilter}}
        dt  公告时间：
        dd  {{item.publicationDate}}
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
