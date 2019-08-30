<template lang="pug">
.risk-info-wrapper
  el-container.risk-info-layout
    el-aside(width="216px").risk-info-sider
      scroll-com
        ul
          li(v-for="(item,index) in siderMenuList" :key="item.id" :class="current===index?'active':''" @click="current=index")
            span {{item.name}}
            span {{item.num}}
    el-main.risk-info-content(ref="riskSrcollWrapper")
      .risk-info-title.flex-b
        h3 {{siderMenuList[current].name}} {{siderMenuList[current].num}}
        p 全部
          i.iconfont &#xe622;
      scroll-com(ref="scrollCom")
        component(v-bind:is="currentTabComponent[current]" @destory="destory")
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
import EquityPledge from './component/EquityPledge'

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
    FinalCase,
    EquityPledge
  },
  data () {
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
        'final-case',
        'equity-pledge'
      ],
      current: 0,
      siderMenuList: [
        {
          id: 0,
          name: '开庭公告',
          num: 1069
        },
        {
          id: 1,
          name: '法律诉讼',
          num: 101
        },
        {
          id: 2,
          name: '法院公告',
          num: ''
        },
        {
          id: 3,
          name: '失信信息',
          num: ''
        },
        {
          id: 4,
          name: '被执行人',
          num: ''
        },
        {
          id: 5,
          name: '司法协助',
          num: ''
        },
        {
          id: 6,
          name: '立案信息',
          num: ''
        },
        {
          id: 7,
          name: '经营异常',
          num: ''
        },
        {
          id: 8,
          name: '行政处罚',
          num: ''
        },
        {
          id: 9,
          name: '股权出质',
          num: ''
        },
        {
          id: 10,
          name: '欠税公告',
          num: ''
        },
        {
          id: 11,
          name: '司法拍卖',
          num: ''
        },
        {
          id: 12,
          name: '清算信息',
          num: ''
        },
        {
          id: 13,
          name: '土地抵押',
          num: ''
        },
        {
          id: 14,
          name: '终本案件',
          num: ''
        },
        {
          id: 15,
          name: '股权质押',
          num: ''
        }
      ]
    }
  },
  methods: {
    destory () {
      this.$refs.scrollCom._initScroll()
    }
  }
}
</script>

<style lang="scss">
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
		}
	}
}
</style>
