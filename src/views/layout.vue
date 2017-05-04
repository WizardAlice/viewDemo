<style scoped type="less">
  a{
    color: #fff;
    &:hover{
      color: rgb(92, 173, 255);
    };
  }
  .layout {
    color: #fff;
    display: flex;
    flex-direction:column;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height:40px;
      width: 100%;
      background-color: rgb(55, 53, 54);
      .logo {
        font-size: 25px;
        margin-left: 20px;
        color: #fff;
        .logo-link{
          padding-right: 8px;
          border-right: 2px solid #fff;
          margin-right: 8px;
          i{
            color: #fff; 
            &:hover{
              color: rgb(92, 173, 255);
            }
          }
         
        }
        .current{
          font-size: 14px;
          position: relative;
          bottom: 5px;
        }
      }
      .account{
        margin-right: 30px;
      }
    }
    .content{
      flex:1;
      width:100%;
    }
    .footer{
      display: flex;
      justify-content: flex-end;
      color: #5a6169;
      font-size: 12px;
    }
  }
</style>

<template>
  <div class="layout">
    <div class="header">
      <div class="logo"><router-link to="/home" class="logo-link"><i class="iconfont logo">&#xe616;</i></router-link><span class="current">{{current}}</span></div>
      <div class="account">
        <Dropdown class="account">
          <a href="javascript:;">
            <i class="iconfont">&#xe601;</i>
            {{userName}}
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list" style="background-color:#000;">
            <Dropdown placement="left-start">
              <DropdownItem to="/home"><a href="javascript:;"><i class="iconfont">&#xe66e;</i>&nbsp;&nbsp;切换团队信息</a></DropdownItem>
              <DropdownMenu slot="list" style="background-color:#000;">
                <DropdownItem v-for="team in teams" :key="team.name">
                  <router-link to="/home">{{team.name}}</router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <DropdownItem>
              <router-link to="/home/manager/groups"><i class="iconfont">&#xe633;</i>&nbsp;&nbsp;团队信息</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe652;</i>&nbsp;&nbsp;控制台</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe601;</i>&nbsp;&nbsp;个人信息</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe6ba;</i>&nbsp;&nbsp;用户管理</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe69c;</i>&nbsp;&nbsp;license管理</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe668;</i>&nbsp;&nbsp;操作记录</router-link>
            </DropdownItem>
            <DropdownItem>
              <router-link to="/home"><i class="iconfont">&#xe636;</i>&nbsp;&nbsp;退出</router-link>
            </DropdownItem>
          </DropdownMenu>  
        </Dropdown>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Copyright © 2008-2016 北京蓝海讯通科技股份有限公司 京ICP备14028342号 京公网安备 11010802016192号</p>
    </div>
  </div>
</template>

<script>
  import { Dropdown , DropdownMenu ,DropdownItem ,Icon} from 'iview'
  export default{
    data() {
      return {
        current: "用户管理中心",
        userName: "OneAPM",
        data : [],
        teams:[
        {name:"OneAPM"},
        {name:"test01"},
        {name:"test02"}
        ]
      }
    },
    components: {
      Dropdown: Dropdown,
      DropdownMenu: DropdownMenu,
      DropdownItem: DropdownItem,
      Icon: Icon
    }
  }
</script>