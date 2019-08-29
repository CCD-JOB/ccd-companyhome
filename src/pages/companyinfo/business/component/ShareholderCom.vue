<template lang="pug">
  .shareholder-com-wrapper
    ul
      li(v-for="item in shareholderList" :key="item.id")
        .left.flex-c
          img(:src="item.avatar")
        .right
          h3 {{item.name}}
          p 企业法人
            span 大股东
          p
            span 持股比例
            span 49.01%
          p
            span 认缴出资额
            span 615.3953万元人民币
</template>
<script>
export default {
  data () {
    return {
      shareholderList: [
        {
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          name: '贵州燃气集团股份有限公司'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.shareholder-com-wrapper {
	ul {
		li {
			position: relative;
			display: flex;
			justify-content: flex-start;
			padding-left: 30px;
			.left {
				height: 180px;
				img {
					width: 130px;
					height: 130px;
					border-radius: 50%;
				}
			}
			.right {
				margin: 20px 0 0 20px;
				h3 {
					font-size: 32px;
					line-height: 44px;
					color: #333;
					font-weight: bold;
				}
				p:nth-of-type(1) {
					font-size: 24px;
					line-height: 48px;
					color: #999;
					span {
						margin-left: 22px;
						color: #1253fc;
					}
				}
				p:nth-of-type(2) {
					margin-top: 36px;
				}
				p:nth-of-type(2),
				p:nth-of-type(3) {
					font-size: 28px;
					line-height: 48px;
					color: #666;
					span:nth-of-type(1) {
						display: inline-block;
						width: 200px;
					}
				}
			}
			&:after {
				position: absolute;
				top: 100%;
				left: 180px;
				margin-top: 40px;
				content: '';
				width: calc(100% - 180px);
				height: 1px;
				background: rgba(229, 229, 229, 1);
			}
		}
	}
}
</style>
