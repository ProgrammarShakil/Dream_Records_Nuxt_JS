<template>
  <div>
    <!-- menubar -->
    <SideMenuDashboard />
    <!-- /menubar -->

    <!-- content area -->
    <div
      class="bg-dash ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]"
    >
      <!-- top nav area  -->
      <DashboardTopNav />
      <!-- /top nav area  -->
      <!-- catalogs  -->
      <div class="p-3 flex justify-between items-center">
        <div class="">
          <div class="font-medium">Catalogs</div>
          <div class="text-sm secondary-color">Exploring our collections</div>
        </div>
        <div>
          <!-- create release -->
          <div>
            <button type="submit" class="rounded-md btn-primary ml-3">
              <NuxtLink to="/releaseAudio/show">Create Release</NuxtLink>
            </button>
          </div>
          <!-- /create release -->
        </div>
      </div>
      <hr />
      <!-- /catalogs  -->
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
      <!-- cover song  -->
      <div class="lg:flex justify-between items-center space-x-3 px-3">
        <div
          class="h-full relative rounded-md p-3 border border-gray-200 bg-white"
        >
          <div class="">
            <img src="~/assets/img/cover-song.png" alt="" />
          </div>
          <div>
            <p class="font-medium mt-3">Track Title</p>
            <p class="text-xs secondary-color mt-4">By Name</p>
          </div>
          <div class="absolute top-8 right-8">
            <img src="~/assets/img/RightIconPng.png" />
          </div>
        </div>
        <div
          class="h-full relative rounded-md p-3 border border-gray-200 bg-white"
        >
          <div class="">
            <img src="~/assets/img/cover-song.png" alt="" />
          </div>
          <div>
            <p class="font-medium mt-3">Track Title</p>
            <p class="text-xs secondary-color mt-4">By Name</p>
          </div>
          <div class="absolute top-8 right-8">
            <img src="~/assets/img/StarIconPng.png" />
          </div>
        </div>
        <div
          class="h-full relative rounded-md p-3 border border-gray-200 bg-white"
        >
          <div class="">
            <img src="~/assets/img/cover-song.png" alt="" />
          </div>
          <div>
            <p class="font-medium mt-3">Track Title</p>
            <p class="text-xs secondary-color mt-4">By Name</p>
          </div>
          <div class="absolute top-8 right-8">
            <img src="~/assets/img/StarIconPng.png" />
          </div>
        </div>
        <div
          class="h-full relative rounded-md p-3 border border-gray-200 bg-white"
        >
          <div class="">
            <img src="~/assets/img/cover-song.png" alt="" />
          </div>
          <div>
            <p class="font-medium mt-3">Track Title</p>
            <p class="text-xs secondary-color mt-4">By Name</p>
          </div>
          <div class="absolute top-8 right-8">
            <img src="~/assets/img/ErrorIconPng.png" />
          </div>
        </div>
      </div>
      <!-- /cover song  -->
      <!-- pagination  -->
      <div class="flex justify-between items-center w-48 mt-4 mx-3">
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
export default {
  components: {
    SideMenuDashboard: () =>
      import("@/components/MainComponent/SideMenuDashboard.vue"),
    DashboardTopNav: () =>
      import("@/components/MainComponent/DashboardTopNav.vue"),
    SearchIcon: () => import("@/components/Icons/SearchIcon.vue"),
    LeftArrowIcon: () => import("@/components/Icons/LeftArrowIcon.vue"),
    RightArrowIcon: () => import("@/components/Icons/RightArrowIcon.vue"),
  },
};
</script>

<style></style>
