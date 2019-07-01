import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import buy from './buy'
import shopping from './shopping'
import find from './find'
import mine from './mine'
import hotmoviedesc from './hotmoviedesc'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'home'},
    home,buy,shopping,find,mine,hotmoviedesc
  ]
})
