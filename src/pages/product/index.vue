<template lang="pug">
  .contenier
    .header_wrap

      .title_wrap
        .title 福复式附江苏优选专项私募
        .title_right
      .label
        span 其它类私募基金
        span 正在运作
      .duoyu
    .content_wrap
      .content_header
        .content_header_title 风险提示
        <ul v-for="item in headercontent" :key="item.id">
          <li class="content_header_content">{{ item.message1 }}</li>
        </ul>
        <button class="content_header_button" @click=""></button>
      <div class="manage_agent_wrap">
        <ul class="manage_agent">
          <li class="manage_agent_list" v-for = "(item1, index) of manageagent" :key = "index">
            <img src="../../assets/productimg/xiangsumiaobian.png">
            <div class="manager_product">
              <div class="manage_product_list">
                <span class="manager1">{{ item1.manager }}</span>
                <p class="product1">{{ item1.product }}</p>
              </div>

              <span class="company">{{ item1.company }}</span>
            </div>

          </li>

        </ul>

      </div>

      <div class="jibenxinxi">
        <div class="jibenxinxi_title">基本信息</div>
        <div class="mujitouzi_wrap">
          <ul class="mujitouzi">
             <li class="list1">
              <img class="mutou" src="../../assets/productimg/muji.png">
              <span>募集规模：</span>
              <span>{{muji}}</span>
              <span>亿</span>
             </li>
             <li class="list2">
              <img class="mutou" src="../../assets/productimg/icon投资期限.png">
              <span>投资期限：</span>
              <span>{{touzi}}</span>
              <span>个月</span>
             </li>

          </ul>
          <img class="download" src="../../assets/productimg/icon展开.png">
        </div>

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

</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      returnimg: require('../../assets/productimg/return.png'),
      likeimg: require('../../assets/productimg/like.png'),
      shareimg: require('../../assets/productimg/share.png'),
      youbiao: require('../../assets/productimg/youbiao.png'),

      headercontent: [
        {
          message1: '未按照要求进行产品更新或者其它原因等等等等等等等'
          // id: 1
        }
      ],
      manageagent: [

        {
          returnimg: require('../../assets/productimg/return.png'),
          manager: '管理人',
          product: '产品+',
          company: '深圳中诚信基金管理有限公司'
        },

        {

          manager: '托管人',
          product: '产品+',
          company: '深圳中诚信基金管理有限公司'
        }

      ],
      // 最后更新时间
      time: '2019.06.08',
      // 募集 投资

      muji: '10',
      touzi: '6',
      /// /舆情按钮
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
  }
}
</script>

