<template>
  <div>
    <!-- menubar -->
    <SideMenuDashboard />
    <!-- /menubar -->

    <!-- content area -->
    <div class="bg-dash ml-auto h-full pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- top nav area  -->
      <DashboardTopNav />
      <!-- /top nav area  -->
      <div>
        <!-- -------------- -->
        <div class="p-3 space-y-2">
          <p class="font-medium">Overview</p>
          <p class="secondary-color text-xs">
            A general overview of audio streams
          </p>
        </div>
        <hr />
        <!-- -------------- -->

        <div class="lg:flex mt-6">
          <!--  chart -->
          <div
            class="h-full lg:w-3/4 mx-3 sm:mb-3 py-6 px-6 rounded-xl border border-gray-200 bg-white"
          >
            <div class="flex justify-between items-center">
              <div>
                <h5 class="text-xl text-gray-700">chart</h5>
              </div>
              <div>
                <!-- select option  -->
                <div class="relative inline-block text-left">
                  <div>
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
          <!--  /chart -->
          <!-- 3 cards -->
          <div class="lg:w-1/4 mr-3">
            <!-- card  -->
            <div
              class="py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-cyan-400 to-blue-600"
            >
              <h5 class="text-xl text-white">Total Created Audio</h5>
              <div class="my-3">
                <h1 class="text-3xl text-white font-bold">64</h1>
              </div>
            </div>
            <!-- card  -->
            <!-- card  -->
            <div
              class="py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-teal-400 to-teal-800"
            >
              <h5 class="text-xl text-white">Downloads</h5>
              <div class="my-3">
                <h1 class="text-3xl text-white font-bold">5</h1>
              </div>
            </div>
            <!-- card  -->
            <!-- card  -->
            <div
              class="py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-b from-rose-400 to-rose-600"
            >
              <h5 class="text-xl text-white">Ringtone</h5>
              <div class="my-3">
                <h1 class="text-3xl text-white font-bold">0</h1>
              </div>
            </div>
            <!-- card  -->
          </div>
          <!-- /3 cards -->
        </div>
      </div>
    </div>
    <!-- /content area -->
  </div>
</template>

<script>
export default {
  components: {
    SideMenuDashboard: () =>
      import("@/components/MainComponent/SideMenuDashboard.vue"),
    DashboardTopNav: () =>
      import("@/components/MainComponent/DashboardTopNav.vue"),
  },
};
</script>

<style></style>
