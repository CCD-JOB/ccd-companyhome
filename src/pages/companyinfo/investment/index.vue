<template lang="pug">
  .investment-wrapper
    ul
      li(v-for="item in shareholderList" :key="item.id")
        .left.flex-c
          img(:src="item.avatar")
        .right
          h3 {{item.name}}
          .flex-b
            p
              span 成立时间：
              span 2019-09-02
            p
              span 经营状态：
              span 存续
          p.item
            span 法定代表人
            span 姜维维
          p.item
            span 投资数额
            span 1615.39万元人民币
          p.item
            span 投资比例
            span 17.61%
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
.investment-wrapper {
	ul {
		li {
			margin-top: 50px;
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
				div {
					p {
						font-size: 24px;
						line-height: 48px;
						span:nth-child(even) {
							color: #1253fc;
						}
						span:nth-child(odd) {
							color: #999;
						}
					}
				}

				p.item {
					font-size: 28px;
					line-height: 48px;
					color: #666;
					&:nth-of-type(1) {
						margin-top: 36px;
					}
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
