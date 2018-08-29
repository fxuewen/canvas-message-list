import Vue from 'vue'
import Router from 'vue-router'
import Root from '../pages/Root'
import Test from '../pages/Test'
import Test2 from '../pages/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Root,
      children: [
        {
          name: 'Test',
          path: '/root/test',
          component: Test
        },
        {
          name: 'Test2',
          path: '/root/test2',
          component: Test2
        }
      ],
      redirect: '/root/test'
    }
  ]
})
