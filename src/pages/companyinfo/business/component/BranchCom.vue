<template lang="pug">
  .branch-com-wrapper
    ul
      li.flex-b(v-for="item in mainmemberList" :key="item.id")
        .flex-s
          .left.flex-c
            el-badge(is-dot)
              img(:src="item.avatar")
          .right
            h3 {{item.name}}
            p 其他投资私募基金管理人
              span(v-if="!item.isNormal") 异常机构
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
          name: '马贵州',
          isNormal: false
        },
        {
          id: 1,
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          name: '马贵州',
          isNormal: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.branch-com-wrapper {
	ul {
		li {
			position: relative;
			padding: 0 30px;
			.left {
				height: 180px;
				.el-badge {
					.el-badge__content {
						width: 22px;
						height: 22px;
					}
				}
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
					color: #333;
					font-weight: bold;
				}
				p {
					font-size: 24px;
					line-height: 48px;
					color: #999;
					span {
						margin-left: 22px;
						color: #f84e4d;
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
