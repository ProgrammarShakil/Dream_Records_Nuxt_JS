import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da2dea2c = () => interopDefault(import('../pages/analytics/index.vue' /* webpackChunkName: "pages/analytics/index" */))
const _e6e65c06 = () => interopDefault(import('../pages/catalog/index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _1fef3f10 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _1f323dae = () => interopDefault(import('../pages/earning/index.vue' /* webpackChunkName: "pages/earning/index" */))
const _7dde530d = () => interopDefault(import('../pages/primaryArtist/index.vue' /* webpackChunkName: "pages/primaryArtist/index" */))
const _2fea1801 = () => interopDefault(import('../pages/releaseAudio/index.vue' /* webpackChunkName: "pages/releaseAudio/index" */))
const _01f0ba9f = () => interopDefault(import('../pages/primaryArtist/edit.vue' /* webpackChunkName: "pages/primaryArtist/edit" */))
const _51ef429e = () => interopDefault(import('../pages/releaseAudio/show.vue' /* webpackChunkName: "pages/releaseAudio/show" */))
const _b306ef10 = () => interopDefault(import('../pages/youtubeRequest/addClaimRelease.vue' /* webpackChunkName: "pages/youtubeRequest/addClaimRelease" */))
const _dbcb1a34 = () => interopDefault(import('../pages/youtubeRequest/artistChannelReq.vue' /* webpackChunkName: "pages/youtubeRequest/artistChannelReq" */))
const _65f4fe2e = () => interopDefault(import('../pages/youtubeRequest/contentIdReq.vue' /* webpackChunkName: "pages/youtubeRequest/contentIdReq" */))
const _b79da0b6 = () => interopDefault(import('../pages/catalog/_id.vue' /* webpackChunkName: "pages/catalog/_id" */))
const _92e95d1a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _da2dea2c,
    name: "analytics"
  }, {
    path: "/catalog",
    component: _e6e65c06,
    name: "catalog"
  }, {
    path: "/dashboard",
    component: _1fef3f10,
    name: "dashboard"
  }, {
    path: "/earning",
    component: _1f323dae,
    name: "earning"
  }, {
    path: "/primaryArtist",
    component: _7dde530d,
    name: "primaryArtist"
  }, {
    path: "/releaseAudio",
    component: _2fea1801,
    name: "releaseAudio"
  }, {
    path: "/primaryArtist/edit",
    component: _01f0ba9f,
    name: "primaryArtist-edit"
  }, {
    path: "/releaseAudio/show",
    component: _51ef429e,
    name: "releaseAudio-show"
  }, {
    path: "/youtubeRequest/addClaimRelease",
    component: _b306ef10,
    name: "youtubeRequest-addClaimRelease"
  }, {
    path: "/youtubeRequest/artistChannelReq",
    component: _dbcb1a34,
    name: "youtubeRequest-artistChannelReq"
  }, {
    path: "/youtubeRequest/contentIdReq",
    component: _65f4fe2e,
    name: "youtubeRequest-contentIdReq"
  }, {
    path: "/catalog/:id",
    component: _b79da0b6,
    name: "catalog-id"
  }, {
    path: "/",
    component: _92e95d1a,
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
