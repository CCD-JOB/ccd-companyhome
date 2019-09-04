<template lang="pug">
  ul.court-announcement-wrapper
    li(v-for="(item,index) in list" :key="item.id")
      .court-announcement-title
        .flex-b
          em {{String(index+1).padStart(2, '0')}}
          i.iconfont &#xe64d;
      dl.court-announcement-info
        dt  当事人：
        dd  {{item.defendant}}
        dt  公告人：
        dd  {{item.court}}
        dt  公告类型：
        dd  {{item.announcementType}}
        dt  刊登日期：
        dd  {{item.publicationDate}}
      .court-announcement-divider
</template>

<script>
export default {
  name: 'court-announcement',
  props: {
    list: Array
  },
  created () {
    this.$emit('comCreated', 'court')
  },
  destroyed () {
    this.$emit('comDestory')
  }
}
</script>

<style lang="scss">
.court-announcement-wrapper {
	padding-top: 8px;
	background: #ffffff;
	li {
		position: relative;
		.court-announcement-title {
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
		}
		.court-announcement-info {
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
		.court-announcement-divider {
			width: 100%;
			height: 16px;
			background: #f8f8f8;
		}
	}
}
</style>
