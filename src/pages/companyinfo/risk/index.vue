<template lang="pug">
.risk-info-wrapper
  el-container.risk-info-layout
    el-aside.risk-info-sider
      scroll-com
        ul
          li(
            v-for="(item,index) in siderMenuList"
            :key="item.id"
            :class="current===index ? 'active' : ''"
            @click="switchCom(index)"
          )
            span {{item.name}}
            span {{item.num}}
    el-main.risk-info-content(ref="riskSrcollWrapper")
      .risk-info-title.flex-b
        h3 {{siderMenuList[current].name}} {{siderMenuList[current].num}}
        p(v-if="!dropdownList.length") 全部
          i.iconfont &#xe622;
        el-dropdown(v-if="dropdownList.length" trigger="click").risk-info-title-sp
          span.el-dropdown-link {{dropdownList[0].name}}
            i.iconfont &#xe622;
          el-dropdown-menu.risk-info-dropdown(slot="dropdown")
            el-dropdown-item(v-for="item in dropdownList" :key="item.id")
              div(@click="handleChoseFilter(item)") {{item.name}}
      scroll-com(
        ref="scrollCom"
        pullup
        pulldown
        :data="list"
        @scrollToEnd="handleLoadMore"
      )
        component(
          :is="currentTabComponent[current]"
          @comCreated="comCreated"
          @comDestory="comDestory"
          :list="list"
        )
</template>
<script>
import ScrollCom from 'components/ScrollCom'
import OpeningNotice from './component/OpeningNotice'
import LegalProceedings from './component/LegalProceedings'
import CourtAnnouncement from './component/CourtAnnouncement'
import BreakFaith from './component/BreakFaith'
import Executee from './component/Executee'
import JudicialAssistance from './component/JudicialAssistance'
import FilingInformation from './component/FilingInformation'
import AbnormalOperation from './component/AbnormalOperation'
import AdministrativeSanction from './component/AdministrativeSanction'
import EquityDisposal from './component/EquityDisposal'
import TaxArrears from './component/TaxArrears'
import JudicialAuction from './component/JudicialAuction'
import ClearInformation from './component/ClearInformation'
import LandPledge from './component/LandPledge'
import FinalCase from './component/FinalCase'

