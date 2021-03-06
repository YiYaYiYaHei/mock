import Vue from 'vue';

/* 引入状态管理器 */
import store from './store/index.js';

/* 加载路由模块 */
import Router from 'vue-router';
import router from './router';
Vue.use(Router);

/* 引入element-ui组件库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 加载全局过滤器/指令 */
import GlobalComponent from "./components/index.js";
Vue.use(GlobalComponent);

/* 引入样式 */
import './styles/index.less';

/* 引入项目总入口 */
import Index from './pages/Index.vue';

Vue.config.productionTip = false;

/* 引入mockjs---start--- */
/**
 * require和import的区别实际就是：
 * import是es6的写法，require是commonjs的写法，import经过babel编译后，会转化成commonjs
 */

//方式一：
require('./mock/index.js');

//方式二：
// import "./mock/mock.js";

// 方式三:
/* if(process.env.NODE_ENV == 'development'){
  require('./mock/index')
} */
/* 引入mockjs---end--- */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    eventBus: new Vue()
  },
  render(creatElement) {
    if (this.$route.path === '/') {
      /* 此判断防止请求'/'路由报404 */
      return creatElement('div')
    }
    let layout = this.$route.meta.layout || 'main-layout';
    return creatElement(Index, {
      props: {
        layout
      }
    })
  }
});
