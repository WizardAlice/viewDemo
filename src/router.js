import login from './views/login.vue'
import layout from './views/layout.vue'
import home from './views/home.vue'
import manager from './views/manager.vue'
import groups from './views/groups.vue'
import profile from './views/profile.vue'
import usermanager from './views/usermanager'
import license from './views/license.vue'
import log from './views/log.vue'


const routers = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    meta: {
        title: ''
    },
    component: login,
  },
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: '/',
        component: home
      },
      {
        path: 'manager',
        component: manager,
        children: [
          {
            path: '/home/manager',redirect: '/home/manager/profile'
          },
          {
            path:'profile',
            component: profile
          },
          {
            path: 'groups',
            component: groups
          },
          {
            path: 'usermanager',
            component: usermanager
          },
          {
            path: 'license',
            component: license
          },
          {
            path: 'log',
            component: log
          }
        ]
      }
    ]
  }
];
export default routers;

//groups的位置换成别的，是这个页面所有的父页面，默认为个人信息