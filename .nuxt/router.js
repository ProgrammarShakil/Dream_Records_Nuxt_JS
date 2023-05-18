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
const _fee0879e = () => interopDefault(import('../pages/primaryArtist/edit.vue' /* webpackChunkName: "pages/primaryArtist/edit" */))
const _4580c6cc = () => interopDefault(import('../pages/releaseAudio/show.vue' /* webpackChunkName: "pages/releaseAudio/show" */))
const _8f4881ec = () => interopDefault(import('../pages/youtubeRequest/addClaimRelease.vue' /* webpackChunkName: "pages/youtubeRequest/addClaimRelease" */))
const _87bbe2d8 = () => interopDefault(import('../pages/youtubeRequest/artistChannelReq.vue' /* webpackChunkName: "pages/youtubeRequest/artistChannelReq" */))
const _f4ecbe48 = () => interopDefault(import('../pages/youtubeRequest/contentIdReq.vue' /* webpackChunkName: "pages/youtubeRequest/contentIdReq" */))
const _18e6235a = () => interopDefault(import('../pages/catalog/_id.vue' /* webpackChunkName: "pages/catalog/_id" */))
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
    path: "/primaryArtist/edit",
    component: _fee0879e,
    name: "primaryArtist-edit"
  }, {
    path: "/releaseAudio/show",
    component: _4580c6cc,
    name: "releaseAudio-show"
  }, {
    path: "/youtubeRequest/addClaimRelease",
    component: _8f4881ec,
    name: "youtubeRequest-addClaimRelease"
  }, {
    path: "/youtubeRequest/artistChannelReq",
    component: _87bbe2d8,
    name: "youtubeRequest-artistChannelReq"
  }, {
    path: "/youtubeRequest/contentIdReq",
    component: _f4ecbe48,
    name: "youtubeRequest-contentIdReq"
  }, {
    path: "/catalog/:id",
    component: _18e6235a,
    name: "catalog-id"
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
