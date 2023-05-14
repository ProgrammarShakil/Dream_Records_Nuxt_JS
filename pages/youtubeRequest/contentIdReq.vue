<template>
    <div>
      <!-- menubar -->
      <SideMenuDashboard />
      <!-- /menubar -->
  
      <!-- content area -->
      <div
        class="bg-dash ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]"
      >
        <!-- ****** h-screen will be removed after code will be up to full screen **********-->
        <!-- top nav area  -->
        <DashboardTopNav />
        <!-- /top nav area  -->
        <!-- -------------- -->
  
        <div class="p-3 space-y-2">
          <p class="font-medium">Content Id Request</p>
          <p class="secondary-color text-xs">
            Requesting identification of content
          </p>
        </div>
        <hr />
        <!-- -------------- -->
        <!-- form  -->
        <!-- input  -->
        <div class="ml-3">
          <div class="flex relative">
            <form class="w-full">
              <div class="mt-5">
                <label for="name">UPC/EAN </label>
                <br />
                <input
                  class="cust-input py-1 w-3/5"
                  placeholder="  UPC/EAN"
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <button class="btn-primary rounded-md mt-5" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <!-- /input  -->
        <!-- /form  -->
        <!-- -------------- -->
        <div class="mx-3 mt-5">
          <div class="font-medium">All History</div>
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
                <th class="border border-slate-300 p-2">UPC/EAN</th>
                <th class="border border-slate-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-2">10-27-2001</td>
                <td class="border border-slate-300 p-2">upc/ean</td>
                <td class="border border-slate-300 p-2">Approved</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2">10-27-2001</td>
                <td class="border border-slate-300 p-2">upc/ean</td>
                <td class="border border-slate-300 p-2 text-blue-600">Pending</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2">10-27-2001</td>
                <td class="border border-slate-300 p-2">upc/ean</td>
                <td class="border border-slate-300 p-2 text-rose-600">Failed</td>
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
  export default {
    components: {
      SideMenuDashboard: () =>
        import("@/components/MainComponent/SideMenuDashboard.vue"),
      DashboardTopNav: () =>
        import("@/components/MainComponent/DashboardTopNav.vue"),
      SearchIcon: () => import("@/components/Icons/SearchIcon.vue"),
      RightArrowIcon: () => import("@/components/Icons/RightArrowIcon.vue"),
      LeftArrowIcon: () => import("@/components/Icons/LeftArrowIcon.vue"),
    },
  };
  </script>
  
  <style></style>
  