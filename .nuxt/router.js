import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bc9c298 = () => interopDefault(import('../pages/analytics/index.vue' /* webpackChunkName: "pages/analytics/index" */))
const _73f39d2b = () => interopDefault(import('../pages/catalog/index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _ce2dcfb4 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _069908dc = () => interopDefault(import('../pages/earning/index.vue' /* webpackChunkName: "pages/earning/index" */))
const _59c0f88a = () => interopDefault(import('../pages/primaryArtist/index.vue' /* webpackChunkName: "pages/primaryArtist/index" */))
const _a2edccda = () => interopDefault(import('../pages/releaseAudio/index.vue' /* webpackChunkName: "pages/releaseAudio/index" */))
const _154334f0 = () => interopDefault(import('../pages/youtubeRequest/index.vue' /* webpackChunkName: "pages/youtubeRequest/index" */))
const _7d6b7034 = () => interopDefault(import('../pages/catalog/show.vue' /* webpackChunkName: "pages/catalog/show" */))
const _4580c6cc = () => interopDefault(import('../pages/releaseAudio/show.vue' /* webpackChunkName: "pages/releaseAudio/show" */))
const _aae1aabe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/analytics",
    component: _3bc9c298,
    name: "analytics"
  }, {
    path: "/catalog",
    component: _73f39d2b,
    name: "catalog"
  }, {
    path: "/dashboard",
    component: _ce2dcfb4,
    name: "dashboard"
  }, {
    path: "/earning",
    component: _069908dc,
    name: "earning"
  }, {
    path: "/primaryArtist",
    component: _59c0f88a,
    name: "primaryArtist"
  }, {
    path: "/releaseAudio",
    component: _a2edccda,
    name: "releaseAudio"
  }, {
    path: "/youtubeRequest",
    component: _154334f0,
    name: "youtubeRequest"
  }, {
    path: "/catalog/show",
    component: _7d6b7034,
    name: "catalog-show"
  }, {
    path: "/releaseAudio/show",
    component: _4580c6cc,
    name: "releaseAudio-show"
  }, {
    path: "/",
    component: _aae1aabe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
