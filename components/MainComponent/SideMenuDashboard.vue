<template>
  <div>
    <aside
      class="fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[18%]"
    >
      <div>
        <div class="-mx-6 px-6 py-4">
          <div class="flex items-start justify-between">
            <Logo class="cursor-pointer" />
            <div
              class="mx-2 font-bold text-xl primary-color cursor-pointer hidden md:block"
            >
              Dream records
            </div>
          </div>
          <!-- <button
            @click="$emit('closeSidebar')"
            class="font-bold text-lg border text-black md:hidden"
          >
            X
          </button> -->
        </div>

        <ul class="space-y-2 tracking-wide mt-8">
          <li>
            <NuxtLink
              to="/dashboard"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'dashboard'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <ActiveHome
                :color="
                  $route.path.split('/')[1] === 'dashboard'
                    ? '#783EFD'
                    : '#3C486B'
                "
              />
              <span class="-mr-1 font-medium">Dashboard</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/releaseAudio"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'releaseAudio'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactiveReleaseAudio
                :color="
                  $route.path.split('/')[1] === 'releaseAudio'
                    ? '#783EFD'
                    : '#F9D949'
                "
              />
              <span class="-mr-1 font-medium">Release Audio</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/catalog"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'catalog'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactiveCatalog
                :color="
                  $route.path.split('/')[1] === 'catalog'
                    ? '#783EFD'
                    : '#F45050'
                "
              />
              <span class="-mr-1 font-medium">Catalog</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/analytics"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'analytics'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactiveAnalytics
                :color="
                  $route.path.split('/')[1] === 'analytics'
                    ? '#783EFD'
                    : '#3C486B'
                "
              />
              <span class="-mr-1 font-medium">Analytics</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/primaryArtist"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'primaryArtist'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactivePrimaryArtist
                :color="
                  $route.path.split('/')[1] === 'primaryArtist'
                    ? '#783EFD'
                    : '#F9D949'
                "
              />
              <span class="-mr-1 font-medium">Primary Artist</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/youtubeRequest/addClaimRelease"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'youtubeRequest'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactiveYoutube
                :color="
                  $route.path.split('/')[1] === 'youtubeRequest'
                    ? '#783EFD'
                    : '#F45050'
                "
              />
              <span class="-mr-1 font-medium">Youtube Request</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/earning"
              class="relative px-4 py-1 flex items-center space-x-4 rounded-xl"
              :class="
                $route.path.split('/')[1] === 'earning'
                  ? ' primary-color from-sky-600 to-cyan-400'
                  : 'secondary-color from-sky-600 to-cyan-400'
              "
            >
              <InactiveEarning
                :color="
                  $route.path.split('/')[1] === 'earning'
                    ? '#783EFD'
                    : '#3C486B'
                "
              />
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
    Logo: () => import('@/components/Icons/Logo.vue'),
    ActiveHome: () => import('@/components/Icons/ActiveHome.vue'),
    InactiveAnalytics: () => import('@/components/Icons/InactiveAnalytics.vue'),
    InactiveCatalog: () => import('@/components/Icons/InactiveCatalog.vue'),
    InactiveReleaseAudio: () =>
      import('@/components/Icons/InactiveReleaseAudio.vue'),
    InactiveYoutube: () => import('@/components/Icons/InactiveYoutube.vue'),
    InactivePrimaryArtist: () =>
      import('@/components/Icons/InactivePrimaryArtist.vue'),
    InactiveCatalog: () => import('@/components/Icons/InactiveCatalog.vue'),
    InactiveEarning: () => import('@/components/Icons/InactiveEarning.vue'),
    SupportCenter: () => import('@/components/Icons/SupportCenter.vue'),
    CorrectionRequest: () => import('@/components/Icons/CorrectionRequest.vue'),
    Drafts: () => import('@/components/Icons/Drafts.vue'),
    InactiveAudio: () => import('@/components/Icons/InactiveAudio.vue'),
    InactiveEdit: () => import('@/components/Icons/InactiveEdit.vue'),
    ActiveAudio: () => import('@/components/Icons/ActiveAudio.vue'),
    ActiveEdit: () => import('@/components/Icons/ActiveEdit.vue'),
  },
};
</script>

<style></style>
