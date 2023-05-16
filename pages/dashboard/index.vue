<template>
  <div>
    <!-- menubar -->
    <SideMenuDashboard />
    <!-- /menubar -->

    <!-- content area -->

    <div class="bg-dash ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- top nav area  -->
      <DashboardTopNav />
      <!-- /top nav area  -->

      <div class="px-3 pt-6 2xl:container">
        <!-- /nav alert  -->
        <Alert
          v-if="getDashboardNotice.shown"
          :message="getDashboardNotice.message"
          @closed="$store.commit('settings/closeDashboardNotice')"
        />
        <!-- /nav alert  -->

        <!-- content center  -->
        <div class="lg:flex">
          <div class="lg:w-2/3 w-full h-full px-2">
            <!-- 3 in cards  -->
            <div class="lg:flex lg:space-x-4 text-white">
              <div
                class="lg:w-1/3 lg:min-h-[160px] h-full py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-cyan-400 to-blue-600"
              >
                <h5 class="text-xl">Total Created Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>

              <div
                class="lg:w-1/3 lg:min-h-[160px] h-full py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-teal-400 to-teal-800"
              >
                <h5 class="text-xl">Total Pending Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>

              <div
                class="lg:w-1/3 lg:min-h-[160px] h-full py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-rose-400 to-rose-600"
              >
                <h5 class="text-xl">Total Final Release Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>
            </div>
            <!-- /3 in cards  -->

            <!--  Overview -->
            <div
              class="h-full sm:mb-3 py-6 mt-6 px-6 rounded-xl border border-gray-200 bg-white"
            >
              <div class="flex justify-between items-center">
                <div>
                  <h5 class="text-xl text-gray-700">Overview</h5>
                </div>
                <div>
                  <!-- select option  -->
                  <div class="relative inline-block text-left">
                    <div @click="dropControll()">
                      <button
                        type="button"
                        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Month
                        <svg
                          class="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      :class="{ custHide: optionControl }"
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                          >Account settings</a
                        >
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                          >Support</a
                        >
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                          >License</a
                        >
                      </div>
                    </div>
                  </div>
                  <!-- /select option  -->
                </div>
              </div>
              <div class="my-8">
                <!-- chart will be shown here -->
                <div class="space-y-16">
                  <div>Chart</div>
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
                <!-- /chart will be shown here -->
              </div>
            </div>
            <!--  /Overview -->
          </div>

          <!-- Correction Requested and Drafts -->
          <div class="lg:w-1/3 w-full h-full px-6">
            <!-- Correction Requested  -->
            <div class="h-full mb-6 rounded-xl border border-gray-200 bg-white">
              <div class="flex items-center ml-4">
                <div><CorrectionRequest /></div>
                <div>
                  <h5 class="text-lg px-4 text-gray-900 font-medium py-3">
                    Correction Requested
                  </h5>
                </div>
              </div>
              <hr />
              <div>
                <!-- row -->
                <div
                  class="flex justify-between p-3 items-center"
                  v-for="item in [1, 2, 3]"
                  @mouseover="hoveredCorrection = item"
                  @mouseleave="hoveredCorrection = null"
                  :key="item"
                  :class="
                    hoveredCorrection === item ? 'bg-indigo-600 rounded-md' : ''
                  "
                >
                  <div class="flex justify-start space-x-3 items-center">
                    <div>
                      <InactiveAudio
                        :color="hoveredCorrection === item ? '#fff' : '#8A8B9F'"
                      />
                    </div>
                    <div
                      :class="
                        hoveredCorrection === item
                          ? 'text-white'
                          : 'secondary-color'
                      "
                    >
                      Lolipop
                    </div>
                  </div>
                  <div>
                    <InactiveEdit
                      :color="hoveredCorrection === item ? '#fff' : '#8A8B9F'"
                    />
                  </div>
                </div>
                <!-- /row -->
                <hr />
              </div>
            </div>
            <!-- /Correction Requested  -->
            <!-- Drafts -->
            <div class="h-full mb-6 rounded-xl border border-gray-200 bg-white">
              <div class="flex items-center ml-4">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div>
                      <Drafts />
                    </div>
                    <div>
                      <h5 class="text-lg px-4 text-gray-900 font-medium py-3">
                        Drafts
                      </h5>
                    </div>
                  </div>
                  <div class="lg:ml-20">5 Items</div>
                </div>
              </div>
              <hr />
              <div>
                <!-- row -->
                <div
                  class="flex justify-between p-3 items-center"
                  v-for="item in [1, 2, 3, 4, 5]"
                  @mouseover="hoveredDrafts = item"
                  @mouseleave="hoveredDrafts = null"
                  :key="item"
                  :class="
                    hoveredDrafts === item ? 'bg-indigo-600 rounded-md' : ''
                  "
                >
                  <div class="flex justify-start space-x-3 items-center">
                    <div>
                      <InactiveAudio
                        :color="hoveredDrafts === item ? '#fff' : '#8A8B9F'"
                      />
                    </div>
                    <div
                      :class="
                        hoveredDrafts === item
                          ? 'text-white'
                          : 'secondary-color'
                      "
                    >
                      Lolipop
                    </div>
                  </div>
                  <div>
                    <InactiveEdit
                      :color="hoveredDrafts === item ? '#fff' : '#8A8B9F'"
                    />
                  </div>
                </div>
                <!-- /row -->
                <hr />
              </div>
            </div>
            <!-- /Drafts -->
          </div>
          <!-- /Correction Requested and Drafts -->
        </div>

        <!-- content center  -->

        <!-- latest blog -->
        <div
          class="h-full py-3 mt-3 mx-3 px-3 rounded-xl border border-gray-200 bg-white"
        >
          <h5 class="text-xl text-gray-900 font-medium mx-4 py-4">
            Latest Blog
          </h5>

          <div
            class="lg:flex lg:flex-wrap w-72 lg:w-full mx-auto justify-center items-center lg:space-x-2 gap-y-2 p-3"
          >
            <div
              class="sm:mb-5 h-full lg:w-1/5"
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              :key="item"
            >
              <div>
                <img src="~/assets/img/spotify-music.png" alt="" />
              </div>
              <div class="bg-gray-950 text-white rounded-b-xl">
                <div class="p-2">
                  <p class="text-sm text-slate-300 mt-4">April 12, 20</p>
                  <h3 class="mt-4 font-medium">
                    How To Get Verified On Spotify
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /latest blog -->
      </div>
    </div>
    <!-- /content area -->
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  components: {
    SideMenuDashboard: () =>
      import('@/components/MainComponent/SideMenuDashboard.vue'),
    DashboardTopNav: () =>
      import('@/components/MainComponent/DashboardTopNav.vue'),

    Alert: () => import('@/components/MainComponent/Alert.vue'),
    InactiveAudio: () => import('@/components/Icons/InactiveAudio.vue'),
    InactiveEdit: () => import('@/components/Icons/InactiveEdit.vue'),
  },
  computed: {
    getDashboardNotice() {
      return this.$store.state.settings.dashboard_notice;
    },
  },
  data() {
    return {
      hoveredCorrection: null,
      hoveredDrafts: null,
    };
  },
  setup() {
    const optionControl = ref(true);

    function dropControll() {
      optionControl.value = !optionControl.value;
    }

    return { optionControl, dropControll };
  },
};
</script>

<style></style>
