<template lang="pug">
.manager-wrapper
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
    .main-part
      .main-part-title
        el-avatar.top-part-avatar(:shape="'circle'") {{avatarName}}
        .right
          h3 {{managerInfo.legalPerson.name}}
          p {{managerInfo.legalPerson.fullName}}
          p
            span {{managerInfo.legalPerson.duty}}
      .main-part-info
        p {{managerInfo.legalPerson.basicIntroduction}}
        el-divider
        p 具有基金从业资格 （{{managerInfo.legalPerson.qualifiedWay}}）
        el-divider
      .main-part-job
        h3 工作履历
        el-timeline
          el-timeline-item(v-for="item in managerInfo.workResumeList" :key="item.id") {{item.startTime.replace('-','.')}}  -  {{item.endTime.replace('-','.')}}
            h5 {{item.tenureUnit}}
            p
              span {{item.duty}}
      warning-info(
        @handleChangeBtn="handleChangeBtn"
        ref="warningInfo"
        :list="warningList"
        :listInfo="warningListInfo"
        :currentSelect="currentSelect"
      )
  </span>

</template>

<script>
import ScrollCom from 'components/ScrollCom'
import WarningInfo from 'components/WarningInfo'
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
  components: {
    WarningInfo,
    ScrollCom
  },
  data () {
    return {
      id: '',
      roleType: '',
      seniorExecutiveId: '',
      managerInfo: {},
      currentSelect: 0,
      queryParam: {
        startPage: 1,
        pageSize: 10,
        type: 1,
        administratorId: ''
      },
      warningBtns,
      warningList: [],
      warningListInfo: {},
      scrollY: -1
    }
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
    this.id = this.$route.query.id
    this.roleType = this.$route.query.roleType
    this.seniorExecutiveId = this.$route.query.seniorExecutiveId
    // this.id = 1547451652420
    // this.roleType = 11
    // this.seniorExecutiveId = 1547451501510
    this.getManagermessageInfo()
    this.getWarningListPart()
  },
  computed: {
    avatarName () {
      if (
        this.managerInfo &&
				this.managerInfo.legalPerson &&
				this.managerInfo.legalPerson.name
      ) {
        return this.managerInfo.legalPerson.name.slice(0, 1)
      } else {
        return ''
      }
    }
  },
  methods: {
    // 获取法人信息
    async getManagermessageInfo () {
      try {
        let param = {
          id: this.id,
          roleType: this.roleType,
          seniorExecutiveId: this.seniorExecutiveId
        }
        let result = await this.$api.manager.getManagermessageInfo(param)
        this.managerInfo = JSON.parse(result).data
      } catch (error) {}
    },
    // 舆情 - 获取舆情信息
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
        if (this.queryParam.startPage >= result.data.pages) {
          setTimeout(() => {
            this.$refs.scrollCom.forceUpdate()
          }, 200)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 舆情 - 重置舆情参数
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
    // 舆情 - 加载更多
    handleLoadMore () {
      if (this.queryParam.startPage >= this.warningListInfo.totalPages) {
        this.$refs.scrollCom.forceUpdate()
        return
      }
      this.queryParam.startPage++
      this.getWarningListPart()
    },
    // 舆情 - 切换
    handleChangeBtn (index) {
      this.currentSelect = index
      this.resetWarningListParam()
      this.getWarningListPart()
    },
    // 监听滚动
    scroll (pos) {
      this.scrollY = pos.y
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
.manager-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
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
	.main-part {
		height: 100%;
		background: #fff;
		border-radius: 20px 20px 0px 0px;
		.main-part-title {
			padding: 86px 36px;
			display: flex;
			justify-content: flex-start;
			.top-part-avatar {
				width: 144px;
				height: 144px;
				line-height: 144px;
				font-size: 50px;
			}
			.right {
				margin-left: 20px;
				margin-top: 18px;
				h3 {
					font-size: 42px;
					line-height: 44px;
					color: #000;
					font-weight: bold;
				}
				p {
					&:nth-of-type(1) {
						margin-top: 28px;
					}
					font-size: 24px;
					line-height: 40px;
					color: #666;
					span:nth-of-type(2) {
						margin-left: 24px;
					}
				}
			}
		}
		.main-part-info {
			padding: 0 36px;
			p {
				font-size: 24px;
				line-height: 48px;
				color: #999;
				&:nth-of-type(2) {
					font-size: 26px;
					color: #666;
					line-height: 50px;
					font-weight: bold;
					text-align: center;
				}
			}
		}
		.main-part-job {
			padding: 0 36px;
			h3 {
				padding: 28px 0;
				font-size: 36px;
				font-weight: bold;
				line-height: 56px;
				color: #333;
			}
			.el-timeline {
				.el-timeline-item__tail {
					margin-left: 16px;
					margin-top: 10px;
					background-color: #eee;
				}
				.el-timeline-item__node {
					margin-top: 8px;
					width: 30px;
					height: 30px;
					background: #b8b8b8;
					border: 6px solid #fff;
					box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
				}
				.el-timeline-item__content {
					margin-left: 44px;
					font-size: 28px;
					line-height: 50px;
					color: #666;
				}
				h5 {
					font-size: 32px;
					line-height: 44px;
					color: #666;
				}
				p {
					span {
						font-size: 24px;
						line-height: 50px;
						color: #999;
						margin-left: 24px;
						&:nth-of-type(1) {
							margin-left: 0;
						}
					}
				}
			}
		}
	}
}
</style>
