<template lang="pug">
  .main-part-warning-info
    .main-part-warning-info-title
      h3 舆情信息
      ul.main-part-warning-info-btn.flex-s
        li(v-for="(item,index) in warningBtns" :key="item.id" @click="handleChangeBtn(index)" )
          button(:class="{active:currentSelect === index}") {{item.name}}
    ul.main-part-warning-info-list
      li(v-for="item in list" :key="item.id" ref="listGroup")
        .left
          p {{item.title}}
          span {{item.sourceForm}}
          span {{item.releaseDate}}
        img(:src="item.coverPath" v-if="item.coverPath")
</template>

<script>
const warningBtns = [
  {
    id: 1,
    name: '全部'
  },
  {
    id: 2,
    name: '自身舆情'
  },
  {
    id: 3,
    name: '周边舆情'
  }
]
export default {
  props: {
    list: Array,
    listInfo: Object,
    currentSelect: Number || String
  },
  data () {
    return {
      // 舆情按钮
      warningBtns
    }
  },
  methods: {
    handleChangeBtn (index) {
      this.$emit('handleChangeBtn', index)
    }
  }
}
</script>

<style lang="scss">
.main-part-warning-info {
	padding: 70px 36px 0;
	border-radius: 20px 20px 0px 0px;
	background: #fff;
	.main-part-warning-info-title {
		h3 {
			font-size: 36px;
			line-height: 48px;
			font-weight: bold;
			color: #333333;
		}
		.main-part-warning-info-btn {
			margin-top: 30px;
			button {
				margin: 0 13px;
				background: #fff;
				padding: 15px 25px;
				border-radius: 30px;
				border: 5px solid #f2f2f2;
				outline: none;
				&:nth-of-type(1) {
					margin-left: 0;
				}
				&.active {
					background: #1253fc;
					color: #fff;
				}
				span {
					padding: 12px 34px;
					font-size: 26px;
				}
			}
		}
	}
	.main-part-warning-info-list {
		margin-top: 25px;
		li {
			padding-bottom: 36px;
			padding-top: 25px;
			border-bottom: 1px solid #eee;
			display: flex;
			justify-content: space-between;
			.left {
				p {
					font-size: 32px;
					line-height: 46px;
					font-weight: 500;
					color: rgba(68, 68, 68, 1);
				}
				span {
					font-size: 24px;
					line-height: 40px;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
					margin-top: 42px;
					display: inline-block;
					&:nth-of-type(2) {
						margin-left: 16px;
					}
				}
			}
			img {
				width: 235px;
				height: 168px;
				border-radius: 20px;
				margin-left: 20px;
			}
		}
	}
}
</style>
