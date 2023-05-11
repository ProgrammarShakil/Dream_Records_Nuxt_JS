export { default as MainComponentDashboardTopNav } from '../../components/MainComponent/DashboardTopNav.vue'
export { default as MainComponentSideMenuDashboard } from '../../components/MainComponent/SideMenuDashboard.vue'
export { default as IconsActiveAudio } from '../../components/Icons/ActiveAudio.vue'
export { default as IconsActiveEdit } from '../../components/Icons/ActiveEdit.vue'
export { default as IconsActiveHome } from '../../components/Icons/ActiveHome.vue'
export { default as IconsBack } from '../../components/Icons/Back.vue'
export { default as IconsCorrectionRequest } from '../../components/Icons/CorrectionRequest.vue'
export { default as IconsCross } from '../../components/Icons/Cross.vue'
export { default as IconsDrafts } from '../../components/Icons/Drafts.vue'
export { default as IconsInactiveAnalytics } from '../../components/Icons/InactiveAnalytics.vue'
export { default as IconsInactiveAudio } from '../../components/Icons/InactiveAudio.vue'
export { default as IconsInactiveCatalog } from '../../components/Icons/InactiveCatalog.vue'
export { default as IconsInactiveEarning } from '../../components/Icons/InactiveEarning.vue'
export { default as IconsInactiveEdit } from '../../components/Icons/InactiveEdit.vue'
export { default as IconsInactivePrimaryArtist } from '../../components/Icons/InactivePrimaryArtist.vue'
export { default as IconsInactiveReleaseAudio } from '../../components/Icons/InactiveReleaseAudio.vue'
export { default as IconsInactiveYoutube } from '../../components/Icons/InactiveYoutube.vue'
export { default as IconsLogo } from '../../components/Icons/Logo.vue'
export { default as IconsSettings } from '../../components/Icons/Settings.vue'
export { default as IconsSupportCenter } from '../../components/Icons/SupportCenter.vue'
export { default as IconsVolume } from '../../components/Icons/Volume.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
