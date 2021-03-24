import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\_theme\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_vuescrollto_cfd90f5e from 'nuxt_plugin_vuescrollto_cfd90f5e' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_75513e60 from 'nuxt_plugin_cookieuniversalnuxt_75513e60' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginseo_728ccf8a from 'nuxt_plugin_pluginseo_728ccf8a' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_73f85e81 from 'nuxt_plugin_pluginrouting_73f85e81' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_cac7f6e4 from 'nuxt_plugin_pluginmain_cac7f6e4' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin24354e5a_591bafaf from 'nuxt_plugin_nuxtplugin24354e5a_591bafaf' // Source: .\\nuxt.plugin.24354e5a.js (mode: 'all')
import nuxt_plugin_plugin_7b029ba8 from 'nuxt_plugin_plugin_7b029ba8' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginslogger70fd12a4_84d53d5a from 'nuxt_plugin_pluginslogger70fd12a4_84d53d5a' // Source: .\\plugins.logger.70fd12a4.js (mode: 'all')
import nuxt_plugin_pluginsssr54afa388_692b9e80 from 'nuxt_plugin_pluginsssr54afa388_692b9e80' // Source: .\\plugins.ssr.54afa388.js (mode: 'all')
import nuxt_plugin_pluginscontextc145fd6a_4e0e83bb from 'nuxt_plugin_pluginscontextc145fd6a_4e0e83bb' // Source: .\\plugins.context.c145fd6a.js (mode: 'all')
import nuxt_plugin_meta_03eb66d4 from 'nuxt_plugin_meta_03eb66d4' // Source: .\\composition-api\\meta.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Vue Storefront","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"\u003E Boilerplate theme"},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_cfd90f5e === 'function') {
    await nuxt_plugin_vuescrollto_cfd90f5e(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_75513e60 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_75513e60(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_728ccf8a === 'function') {
    await nuxt_plugin_pluginseo_728ccf8a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_73f85e81 === 'function') {
    await nuxt_plugin_pluginrouting_73f85e81(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_cac7f6e4 === 'function') {
    await nuxt_plugin_pluginmain_cac7f6e4(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin24354e5a_591bafaf === 'function') {
    await nuxt_plugin_nuxtplugin24354e5a_591bafaf(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_7b029ba8 === 'function') {
    await nuxt_plugin_plugin_7b029ba8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginslogger70fd12a4_84d53d5a === 'function') {
    await nuxt_plugin_pluginslogger70fd12a4_84d53d5a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssr54afa388_692b9e80 === 'function') {
    await nuxt_plugin_pluginsssr54afa388_692b9e80(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontextc145fd6a_4e0e83bb === 'function') {
    await nuxt_plugin_pluginscontextc145fd6a_4e0e83bb(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_03eb66d4 === 'function') {
    await nuxt_plugin_meta_03eb66d4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
