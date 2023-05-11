<template>
  <div>
    <!-- menubar -->
    <SideMenuDashboard />
    <!-- /menubar -->

    <!-- content area -->
    <div class="bg-dash ml-auto h-screen pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- top nav area  -->
      <DashboardTopNav />
      <!-- /top nav area  -->
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
