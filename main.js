import Vue from 'vue'
import App from './App.vue'

const Foo = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./Foo.vue'], () => {
    resolve(require('./Foo.vue'))
  })
}

/* 实例化一个vue */
new Vue({
  el: '#app',
  render: h => h(App)
});
