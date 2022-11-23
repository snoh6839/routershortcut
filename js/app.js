'use strict'

Vue.component('todo-footer', {
  template: '<footer><div class="inner"><h3><a href="#">footer-logo</a></h3></div></footer>'
});

const mainComp = {
  template: '<main><div class="container">main-content</div></main>'
};
const companyComp = {
  template: '<main><div class="container">company-content</div></main>'
};
const productComp = {
  template: '<main><div class="container">product-content</div></main>'
};
const galleryComp = {
  template: '<main><div class="container">gallery-content</div></main>'
};
const noticeComp = {
  template: '<main><div class="container">notice-content</div></main>'
};

const router = new VueRouter({
  routes: [{
      path: '/',
      component:  mainComp
    },
    {
      path: '/company',
      component:  companyComp
    },
    {
      path: '/product',
      component:
         productComp
    },
    {
      path: '/gallery',
      component:
         galleryComp
    },
    {
      path: '/notice',
      component:
         noticeComp
    }
  ]
})


const app = new Vue({
  el: '#app',
  data: {
    gnbList: [{
        text: 'company',
        path: 'company'
      },
      {
        text: 'product',
        path: 'product'
      },
      {
        text: 'gallery',
        path: 'gallery'
      },
      {
        text: 'notice',
        path: 'notice'
      }
    ]
  },
  router
})



// <li v-for="(index) in items">
//   {{path} - {template}}
// </li>

// const app = new Vue({
//   router
// }).$mount('#app')

// const app = new Vue({
//   data: {},
//   router
// }).$mount('#app')
