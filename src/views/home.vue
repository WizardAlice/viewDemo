<style scoped type="less">
  .home-card{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    .icon1{
      font-size: 100px;
      position: relative;
      top: -55px;
    }
    .icon2{
      font-size: 44px;
      position: relative;
      float: right;
      top: -10px;
      right: 13px;
    }
    .card-header{
      height:70px;
      color: #fff;
      padding: 16px 16px 0 16px;
      
    }
    .card-content{
      color: #9e9e9e;
      height: 165px;
      padding: 16px;
    }
  }


</style>

<template>
  <div class="home-card">
    <router-link to="/home" v-for="card in cards" :key="card.key">
      <Card style="width:100%;margin-left:20px;cursor:pointer;" :bordered="false">
        <div class="card-header" :style="card.style">
          <i slot="title" class="iconfont icon1">{{card.icon1}}</i>
          <i slot="extra" class="iconfont icon2">{{card.icon2}}</i>
        </div>
        <div class="card-content">
          <p v-for="content in card.contents">{{content}}</p>
        </div>
      </Card>
    </router-link>
  </div>
</template>

<script>
  import { Card } from 'iview'
  export default{
    data() {
      return {
        cards : [
          {
            key:"AI",
            icon1:"",
            icon2:"",
            contents:["监控和优化应用程序的代码性能、错误及SQL语句性能","支持Java、PHP、Ruby、Python、Node.js、.Net"],
            style:"background-image: linear-gradient(to right,rgb(30, 191, 94),rgb(0, 144, 58))"
          },
          {
            key:"MI",
            icon1:"",
            icon2:"",
            contents:["实时分析移动端用户体验","支持崩溃分析，网络请求分析，用户访问轨迹，业务性能分析"],
            style:"background-image: linear-gradient(to right,rgb(26, 224, 238),rgb(0, 178, 191))"
          },
          {
            key:"BI",
            icon1:"",
            icon2:"",
            contents:["实时分析真实用户用浏览器访问业务系统的性能","支持Ajax，用户访问轨迹，页面加载分析"],
            style:"background-image: linear-gradient(to right,rgb(91, 204, 255),rgb(0, 150, 218))"
          }
        ]
      }
    },
    components:{
      Card: Card
    }
  }
</script>

