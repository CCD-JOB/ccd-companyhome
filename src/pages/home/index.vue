<template lang="pug">
  .home-wrapper
    home-drawer(:isHomeDrawerVisible="isHomeDrawerVisible" @close="isHomeDrawerVisible=false")
      .home-drawer-slot
        .home-drawer-top
          iv-badge(dot :count="1" :offset="[105, -15]")
            el-avatar.top-part-avatar(:src="avatarUrl")
          h3 华设资产管理（上海）有限公司
        .home-drawer-bottom
          div
            i.iconfont &#xe657;
            p 021-6162636
          div
            i.iconfont &#xe640;
            p 上海市崇明区北沿公路2099号
          div
            i.iconfont &#xe935;
            p https://www.hwasbank.com
    home-modal(:isHomeModalVisible="isHomeModalVisible" @close="isHomeModalVisible=false")
      ul.home-modal-slot
        li(v-for="item in mainInfoList" :key="item.id")
          i.iconfont &#xe710;
            span {{item.name}}
          p {{item.info}}
    .top-part
      iv-badge(dot :count="1" :offset="[105, -15]")
        el-avatar.top-part-avatar(:src="avatarUrl")
      button.top-part-btn 私募
    .main-part
      .main-part-icon-group
        i.iconfont(@click="isHomeDrawerVisible=true") &#xe935;
        i.iconfont(@click="isHomeDrawerVisible=true") &#xe640;
        i.iconfont(@click="isHomeDrawerVisible=true") &#xe657;
        i.iconfont &#xe60f;
      .main-part-title.clearfix
        h2 华设资产管理（上海）有限公司
        div 法定代表人:
          span 上官施乐
        div 注册资本:
          span 2000w
      el-divider
      div.main-part-info(@click="showWarningPart") 异常机构
        span 未按要求进行产品更新或着其他原因xxxxxxxxx
        i.iconfont &#xe64d;
      el-divider
      ul.main-part-operate-list.clearfix
        li(v-for="item in operateList" :key="item.src" @click="$router.push(item.linkto)")
          img(:src="item.src")
          p {{item.name}}
      .main-part-product-info
        .main-part-product-info-title.flex-b(@click="$router.push('/productinfo')")
          h3 产品信息
          p 总数 35
            i.iconfont &#xe64d;
        ul.main-part-product-info-list
          li.flex-b(v-for="item in productList" :key="item.name" )
            iv-badge(status="success" :text="item.name")
            span.status {{item.status}}
        .main-part-product-info-btn
          button(@click="$router.push('/productinfo/productanalyse')")
            i.iconfont &#xe618;
            span 产品分析
          button(@click="$router.push('/productinfo/productatlas')")
            i.iconfont &#xe918;
            span 产品图谱
      .main-part-warning-info
        h3 舆情信息
        ul.main-part-warning-info-btn.flex-s
          li(v-for="item in warningBtns" :key="item.id")
            button {{item.name}}
        ul.main-part-warning-info-list
          li(v-for="item in warningList" :key="item.id")
            .left
              p {{item.name}}
              span {{item.from}}
              span {{item.time}}
            img(:src="item.src")
</template>