<style lang="scss" scoped="scoped">
@import '../../assets/styles/reset.scss';
  .contenier{
    height: 1350px;
    overflow-y: auto;
  }
  .header_wrap {
    background: #0000FF;
    overflow: hidden;

    .title_wrap{
      display:flex;
      margin-bottom:20px;
      margin-top: 100px;
      .title{
        font-size:42px;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:48px;
        color:rgba(255,255,255,1);
        opacity:1;
        margin: 65px 0 0 32px;
      }
      .title_right{
        width:16px;
        height:16px;
        background:rgba(63,236,61,1);
        border-radius:50%;
        opacity:1;
        margin-top: 66px;
        margin-left: 8px;
      }
    }
    .label{
      margin-left:36px;
      span{
        font-size:24px;font-weight:500;opacity:1;color:rgba(255,255,255,1);font-family:PingFang SC;background: #2a65fc;
      }
      span:first-child{
        height: 49px;
        line-height: 49px;
        padding: 5px 19px 5px 16px;
        margin-right: 20px;
      }
      span:last-child{
        padding: 5px 25px 5px 26px;
      }
    }
    .duoyu{
      height: 66px;
      background: #0000FF;
    }
  }
  .content_wrap{
    // margin-top: -10px;
    border-radius:50%;
    .content_header{

      margin-top: 50px;
      margin-left: 36px;
      margin-bottom: 55px;
      display:flex;

      .content_header_title{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:bold;

        color:rgba(51,51,51,1);
        opacity:1;

      }
      .content_header_content{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:500;
        line-height:49px;
        color:#666666;
        opacity:1;
        width: 450px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 19px;
        margin-right: 49px;
      }
      .content_header_button{
        background: url(../../assets/productimg/youbiao.png) no-repeat;
        background-position: -20px ;
        width:44px;
        height:44px;

      }

    }
    .manage_agent_wrap{
      width: 750px;
      background: #f9f9f9;
      padding-left:37px;

      .manage_agent{
        display:flex;
        // overflow:hidden;
        overflow-y:auto;
        .manage_agent_list{
          background: #ffffff;
          display: flex;
          margin-top:40px;
          margin-bottom:40px;
          // height:40px;
          // background:red;
          img{
            margin-left: 27px;
            margin-right: 20px;
          }
          .manager_product{
            width:280px;
            margin-top:28px;
            margin-bottom:28px;
            .manage_product_list{
              display: flex;
              justify-content:space-between;
              .manager1{
                font-size:30px;
                font-family:PingFang SC;
                font-weight:bold;
                line-height:49px;
                color:rgba(51,51,51,1);
                opacity:1;
              }
              .product1{
                font-size:20px;
                font-family:PingFang SC;
                font-weight:bold;
                line-height:49px;
                color:rgba(187,193,206,1);
                opacity:1;
                height: 49px;
                border: 1px solid #BBC1CE;
                padding: 0 20px 0 20px;
                border-radius: 26px;
              }
            }
            .company{
              font-size:26px;
              font-family:PingFang SC;
              font-weight:500;
              line-height:36px;
              color:rgba(135,135,135,1);
              opacity:1;
              margin-top: 14px;
              margin-bottom: 20px;
            }
          }
        }
        .manage_agent_list{
          margin-right: 30px;
        }
      }

    }

    .beianxinxi_wrap{
      display:flex;
      position:relative;
      .beianxinxi_logo{
        background: url(../../assets/productimg/beianxinxi.png) no-repeat;
        background-size:224px 96px;
        width: 224px;
        height: 96px;
        background-attachment:absolute;
        margin-left:36px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        span{
          font-size:30px;
          font-family:PingFang SC;
          color:rgba(51,51,51,1);
          opacity:1;
          font-weight: bold;
        }

      }
      .time_wrap{
        margin-left:50px;

        .time{
          font-size:36px;
          font-family:Roboto;
          font-weight:bold;
          line-height:49px;
          color:rgba(51,51,51,1);
          opacity:1;
        }
        .updatetime{
          font-size:26px;
          font-family:PingFang SC;
          font-weight:500;
          line-height:49px;
          color:rgba(68,68,68,1);
          opacity:1;
        }
      }
      .youjian{
        width: 44px;
        height: 44px;
        position: absolute;
        right: 10px;
        bottom: 0;

      }
    }
    .jibenxinxi{
      margin-left: 36px;
      margin-top:38px;
      .jibenxinxi_title{
        font-size:36px;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:49px;
        color:rgba(51,51,51,1);
        opacity:1;
      }
      .mujitouzi_wrap{
        display: flex;
        margin-top: 24px;
        padding-top: 48px;
        padding-bottom: 48px;
        background:rgba(250,250,250,1);
        opacity:1;
        .mujitouzi{
          // margin-top: 24px;
          // padding-top: 48px;
          // padding-bottom: 48px;
          // background:rgba(250,250,250,1);
          // opacity:1;
          display:flex;
          flex-direction:column;
          justify-content:center;

          li{
            margin-left: 34px;
            display:flex;
            align-content:center;

            .mutou{
              width: 44px;
              height: 44px;
              margin-right:15px;
            }

            span{
              font-weight:bold;
              line-height:49px;
              color:rgba(51,51,51,1);
              opacity:1;
            }
            span:nth-child(1){
              font-size:26px;
              font-family:PingFang SC;
            }
            span:nth-child(2){
              font-size:28px;
              font-family:Roboto;
            }
            span:nth-child(3){
              font-size:28px;
              font-family:PingFang SC;
            }
          }

        }
        .download{
          width: 52px;
          height: 52px;
          margin-left: 300px;
          margin-top: 15px;
        }
      }
    }
    .yuqingmessage_wrap {
      margin-left: 36px;
      margin-bottom:48px;
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
          border-bottom: 1px solid #ccc;
          height:204px;

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
            .cajingtime{
              span{
                font-size:24px;
                font-family:PingFang SC;
                font-weight:500;
                line-height:39px;
                color:rgba(102,102,102,1);
                opacity:1;

              }
              span:first-child{
                margin-right: 16px;
              }
              span:last-child{
                font-weight: bold;
              }
            }
          }

          img {
            width: 235px;
            height: 168px;
          }
        }
        li:last-child{
          border-bottom: 0;
        }
        li:first-child{
          margin-top: 50px;
        }
      }
    }
  }

</style>
