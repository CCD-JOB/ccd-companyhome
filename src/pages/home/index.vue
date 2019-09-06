<template lang="pug">
.home-wrapper
  .main-part-warning-info-fixed-title(ref="titleFixed")
    h3 舆情信息
    ul.main-part-warning-info-btn.flex-s
      li(v-for="(item,index) in warningBtns" :key="item.id" @click="handleChangeBtn(index)")
        button(:class="{active:currentSelect === index}") {{item.name}}
  scroll-com(ref="scrollCom"
    pullup
    :data="warningList"
    :listen-scroll="listenScroll"
    :probe-type="probeType"
    @scrollToEnd="handleLoadMore"
    @scroll="scroll"
  )
    .top-part
      iv-badge.top-part-iv-badge(dot :count="1" )
        el-avatar.top-part-avatar(:src="avatarUrl")
      button.top-part-btn
        span 私募
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
      div.main-part-info(@click="isHomeModalVisible = mainInfoListInfo.flag") 异常机构
        span 未按要求进行产品更新或着其他原因呵呵呵呵呵
        i.iconfont &#xe64d;
      el-divider
      ul.main-part-operate-list.clearfix
        li(v-for="item in operateList" :key="item.src" @click="handleGoHomeInfo(item)")
          img(:src="item.src")
          p {{item.name}}
      .main-part-product-info
        .main-part-product-info-title.flex-b(@click="handleGoProductInfo")
          h3 产品信息
          p 总数 {{productListInfo.total}}
            i.iconfont &#xe64d;
        ul.main-part-product-info-list
          li.flex-b(v-for="item in productList" :key="item.id" )
            iv-badge(:status="item.fundState | fundStateBadgeFilter" :text="item.fullName")
            span.status {{item.fundState | fundStateFilter}}
        .main-part-product-info-btn
          button(@click="$router.push('/productinfo/productanalyse')")
            i.iconfont &#xe618;
            span 产品分析
          button(@click="$router.push({path:'/productinfo/productatlas',query:{id}})")
            i.iconfont &#xe918;
            span 产品图谱
      warning-info(
        @handleChangeBtn="handleChangeBtn"
        ref="warningInfo"
        :list="warningList"
        :listInfo="warningListInfo"
        :currentSelect="currentSelect"
      )
  home-drawer(:isHomeDrawerVisible="isHomeDrawerVisible" @close="isHomeDrawerVisible=false")
    .home-drawer-slot
      .home-drawer-top
        iv-badge(dot :count="1" :offset="[150, -15]")
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
      li(v-for="item in mainInfoList" :key="item.code")
        i.iconfont &#xe710;
          span {{item.code | maininfoTitleFilter}}
        p {{item.content}}
  home-modal(title="提示" :isHomeModalVisible="isHomeAlertGoDialogVisible" @close="isHomeAlertGoDialogVisible=false")
    .home-alert-go-download-slot
      h2 请下载app进行体验
      div
        el-button(type="primary" @click="goDownload") 去下载
  </span>

</template>

