<template>
  <div>
    <!-- menubar -->
    <SideMenuDashboard />
    <!-- /menubar -->

    <!-- content area -->
    <div class="bg-dash ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- ****** h-screen will be removed after code will be up to full screen **********-->
      <!-- top nav area  -->
      <DashboardTopNav />
      <!-- /top nav area  -->
      <!-- -------------- -->

      <div class="p-3 space-y-2">
        <p class="font-medium">Earning Overview</p>
        <p class="secondary-color text-xs">
          A deep dive into your financial situation
        </p>
      </div>
      <hr />
      <!-- -------------- -->
      <!--  chart -->
      <div
        class="h-full mt-6 mx-8 sm:mb-3 py-6 px-6 rounded-xl border border-gray-200 bg-white"
      >
        <div class="flex justify-between items-center">
          <div>
            <h5 class="text-xl text-gray-700">
              <span class="secondary-color">Total Earning: </span>
              <span class="font-medium">₹1,20,000.00</span>
            </h5>
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
                  Year
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
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <!-- /chart will be shown here -->
        </div>
      </div>
      <!--  /chart -->
      <!-- -------------- -->
      <div class="mx-3 mt-5">
        <div class="font-medium">All Time Transactions</div>
      </div>
      <!-- -------------- -->

      <!-- showing result and search  -->
      <div class="p-3 flex justify-between items-center">
        <div class="">
          <div class="text-lg secondary-color font-medium">
            Showing results - 5
          </div>
        </div>
        <div>
          <!-- search button -->
          <div>
            <form action="">
              <div class="relative">
                <div>
                  <input
                    class="rounded-md py-2 px-4 border border-zink-300 bg-transparent focus:bg-white focus:outline-0"
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <div class="absolute top-0 right-0">
                  <button
                    type="submit"
                    class="rounded-r-md btn-primary ml-3 p-cust-11"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- /search button -->
        </div>
      </div>
      <!-- /showing result and search  -->
      <!-- table  -->
      <div class="mx-3">
        <table
          class="w-full my-3 border-collapse border border-slate-400 rounded"
        >
          <thead class="bg-white">
            <tr>
              <th class="border border-slate-300 p-2">Date</th>
              <th class="border border-slate-300 p-2">Month</th>
              <th class="border border-slate-300 p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2">10-27-2001</td>
              <td class="border border-slate-300 p-2">name</td>
              <td class="border border-slate-300 p-2">₹</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">10-27-2001</td>
              <td class="border border-slate-300 p-2">name</td>
              <td class="border border-slate-300 p-2">₹</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">10-27-2001</td>
              <td class="border border-slate-300 p-2">name</td>
              <td class="border border-slate-300 p-2">₹</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /table  -->
      <!-- pagination  -->
      <div class="flex justify-between items-center w-48 mt-6 mx-3">
        <div class="btn-page-arrow btn-pagination-common drop-shadow-md">
          <LeftArrowIcon />
        </div>
        <div class="btn-page-inactive btn-pagination-common drop-shadow-md">
          1
        </div>
        <div class="btn-page-active btn-pagination-common drop-shadow-md">
          2
        </div>
        <div class="btn-page-inactive btn-pagination-common drop-shadow-md">
          3
        </div>
        <div class="btn-page-arrow btn-pagination-common drop-shadow-md">
          <RightArrowIcon />
        </div>
      </div>
      <!-- /pagination  -->
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
    SearchIcon: () => import('@/components/Icons/SearchIcon.vue'),
    RightArrowIcon: () => import('@/components/Icons/RightArrowIcon.vue'),
    LeftArrowIcon: () => import('@/components/Icons/LeftArrowIcon.vue'),
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
