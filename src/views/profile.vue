<style scoped type="less">
  .profile{
    height: 100%;
    .title{
      span{
        display: inline-flex;
        margin: 10px 0 10px 33px;
      }
      h1{
        color: rgb(55, 53, 54);
      }
      h3{
        color: rgb(130, 130, 130);
        padding: 14px 0 0 20px;
      }
    }
    .profile-content{
      height: 70%;
      width: 100%;
      .profile-row{
        color: rgb(55, 53, 54);
        height: 100%;
        background-color: #fff;
      }
    }
  }
</style>

<template>
  <div class="profile">
    <div class="title">
      <span><h1>个人信息</h1><h3>查看或修改个人信息</h3></span>
    </div>
    <div class="profile-content">
      <Rowi type="flex" justify="center" align="top" class="profile-row">
        <Coli span="12">
          <h4 style="margin-left:24px">账户</h4>
          <hr>
        </Coli>
        <Coli span="12">
        </Coli>
      </Rowi>
    </div>
  </div>
</template>

<script>
  import { Button , Row ,Col} from 'iview'
  export default{
    data() {
      return {
        data : [{
          email: "tpm@oneapm.com",
          phone: "13245678946",
          name: "Oneapm",
        }]
      }
    },
    components: {
      Buttoni: Button,
      Rowi: Row,
      Coli: Col
    },
    methods: {
      
    }
  }
</script>