<script>
import ScrollCom from 'components/ScrollCom'
import HomeDrawer from 'components/HomeDrawer'
import HomeModal from 'components/HomeModal'
import WarningInfo from './WarningInfo'
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
const operateList = [
  {
    name: '工商信息',
    src: require('./img/icon1.png'),
    linkto: '/companyinfo/business',
    showmodal: true
  },
  {
    name: '私募管理人',
    src: require('./img/icon2.png'),
    linkto: '/companyinfo/privateman',
    showmodal: true
  },
  {
    name: '风险信息',
    src: require('./img/icon3.png'),
    linkto: '/companyinfo/risk',
    showmodal: false
  },
  {
    name: '历史变更',
    src: require('./img/icon4.png'),
    linkto: '/companyinfo/historical',
    showmodal: true
  },
  {
    name: '对外投资',
    src: require('./img/icon5.png'),
    linkto: '/companyinfo/investment',
    showmodal: true
  }
]
export default {
  components: {
    HomeDrawer,
    HomeModal,
    WarningInfo,
    ScrollCom
  },
  data () {
    return {
      id: '',
      avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      isHomeDrawerVisible: false,
      isHomeModalVisible: false,
      isHomeAlertGoDialogVisible: false,
      // 公司详情相关
      operateList,
      // 异常机构相关
      mainInfoList: [],
      mainInfoListInfo: [],
      // 产品相关
      productList: [],
      productListInfo: {},
      // 舆情相关
      warningBtns,
      currentSelect: 0,
      queryParam: {
        startPage: 1,
        pageSize: 10,
        type: 1,
        administratorId: ''
      },
      warningList: [],
      warningListInfo: {},
      scrollY: -1
    }
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
    this.id = this.$route.query.id
    // this.id = 7010
    this.getProductList()
    this.getMainInfoList()
    this.getWarningListPart()
  },
  methods: {
    // 展示产品信息
    async getProductList () {
      try {
        let param = {
          startPage: 1,
          pageSize: 3,
          type: 1,
          administratorId: this.id,
          fundState: '',
          methodImplementation: '',
          managementType: '',
          trustFunction: '',
          inverstIndustry: '',
          propertyRightDesc: ''
        }
        let result = await this.$api.productinfo
          .getProductList(param)
          .then(res => {
            return JSON.parse(res)
          })
        this.productList = result.data.list
        this.productListInfo = result.data
      } catch (error) {
        console.log(error)
      }
    },
    // 展示异常机构信息
    async getMainInfoList () {
      let param = {
        administratorId: this.id
      }
      try {
        let result = await this.$api.home.getHonestyInfo(param).then(res => {
          return JSON.parse(res)
        })
        let arr = []
        let temp = { ...result.data }
        delete temp.flag
        for (let key in temp) {
          arr.push({
            code: key,
            content: temp[key]
          })
        }
        this.mainInfoList = [...arr]
        this.mainInfoListInfo = result.data
      } catch (error) {
        console.log(error)
      }
    },
    // 获取舆情信息
    async getWarningListPart () {
      try {
        this.queryParam.type = this.currentSelect + 1
        this.queryParam.administratorId = this.id

        let result = await this.$api.home
          .getOpinionInfo(this.queryParam)
          .then(res => {
            return JSON.parse(res)
          })

        if (!result.data.list || result.code !== 200) {
          this.$refs.scrollCom.forceUpdate()
          return
        }
        this.warningList = [...this.warningList].concat(result.data.list)
        this.warningListInfo.totalPages = result.data.pages
      } catch (error) {
        console.log(error)
      }
    },
    resetWarningListParam () {
      this.warningList = []
      this.warningListInfo = {
        totalPages: 0
      }
      this.queryParam = {
        startPage: 1,
        pageSize: 10,
        type: 1,
        administratorId: this.id
      }
    },
    // 加载更多
    handleLoadMore () {
      if (this.queryParam.startPage >= this.warningListInfo.totalPages) {
        this.$refs.scrollCom.forceUpdate()
        return
      }
      this.queryParam.startPage++
      this.getWarningListPart()
    },
    handleChangeBtn (index) {
      this.currentSelect = index
      this.resetWarningListParam()
      this.getWarningListPart()
    },
    // 去到产品信息页
    handleGoProductInfo () {
      this.isHomeAlertGoDialogVisible = true
      // this.$router.push({ path: '/productinfo', query: { id: this.id } })
    },
    // 去到公司信息页
    handleGoHomeInfo (item) {
      if (item.showmodal) {
        this.isHomeAlertGoDialogVisible = true
      } else {
        this.$router.push({ path: item.linkto, query: { id: this.id } })
      }
    },
    goDownload () {
      this.isHomeAlertGoDialogVisible = false
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // Ios
        window.location = 'https://itunes.apple.com/cn/app/id1449931291?mt=8'
      } else if (/(Android)/i.test(navigator.userAgent)) {
        // Android终端
        window.location =
					'https://sj.qq.com/myapp/detail.htm?apkName=com.lf.ccdapp'
      }
    },
    // 监听滚动
    scroll (pos) {
      this.scrollY = pos.y
    }
  },
  filters: {
    maininfoTitleFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 'outOfContact':
          str = '失联机构'
          break
        case 'abnormal':
          str = '异常机构'
          break
        case 'regulatoryMeasures':
          str = '监管措施'
          break
        case 'falseSubmit':
          str = '虚假填报'
          break
        case 'importantOmissions':
          str = '重大遗漏'
          break
        case 'violation':
          str = '违反规定'
          break
        case 'dishonesty':
          str = '不诚信记录'
          break
        case 'otheHonesty':
          str = '其他诚信记录'
          break
      }
      return str
    },
    fundStateFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 300:
          str = '正在运作'
          break
        case 301:
          str = '正常清算'
          break
        case 302:
          str = '提前清算'
          break
        case 303:
          str = '延期清算'
          break
        case 304:
          str = '非正常清算'
          break
        case 305:
          str = '投顾协议已终止'
          break
      }
      return str
    },
    fundStateBadgeFilter: val => {
      let str = ''
      if (!val) return str
      switch (val) {
        case 300:
          str = 'success'
          break
        case 301:
          str = 'default'
          break
        case 302:
          str = 'processing'
          break
        case 303:
          str = 'error'
          break
        case 304:
          str = 'warning'
          break
        case 305:
          str = 'error'
          break
      }
      return str
    }
  },
  watch: {
    scrollY (newY) {
      if (-newY > 1900) {
        this.$refs.titleFixed.style.top = 0
      }
      if (-newY < 1600) {
        this.$refs.titleFixed.style.top = '-300px'
      }
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
				width: 30px;
				height: 30px;
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
.home-alert-go-download-slot {
	padding: 26px 48px 36px;
	h2 {
		font-size: 30px;
		font-weight: bold;
		text-align: center;
	}
	div {
		text-align: center;
		margin-top: 50px;
		.el-button {
			font-size: 30px;
			padding: 20px 40px;
		}
	}
}
.home-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: rgba(248, 248, 248, 1);
	.main-part-warning-info-fixed-title {
		width: 100%;
		position: absolute;
		top: -300px;
		left: 0;
		transition: 1s;
		padding: 30px 36px;
		z-index: 4;
		background: #fff;
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
	.top-part {
		padding: 0 36px;
		display: flex;
		justify-content: space-between;
		align-items: top;
		position: relative;
		z-index: 1;
		.top-part-iv-badge {
			.top-part-avatar {
				width: 144px;
				height: 144px;
				border-radius: 50%;
			}
			.ivu-badge-dot {
				width: 30px;
				height: 30px;
				margin-top: 120px;
				margin-left: -10px;
			}
		}
		.top-part-btn {
			margin-top: 17px;
			background: #1253fc;
			border-radius: 8px;
			height: 40px;
			font-size: 22px;
			color: #fff;
			span {
				padding: 8px 20px;
			}
		}
	}
	.main-part {
		margin-top: -72px;
		height: 100%;
		background: #fff;
		border-radius: 20px 20px 0px 0px;
		.main-part-icon-group {
			text-align: center;
			margin-top: 15px;
			padding: 0 36px;
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
			padding: 0 36px;
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
				margin-top: 10px;
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
			padding: 0 36px;

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
			padding: 0 36px;
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
			padding: 0 36px;
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
	}
}
</style>