<script>
import HomeDrawer from 'components/HomeDrawer'
import HomeModal from 'components/HomeModal'
export default {
  components: {
    HomeDrawer,
    HomeModal
  },
  data () {
    return {
      isHomeDrawerVisible: false,
      isHomeModalVisible: false,
      avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      // 公司详情
      operateList: [
        {
          name: '工商信息',
          src: require('./img/icon1.png'),
          linkto: '/companyinfo/business'
        },
        {
          name: '私募管理人',
          src: require('./img/icon2.png'),
          linkto: '/companyinfo/privateman'
        },
        {
          name: '风险信息',
          src: require('./img/icon3.png'),
          linkto: '/companyinfo/risk'
        },
        {
          name: '历史变更',
          src: require('./img/icon4.png'),
          linkto: '/companyinfo/historical'
        },
        {
          name: '对外投资',
          src: require('./img/icon5.png'),
          linkto: '/companyinfo/investment'
        }
      ],
      // 产品信息
      productList: [
        {
          name: '华聚一号私募投资基金',
          status: '正在运作'
        },
        {
          name: '华设碟中谍5收益权专项资产管理计划',
          status: '正常清算'
        },
        {
          name: '君桐资本君芯1号股权投资基金',
          status: '延期清算'
        }
      ],
      // 舆情按钮
      warningBtns: [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '自身舆情'
        },
        {
          id: 2,
          name: '周边舆情'
        }
      ],
      // 舆情信息
      warningList: [
        {
          id: 0,
          name: '信披预警不容忽视！刘鹤“八字方针”处置金融风险，阐...',
          from: '新浪财经',
          time: '2019.03.28',
          src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
        },
        {
          id: 1,
          name: '信披预警不容忽视！刘鹤“八字方针”处置金融风险，阐...',
          from: '百度贴吧',
          time: '2019.03.28',
          src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
        }
      ],
      // 异常机构
      mainInfoList: [
        {
          id: 0,
          name: '异常机构',
          info: '未按要求进行产品更新或重大事项更新累计2次'
        },
        {
          id: 1,
          name: '其他诚信信息',
          info: '未按要求进行产品更新或重大事项更新累计2次及以上'
        }
      ]
    }
  },
  methods: {
    showWarningPart () {
      this.isHomeModalVisible = true
      this.$api.home.getHonestyInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.home-drawer-slot {
	.home-drawer-top {
		margin-top: 100px;
		text-align: center;
		.ivu-badge {
			.top-part-avatar {
				width: 144px;
				height: 144px;
				border-radius: 50%;
			}
			.ivu-badge-dot {
				width: 34px;
				height: 34px;
			}
		}
		h3 {
			margin-top: 50px;
			font-size: 42px;
			color: #333;
			font-weight: bold;
		}
	}
	.home-drawer-bottom {
		text-align: center;
		margin-top: 80px;
		div {
			margin-top: 60px;
			i {
				font-size: 50px;
				color: #000000;
			}
			p {
				margin-top: 20px;
				color: #1253fc;
				font-size: 32px;
				line-height: 48px;
				font-weight: 800;
			}
		}
	}
}
.home-modal-slot {
	padding: 26px 48px 36px;
	li {
		margin-top: 40px;
		&:nth-of-type(1) {
			margin-top: 0;
		}
		i {
			color: #f84e4d;
			font-size: 32px;
			span {
				font-size: 32px;
				line-height: 56px;
				font-weight: bold;
				margin-left: 10px;
				color: #333;
			}
		}
		p {
			font-size: 28px;
			line-height: 40px;
			color: #666666;
			margin-top: 5px;
		}
	}
}
.home-wrapper {
	position: relative;
	background: rgba(248, 248, 248, 1);
	.top-part {
		padding: 0 36px;
		display: flex;
		justify-content: space-between;
		align-items: top;
		position: relative;
		z-index: 1;
		.ivu-badge {
			.top-part-avatar {
				width: 144px;
				height: 144px;
				border-radius: 50%;
			}
			.ivu-badge-dot {
				width: 34px;
				height: 34px;
			}
		}
		.top-part-btn {
			margin-top: 17px;
			background: #1253fc;
			border-radius: 8px;
			height: 40px;
			padding: 6px 20px;
			font-size: 22px;
			color: #fff;
		}
	}
	.main-part {
		position: absolute;
		top: 72px;
		padding: 0 36px;
		background: #fff;
		.main-part-icon-group {
			position: relative;
			z-index: 2;
			text-align: center;
			margin-top: 15px;
			i {
				font-size: 40px;
				margin: 0 18px;
				color: #1253fc;
			}
		}
		.main-part-title {
			margin-top: 30px;
			font-weight: bold;
			color: #333;
			h2 {
				font-size: 42px;
				line-height: 48px;
				font-weight: bold;
			}
			div {
				font-size: 28px;
				line-height: 48px;
				font-weight: bold;
				float: left;
				span {
					font-weight: normal;
				}
				&:nth-of-type(2) {
					margin-left: 40px;
				}
			}
		}
		.main-part-info {
			color: #333;
			font-size: 28px;
			line-height: 48px;
			font-weight: bold;
			span {
				vertical-align: bottom;
				margin-left: 10px;
				font-weight: normal;
				display: inline-block;
				width: 500px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: break-all;
			}
			i {
				font-size: 30px;
				vertical-align: bottom;
				color: #666666;
			}
		}
		.main-part-operate-list {
			margin-top: 58px;
			li {
				float: left;
				margin: 0 19px;
				text-align: center;
				img {
					width: 60px;
					height: 60px;
				}
				p {
					font-size: 24px;
					font-weight: 500;
					margin-top: 24px;
				}
				&:nth-of-type(0),
				&:nth-of-type(4) {
					margin: 0;
				}
			}
		}
		.main-part-product-info {
			margin-top: 70px;
			.main-part-product-info-title {
				h3 {
					font-size: 36px;
					font-weight: bold;
					line-height: 48px;
					color: #333;
				}
				p {
					font-size: 28px;
					color: #999;
					line-height: 48px;
					i {
						font-size: 28px;
						margin-left: 5px;
					}
				}
			}
			.main-part-product-info-list {
				margin-top: 40px;
				li {
					.ivu-badge-status-dot {
						width: 16px;
						height: 16px;
					}
					.ivu-badge-status-text {
						font-size: 28px;
						line-height: 48px;
						margin-left: 10px;
						color: #666666;
					}
					.status {
						color: #999;
					}
				}
			}
		}
		.main-part-product-info-btn {
			margin-top: 48px;
			button {
				width: 322px;
				height: 96px;
				background: rgba(245, 246, 248, 1);
				border-radius: 107px;
				&:nth-of-type(2) {
					margin-left: 32px;
				}
				i {
					font-size: 50px;
					line-height: 48px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					vertical-align: bottom;
				}
				span {
					font-size: 30px;
					line-height: 48px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
		.main-part-warning-info {
			margin-top: 70px;
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
					&:nth-of-type(1) {
						margin-left: 0;
					}
					&.active {
						background: #1253fc;
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
			margin-bottom: 100px;
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
				}
			}
		}
	}
}
</style>