export default {
	components: {
		ScrollCom,
		OpeningNotice,
		LegalProceedings,
		CourtAnnouncement,
		BreakFaith,
		Executee,
		JudicialAssistance,
		FilingInformation,
		AbnormalOperation,
		AdministrativeSanction,
		EquityDisposal,
		TaxArrears,
		JudicialAuction,
		ClearInformation,
		LandPledge,
		FinalCase
	},
	data() {
		return {
			currentTabComponent: [
				'opening-notice',
				'legal-proceedings',
				'court-announcement',
				'break-faith',
				'executee',
				'judicial-assistance',
				'filing-information',
				'abnormal-operation',
				'administrative-sanction',
				'equity-disposal',
				'tax-arrears',
				'judicial-auction',
				'clear-information',
				'land-pledge',
				'final-case'
			],
			siderMenuList: [
				{
					id: 'announcement',
					name: '开庭公告',
					num: 1069
				},
				{
					id: 'lawsuit',
					name: '法律诉讼',
					num: 101
				},
				{
					id: 'court',
					name: '法院公告',
					num: ''
				},
				{
					id: 'dishonest',
					name: '失信信息',
					num: ''
				},
				{
					id: 'implement',
					name: '被执行人',
					num: ''
				},
				{
					id: 'judicialAid',
					name: '司法协助',
					num: ''
				},
				{
					id: 'courtRegister',
					name: '立案信息',
					num: ''
				},
				{
					id: 'abnormalPut/abnormalRemove',
					name: '经营异常',
					num: ''
				},
				{
					id: 'punish/creditChina',
					name: '行政处罚',
					num: ''
				},
				{
					id: 'equity',
					name: '股权出质',
					num: ''
				},
				{
					id: 'towntax',
					name: '欠税公告',
					num: ''
				},
				{
					id: 'judicialSale',
					name: '司法拍卖',
					num: ''
				},
				{
					id: 'clearing',
					name: '清算信息',
					num: ''
				},
				{
					id: 'landMortgages',
					name: '土地抵押',
					num: ''
				},
				{
					id: 'endCase',
					name: '终本案件',
					num: ''
				}
			],
			current: 0,
			queryParam: {
				startPage: 1,
				pageSize: 10,
				companyId: '',
				discriminate: 'announcement'
			},
			list: [],
			listInfo: {},
			dropdownList: []
		}
	},
	created() {
		// this.queryParam.companyId = this.$route.query.id
		this.queryParam.companyId = 1710
		this.getDataList()
	},
	methods: {
		resetParam() {
			this.list = []
			this.queryParam.startPage = 1
		},
		async getDataList() {
			try {
				let result = await this.$api.companyinfo
					.getShowVenture(this.queryParam)
					.then(res => {
						return JSON.parse(res)
					})
				this.list = this.list.concat(result.data.list)
				this.listInfo.totalPages = result.data.pages
			} catch (error) {
				console.log(error)
			}
		},
		// 加载更多
		handleLoadMore() {
			if (this.queryParam.startPage >= this.listInfo.totalPages) {
				this.$refs.scrollCom.forceUpdate()
				return
			}
			this.queryParam.startPage++
			this.getDataList()
		},
		// 切换组件
		switchCom(index) {
			this.current = index
			this.dropdownList = []
			this.resetParam()
			this.getDataList()
		},
		comCreated(type, dropdownList) {
			this.queryParam.discriminate = type
			if (dropdownList) this.dropdownList = dropdownList
		},
		comDestory() {
			this.$refs.scrollCom && this.$refs.scrollCom.scrollTo(0, 0)
			this.$refs.scrollCom && this.$refs.scrollCom.destroy()
			this.$refs.scrollCom && this.$refs.scrollCom._initScroll()
		},
		// 当有筛选时处理，暂时用不上
		handleChoseFilter(item) {
			this.queryParam.discriminate = item.id
			this.resetParam()
			this.getDataList()
		}
	}
}
</script>

<style lang="scss">
.risk-info-dropdown {
	width: calc(100% - 200px);
	top: 60px !important;
	left: 200px !important;
	background: #f8f8f8;
	padding: 27px 28px 27px 37px;
	margin: 0;
	box-shadow: none;
	border: none;
	box-sizing: border-box;
	.el-dropdown-menu__item {
		font-size: 26px;
		line-height: 56px;
		text-align: center;
		padding: 10px 0;
		&:focus,
		&:hover {
			border-radius: 8px;
			background: #1253fc;
			color: #fff;
		}
	}
}
.risk-info-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	.risk-info-layout {
		height: 100%;
	}
	.risk-info-sider {
		height: 100%;
		padding-bottom: 50px;
		background: #1253fc;
		ul {
			li {
				padding-left: 20px;
				margin-top: 21px;
				span {
					font-size: 28px;
					line-height: 77px;
					color: #fff;
					font-weight: 500;
					padding-left: 5px;
					&:nth-of-type(2) {
						font-size: 22px;
					}
				}
				&.active {
					background: #fff;
					span {
						color: #000;
					}
				}
			}
		}
	}
	.risk-info-content {
		height: 100%;
		padding: 0;
		padding-bottom: 76px;
		.risk-info-title {
			padding: 10px 35px;
			background: #f8f8f8;
			position: relative;
			z-index: 1;
			h3 {
				font-size: 30px;
				line-height: 56px;
				font-weight: bold;
				color: #222;
			}
			p {
				font-size: 18px;
				font-weight: 500;
				line-height: 56px;
				color: #666;
				i {
					font-size: 18px;
					color: #666;
					margin-left: 16px;
				}
			}
			.risk-info-title-sp {
				font-size: 18px;
				font-weight: 500;
				line-height: 56px;
				color: #666;
				outline: none;
				i {
					font-size: 18px;
					color: #666;
					margin-left: 16px;
				}
			}
		}
	}
}
</style>
