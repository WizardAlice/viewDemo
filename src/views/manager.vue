<style scoped type="less">
  .manager{
    height: 100%;
    .manager-row{
      height:100%;
    }
    .manager-col-left{
      height: 100%;
      background-color: #e1e1e1;
      i{
        color: rgb(153, 153, 153);
      }
     .ivu-menu-item-active{
      background-color: #458df9;
      i{
        color: #fff;
      }
     }
    }
    .manager-col-right{
      height: 100%;
    }
  }
</style>

<template>
  <div class="manager">
    <Rowi type="flex" justify="start" align="top" class="manager-row">
      <Coli span="4" class="manager-col-left">
        <Menui style="background: transparent;width: 100%;" :active-name="current">
          
          <MenuItemi name="profile">
            <router-link to="profile" class="menulink">
              <i class="iconfont">&#xe623;个人信息</i>
            </router-link>
          </MenuItemi>
          
          
          <MenuItemi name="groups">
            <router-link to="groups">
              <i class="iconfont">&#xe633;团队信息</i>
            </router-link>
          </MenuItemi>
          
          
          <MenuItemi name="usermanager">
            <router-link to="usermanager">
              <i class="iconfont">&#xe6ba;用户管理</i>
            </router-link>
          </MenuItemi>
          
          
          <MenuItemi name="license">
            <router-link to="license">
              <i class="iconfont">&#xe69c;license管理</i>
            </router-link>
          </MenuItemi>
          
          
          <MenuItemi name="log">
            <router-link to="log">
              <i class="iconfont">&#xe668;操作记录</i>
            </router-link>
          </MenuItemi>
          
        </Menui>
      </Coli>
      <Coli span="20" class="manager-col-right">
        <router-view></router-view>
      </Coli>
    </Rowi>
  </div>
</template>

<script>
  import { Row , Col , Menu , MenuItem } from 'iview'
  export default{
    data() {
      return {
        data : [],
      }
    },
    computed: {
      current: function(){
        return this.$route.path.split('/').pop()
      }
    },
    components: {
      Rowi: Row,
      Coli: Col,
      Menui: Menu,
      MenuItemi: MenuItem
    }
  }
</script>