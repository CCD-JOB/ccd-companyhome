<template lang="pug">
  <div class="container">

    <div class="personnal">
      <div class="personnal_jianjie">
        <div class="touxiang">{{touxiang}}</div>
        <div class="personnal_identify">
          <div class="personnal_name">{{personnalidentify.seniorExecutiveName}}</div>
          <div class="personnal_compenany">{{personnalidentify.administratorFullName}}</div>
          <div class="personnal_job">{{personnalidentify.duty}}</div>
        </div>
        <button>
          <span>+</span>
          <span>关注</span>
        </button>
      </div>
      <div class="personnal_jieshao">{{personnaljieshao}}</div>
      <div class="zhengshu">具有基金从业资格({{zhengshu}})</div>
    </div>
    <div class="workhistory_wrap">
      <div class="workhistory">工作履历</div>
      <Timeline>
        <TimelineItem v-for="(item2,index) in workhistorylist" :key="index">
          <p class="time_list">{{item2.startTime}}-{{item2.endTime}}</p>
          <p class="company_list">{{item2.tenureUnit}}</p>
          <p class="job_list">{{item2.duty}}</p>
        </TimelineItem>
      </Timeline>
    </div>
    <div class="yuqingmessage_wrap">
      <div class="yuqingmessage">舆情信息</div>
      <div class="yuqingbutton">
        <button>全部</button>
        <button>自身舆情</button>
        <button>周边舆情</button>
      </div>
      <ul>
        <li v-for="(item4,index2) in yuqinglist" :key="index2">
          <div class="yuqing_content_wrap">
            <div class="yuqing_content">{{item4.content}}</div>
            <div class="cajingtime">
              <span>{{item4.caijing}}</span>
              <span>{{item4.time}}</span>
            </div>
          </div>
          <img :src="item4.img" />
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {
  Timeline,
  TimelineItem
} from 'iview'
var h = document.documentElement.clientHeight
Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)
export default {
  data () {
    return {
      personnalidentify: {
        // personnalname: '易烊千玺',
        // personnalcompenany: '中国尤以戏衣股份有限公司',
        // personnaljob: ['法定代表人', '董事长']

      },
      touxiang: '',
      qualification: '',
      personnaljieshao: '易烊千玺，2000年11月28日生于湖南怀化，中国内地男歌手、舞者、演员，TFBOYS成员，就读于中央戏剧学院。2005年，首登电视荧屏，开始参演各类综艺节目。2009年，加入“飞炫少年”组合，两年后退出。2013年6月，获邀加入TF家族；8月，以TFBOYS形式出道。男主角配音，该片刷新法国动画电影在华票房纪录。',
      zhengshu: '',
      workhistorylist: [],
      yuqinglist: [{
        content: '信披预警不容忽视！刘鹤“八字方针”处置金融风险，阐你饭卡还能激发',
        caijing: '新浪财经',
        time: '2019.03.28',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567513478622&di=5c30b170e3528f24d04e1b2334084814&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F15%2F61%2Fb55283cc310f.jpg'
      },
      {
        content: '私募备战科创板：借公募通道打新，投资策略首次曝出新夫i阿里是否凤',
        caijing: '新浪财经',
        time: '2019.03.28',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567513478620&di=914e8e0ec88130636c81308fcf39f0fd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fee4e708a7c390377c21d44eadda3098add656c611c66c-QRfPr8_fw658'
      },
      {
        content: '金融风险监管上演“冰与火之歌”，这一集你一定不要错换个时间快乐回复',
        caijing: '新浪财经',
        time: '2019.03.28',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567513478617&di=bf33bd720ce5b3a3f632c037e3298b50&imgtype=0&src=http%3A%2F%2Ffile.elecfans.com%2Fweb1%2FM00%2F58%2F11%2FpIYBAFtRP5CAc_KOAAGZ9xooHHY045.jpg'
      }
      ]
    }
  },

  created () {
    // fetch('/tong/fund/getSeniorExecutive?id=1547451652420&roleType=12&seniorExecutiveId=1547451501508')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data.data.title);
    //   this.personnalidentify = data.data.title
    //   this.touxiang = data.data.title.seniorExecutiveName.substr(0,1);
    // })

    var getManagermessageobj = {
      id: '1547451652420',
      roleType: 12,
      seniorExecutiveId: 1547451501508
    }
    var congyezige = {
      id: '1547451652420',
      roleType: 11,
      seniorExecutiveId: 1547451501508
    }
    this.$api.manager.getManagermessage(getManagermessageobj)
      .then(res => JSON.parse(res))
      .then(data => {
        console.log(data.data.title)
        this.personnalidentify = data.data.title
        this.touxiang = data.data.title.seniorExecutiveName.substr(0, 1)
      })
    this.$api.manager.getManagermessage(congyezige)
      .then(res => JSON.parse(res))
      .then(data => {
        console.log(data.data)
        var exec = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(data.data.seniorExecutives[0].qualification)
        const exec2 = exec[2]
        console.log(exec2)
        this.zhengshu = exec2
        this.workhistorylist = data.data.workResumeList
        console.log(data.data.workResumeList)
      })

    //       fetch('/tong/fund/getSeniorExecutive?id=1547451652420&roleType=11&seniorExecutiveId=1547451501508')
    //         .then(res => res.json())
    //         .then(data => {
    //           console.log(data.data.workResumeList);
    //
    //           var exec = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(data.data.seniorExecutives[0].qualification);
    //           const exec2 = exec[2]
    //           console.log(exec2);
    //           this.zhengshu = exec2;
    //           this.workhistorylist = data.data.workResumeList;
    //           console.log(data.data.workResumeList)
    //           let iterable = new Map(data.data.workResumeList);
    //           for (let [key, value] of iterable) {
    //             console.log(value);
    //             console.log(key)
    //           }
    //
    //
    //         })
  }
}
</script>
<style lang="scss" scoped="scoped">
  @import '../../assets/styles/reset.scss';

  .container {
    height: 1350px;
    overflow-y: auto;

    .personnal {
      .personnal_jianjie {
        position: relative;
        display: flex;

        .touxiang {
          margin-top: 160px;
          margin-left: 36px;
          margin-right: 20px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          font-size: 70px;
          text-align: center;
          line-height: 140px;
          background: #1253fc;
          color: #ffffff;
        }

        .personnal_identify {
          .personnal_name {
            font-size: 42px;
            font-family: PingFang SC;
            font-weight: 800;
            // line-height:44px;
            color: rgba(0, 0, 0, 1);
            opacity: 1;
            margin-top: 185px;
            margin-bottom: 28px;
          }

          .personnal_compenany {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            // line-height:44px;
            color: rgba(102, 102, 102, 1);
            opacity: 1;
            margin-bottom: 8px;
          }

          .personnal_job {
            display: inline;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            // line-height:49px;
            color: rgba(102, 102, 102, 1);
            opacity: 1;
            margin-right: 24px;
          }
        }

        button {
          width: 140px;
          height: 58px;
          background: rgba(18, 83, 252, 1);
          box-shadow: 7px 12px 30px rgba(18, 83, 252, 0.18);
          opacity: 1;
          position: absolute;
          top: 220px;
          right: 36px;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;

          span:first-child {
            font-size: 36px;
            font-family: PingFang SC;
            font-weight: 800;
            line-height: 49px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;

          }

          span:last-child {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 800;
            line-height: 49px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            margin-left: 10px;
          }
        }
      }

      .personnal_jieshao {
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 48px;
        color: rgba(153, 153, 153, 1);
        opacity: 1;
        width: 88%;
        margin: 40px auto;
      }

      .zhengshu {
        text-align: center;
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 49px;
        color: rgba(102, 102, 102, 1);
        opacity: 1;
        padding: 20px 0 20px 0;
        border-top: 2px solid rgba(238, 238, 238, 1);
        border-bottom: 2px solid rgba(238, 238, 238, 1);
        width: 88%;
        margin: 0 auto;
      }
    }

    .workhistory_wrap {
      margin-left: 36px;

      .workhistory {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 56px;
        color: rgba(34, 34, 34, 1);
        opacity: 1;
        margin-top: 42px;
        margin-bottom: 39px;
      }

      .ivu-timeline {
        .ivu-timeline-item {
          .ivu-timeline-item-content {
            .time_list {
              font-size: 28px;
              font-family: Roboto;
              font-weight: 500;
              line-height: 49px;
              color: rgba(102, 102, 102, 1);
              opacity: 1;
            }

            .company_list {
              font-size: 32px;
              font-family: PingFang SC;
              font-weight: 500;
              line-height: 44px;
              color: rgba(102, 102, 102, 1);
              opacity: 1;
              margin-top: 20px;
              margin-bottom: 6px;
            }

            .job_list {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: 500;
              line-height: 49px;
              color: rgba(153, 153, 153, 1);
              opacity: 1;
              margin-right: 20px;
              display: inline;
            }
          }
        }
      }
    }

    .yuqingmessage_wrap {
      margin-left: 36px;

      .yuqingmessage {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 49px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
        margin-top: 70px;
        margin-bottom: 30px;
      }

      .yuqingbutton {
        margin-bottom: 25px;

        button {
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 49px;
          opacity: 1;
          padding: 11px 34px;
          border-radius: 34px;
          border: 5px solid rgba(242, 242, 242, 1);
          margin-right: 26px;
        }

        button:first-child {
          background: #1253FC;
          color: rgba(255, 255, 255, 1);
          border: 5px solid #1253FC;
        }
      }

      ul {
        li {
          display: flex;
          margin: 25px 0 36px 0;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          height: 204px;

          .yuqing_content_wrap {
            width: 420px;

            .yuqing_content {
              font-size: 32px;
              font-family: PingFang SC;
              font-weight: 500;
              line-height: 46px;
              color: rgba(68, 68, 68, 1);
              opacity: 1;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-right: 6px;
              margin-bottom: 42px;
            }

            .cajingtime {
              span {
                font-size: 24px;
                font-family: PingFang SC;
                font-weight: 500;
                line-height: 39px;
                color: rgba(102, 102, 102, 1);
                opacity: 1;
              }

              span:first-child {
                margin-right: 16px;
              }

              span:last-child {
                font-weight: bold;
              }
            }
          }

          img {
            width: 235px;
            height: 168px;
          }
        }

        li:first-child {
          margin-top: 50px;
        }

        li:last-child {
          border-bottom: 0;
        }
      }

    }

  }
</style>
