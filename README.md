# iView-project

This project is build for Vue.js 2 + vue-router + webpack2 + iView 2, just install and run.

## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
// For the first time, run init to create index.html
npm run init
npm run dev
```
### Production(Build)
```bush
npm run build
```

在ruby on rails项目中使用vue单组件：
gem 'vuejs-rails'
gem 'rails-vue-loader'
添加到安装依赖中，安装之后，创建并注册vueinit.js文件。并在最外层的html的body的最后引入。

vueinit.js
...................................................................
//= require vue

//= require vueComponent/book  //引入要使用的组件（xxx.vue）

new Vue({
  el: '#app',
  components: {
    'mybook': VComponents.book
  }
})
....................................................................

在需要使用的标签（id为app）下面，直接使用<mybook name="suibian" />即可
