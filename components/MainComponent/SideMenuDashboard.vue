<template>
  <div>
    <aside
      class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
    >
      <div>
        <div class="-mx-6 px-6 py-4">
          <div class="flex">
            <Logo class="cursor-pointer" />
            <div class="mx-2 font-bold text-xl primary-color cursor-pointer">
              Dream records
            </div>
          </div>
        </div>

        <ul class="space-y-2 tracking-wide mt-8">
          <li>
            <NuxtLink
              to="/dashboard"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl primary-color from-sky-600 to-cyan-400"
            >
              <ActiveHome />
              <span class="-mr-1 font-medium">Dashboard</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/releaseAudio"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveReleaseAudio />
              <span class="-mr-1 font-medium">Release Audio</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/catalog"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveCatalog />
              <span class="-mr-1 font-medium">Catalog</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/analytics"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveAnalytics />
              <span class="-mr-1 font-medium">Analytics</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/primaryArtist"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactivePrimaryArtist />
              <span class="-mr-1 font-medium">Primary Artist</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/youtubeRequest/addClaimRelease"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveYoutube />
              <span class="-mr-1 font-medium">Youtube Request</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/earning"
              class="relative px-4 py-1 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveEarning />
              <span class="-mr-1 font-medium">Earning</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <div class="flex justify-center items-center">
          <div><SupportCenter /></div>
          <div class="ml-3 secondary-color">Support Center</div>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  components: {
    Logo: () => import("@/components/Icons/Logo.vue"),
    ActiveHome: () => import("@/components/Icons/ActiveHome.vue"),
    InactiveAnalytics: () => import("@/components/Icons/InactiveAnalytics.vue"),
    InactiveCatalog: () => import("@/components/Icons/InactiveCatalog.vue"),
    InactiveReleaseAudio: () =>
      import("@/components/Icons/InactiveReleaseAudio.vue"),
    InactiveYoutube: () => import("@/components/Icons/InactiveYoutube.vue"),
    InactivePrimaryArtist: () =>
      import("@/components/Icons/InactivePrimaryArtist.vue"),
    InactiveCatalog: () => import("@/components/Icons/InactiveCatalog.vue"),
    InactiveEarning: () => import("@/components/Icons/InactiveEarning.vue"),
    SupportCenter: () => import("@/components/Icons/SupportCenter.vue"),
    CorrectionRequest: () => import("@/components/Icons/CorrectionRequest.vue"),
    Drafts: () => import("@/components/Icons/Drafts.vue"),
    InactiveAudio: () => import("@/components/Icons/InactiveAudio.vue"),
    InactiveEdit: () => import("@/components/Icons/InactiveEdit.vue"),
    ActiveAudio: () => import("@/components/Icons/ActiveAudio.vue"),
    ActiveEdit: () => import("@/components/Icons/ActiveEdit.vue"),
  },
};
</script>

<style></style>
