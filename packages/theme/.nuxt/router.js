import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a79dd59c = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _8122bd88 = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _0ede36f4 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "" */))
const _427edb74 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _b02e73bc = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "" */))
const _01d0fd9e = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _29426d76 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _2c0f7d0c = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "_theme/pages/Checkout" */))
const _3c2ac49c = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "_theme/pages/Checkout/OrderReview" */))
const _e96c2548 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "_theme/pages/Checkout/Payment" */))
const _666ea990 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "_theme/pages/Checkout/PersonalDetails" */))
const _3319f570 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "_theme/pages/Checkout/Shipping" */))
const _5ffe5e22 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "_theme/pages/Checkout/ThankYou" */))
const _6dcc9956 = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "" */))
const _b8edbada = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "_theme/pages/Home" */))
const _dfab9846 = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _ff1ca578 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _18d1496e = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _499c387c = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _dbbbc720 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _4cb6043c = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _9311f5ba = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _3d9f6307 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _b8fdd02a = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "_theme/pages/Product" */))
const _697fcc5b = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _15beb7e9 = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "" */))
const _fcb11618 = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _a79dd59c,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _8122bd88,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _0ede36f4,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _427edb74,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _b02e73bc,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _01d0fd9e,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _29426d76,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _2c0f7d0c,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _3c2ac49c,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _e96c2548,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _666ea990,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _3319f570,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _5ffe5e22,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _6dcc9956,
    name: "home___de"
  }, {
    path: "/Home",
    component: _b8edbada,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _dfab9846,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _ff1ca578,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _18d1496e,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _499c387c,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _dbbbc720,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _4cb6043c,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _9311f5ba,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _3d9f6307,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _b8fdd02a,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _a79dd59c,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _8122bd88,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _0ede36f4,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _427edb74,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _b02e73bc,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _01d0fd9e,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _29426d76,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _2c0f7d0c,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _3c2ac49c,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _e96c2548,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _666ea990,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _3319f570,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _5ffe5e22,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _b8edbada,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _dfab9846,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _ff1ca578,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _18d1496e,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _499c387c,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _dbbbc720,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _4cb6043c,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _9311f5ba,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _3d9f6307,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _b8fdd02a,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _697fcc5b,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _15beb7e9,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _fcb11618,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _697fcc5b,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _15beb7e9,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _fcb11618,
    name: "category___en"
  }, {
    path: "/",
    component: _6dcc9956,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
