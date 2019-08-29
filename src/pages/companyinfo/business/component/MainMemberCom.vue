<template lang="pug">
  .mainmember-com-wrapper
    ul
      li.flex-b(v-for="item in mainmemberList" :key="item.id")
        .flex-s
          .left.flex-c
            img(:src="item.avatar")
          .right
            h3 {{item.name}}
            p 企业法人
              span 大股东
        i.iconfont &#xe64d;
</template>
<script>
export default {
  data () {
    return {
      mainmemberList: [
        {
          id: 0,
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          name: '马贵州'
        },
        {
          id: 1,
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          name: '马贵州'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.mainmember-com-wrapper {
	ul {
		li {
			position: relative;
			padding: 0 30px;
			.left {
				height: 180px;
				img {
					width: 130px;
					height: 130px;
					border-radius: 50%;
				}
			}
			.right {
				margin: 0 0 0 20px;
				h3 {
					font-size: 32px;
					line-height: 48px;
					color: #1253fc;
					font-weight: bold;
				}
				p {
					font-size: 24px;
					line-height: 48px;
					color: #999;
					span {
						margin-left: 22px;
					}
				}
			}
			i {
				font-size: 40px;
				color: #7d7d7d;
				font-weight: bold;
			}
			&:after {
				position: absolute;
				top: 100%;
				left: 180px;
				content: '';
				width: calc(100% - 180px);
				height: 1px;
				background: rgba(229, 229, 229, 1);
			}
		}
	}
}
</style>
