<template lang="pug">
.product-wrapper
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
      el-badge.top-part-iv-badge(is-dot)
        h3 {{productInfo.fullName}}
      .top-part-btns
        el-button(type="primary") {{productInfo.type}}
        el-button(type="primary") 正在运作
    .main-part
      .main-part-info(@click="isHomeAlertGoDialogVisible = true") 风险提示
        span 未按要求进行产品更新或着其他原因呵呵呵呵呵
        i.iconfont &#xe64d;
      .main-part-slide
        .swiper-container
          .swiper-wrapper
            .swiper-slide(v-for="item in productInfo.array" :key="item.value")
              .content
                img(src="./img/bird.png")
                .info
                  .flex-b
                    h5 {{item.name}}
                    el-button(round) 产品
                  p {{item.value}}
      .main-part-job.flex-s(@click="isHomeAlertGoDialogVisible=true")
        h3 备案信息
        .flex-e
          div
            p {{productInfo.latestUpdateTime}}
            p 最后更新时间
          i.iconfont &#xe64d;
      .main-part-basic
        h3 基本信息
        .basic.flex-b
          div
            p
              i.iconfont &#xe6b6;
              span 募集规模： {{productInfo.collectScale}}
            p
              i.iconfont &#xe62c;
              span 投资期限： {{productInfo.investPeriod}}
          i.iconfont(v-show="!showMinute" @click="switchMinute") &#xe64c;
          i.iconfont(v-show="showMinute" @click="switchMinute") &#xe64b;
        .minute(v-show="showMinute")
          p
            i.iconfont &#xe625;
            span 投资门槛： {{productInfo.investThreshold}}
          p
            i.iconfont &#xe609;
            span 付息方式： {{productInfo.paymentMethod}}
          p
            i.iconfont &#xe652;
            span.spec 费用标准：
              em 托管费/年 {{productInfo.hostingFee}}
            span.spec
              em 管理费/年 {{productInfo.managementFee}}
          p
            i.iconfont &#xe6d3;
            span 投资范围：
            p {{productInfo.investRange}}
      warning-info(
        @handleChangeBtn="handleChangeBtn"
        ref="warningInfo"
        :list="warningList"
        :listInfo="warningListInfo"
        :currentSelect="currentSelect"
      )
  home-modal(title="提示" :isHomeModalVisible="isHomeAlertGoDialogVisible" @close="isHomeAlertGoDialogVisible=false")
    .home-alert-go-download-slot
      h2 请下载app进行体验
      div
        el-button(type="primary" @click="goDownload") 去下载
  </span>

</template>

<script>
import ScrollCom from 'components/ScrollCom'
import Swiper from 'swiper'
import HomeModal from 'components/HomeModal'
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
    ScrollCom,
    HomeModal
  },
  data () {
    return {
      id: '',
      productInfo: {},
      showMinute: false,
      isHomeAlertGoDialogVisible: false,
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
    this.getWarningListPart()
    this.getBasicInfo()
  },
  methods: {
    async getBasicInfo () {
      try {
        let param = {
          productId: 1547452014555,
          type: 1
        }
        let result = await this.$api.product.getProductBasicInfo(param)
        this.productInfo = JSON.parse(result).data
        this.$nextTick(() => {
          this.initSwiper()
        })
      } catch (error) {}
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
        if (this.queryParam.startPage >= result.data.pages) {
          setTimeout(() => {
            this.$refs.scrollCom.forceUpdate()
          }, 200)
        }
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
    // 切换详情
    switchMinute () {
      this.showMinute = !this.showMinute
    },
    initSwiper () {
      this.mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesOffsetAfter: 500
      })
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
  beforeDestroy () {
    this.mySwiper.destroy(false)
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
.product-wrapper {
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
	.top-part {
		padding: 50px 36px 100px;
		background: #1253fc;
		.el-badge.top-part-iv-badge {
			h3 {
				font-size: 42px;
				line-height: 48px;
				font-weight: bold;
				color: #fff;
			}
			.el-badge__content {
				width: 10px;
				height: 10px;
				margin-right: -10px;
			}
		}

		.top-part-btns {
			margin-top: 12px;
			.el-button {
				font-size: 24px;
				line-height: 50px;
				padding: 5px 24px;
				background: rgba(255, 255, 255, 0.1);
				border: none;
				margin-right: 20px;
			}
		}
	}
	.main-part {
		height: 100%;
		margin-top: -50px;
		background: #fff;
		border-radius: 60px 60px 0px 0px;
		.main-part-info {
			color: #333;
			font-size: 28px;
			line-height: 48px;
			font-weight: bold;
			padding: 50px 36px;

			span {
				vertical-align: bottom;
				margin-left: 10px;
				font-weight: normal;
				display: inline-block;
				width: 510px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: break-all;
				color: #666;
			}
			i {
				font-size: 30px;
				vertical-align: bottom;
				color: #666;
			}
		}
		.main-part-slide {
			padding: 20px 36px;
			.swiper-wrapper {
				margin: 0 36px 10px;
				.swiper-slide {
					width: 400px !important;
					height: 150px;
					padding: 30px;
					background: #fff;
					box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.12);
					border-radius: 20px;
					.content {
						display: flex;
						justify-content: space-between;
						img {
							width: 70px;
							height: 70px;
						}
						.info {
							padding-left: 20px;
							h5 {
								font-size: 30px;
								line-height: 50px;
								font-weight: bold;
							}
							.el-button {
								font-size: 20px;
								font-weight: bold;
								line-height: 50px;
								padding: 0 30px;
								color: #bbc1ce;
								border-radius: 60px;
								border: 2px solid #bbc1ce;
							}
							p {
								margin-top: 10px;
								font-size: 26px;
								font-weight: bold;
								line-height: 36px;
								color: #878787;
							}
						}
					}
				}
			}
		}
		.main-part-job {
			padding: 30px 36px 0;
			h3 {
				font-size: 26px;
				line-height: 44px;
				color: #333;
				font-weight: bold;
				background: url('./img/bg.png') no-repeat;
				background-size: contain;
				padding: 30px 60px;
				text-align: center;
			}
			div:nth-of-type(1) {
				p {
					padding-left: 50px;
					font-size: 36px;
					line-height: 50px;
					font-weight: bold;
					color: #333;
					&:nth-of-type(2) {
						font-size: 26px;
						line-height: 50px;
						font-weight: normal;
						color: #444;
					}
				}
			}
			i {
				font-size: 30px;
				vertical-align: bottom;
				color: #666;
				padding-left: 180px;
			}
		}
		.main-part-basic {
			padding: 20px 36px 0;
			h3 {
				padding: 28px 0;
				font-size: 36px;
				font-weight: bold;
				line-height: 56px;
				color: #333333;
			}
			.basic {
				background: #fafafa;
				padding: 20px;
			}
			.minute {
				background: #f6f6f6;
				padding: 30px 20px 0;
			}
			p {
				padding-top: 20px;
				i {
					font-size: 38px;
					color: #000;
					font-weight: bold;
					vertical-align: middle;
				}
				span {
					font-size: 26px;
					line-height: 50px;
					color: #333333;
					font-weight: bold;
					margin-left: 20px;
					&.spec:nth-of-type(2) {
						display: block;
						em {
							margin-left: 168px;
						}
					}
				}
			}
			i {
				font-size: 80px;
				color: #000;
			}
		}
	}
}
</style>
