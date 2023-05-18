<template>
  <div class="relative">
    <!-- menubar -->
    <!-- <div
      v-if="sidebar"
      class="block md:hidden absolute top-0 bottom-0 left-0 right-0 bg-[#ddd]"
      style="z-index: 999"
    >
      <SideMenuDashboard />
      <div
        @click="sidebar = false"
        class="font-bold fixed text-lg p-2 border cursor-pointer text-black right-3 top-5"
        style="z-index: 1000"
      >
        X
      </div>
    </div> -->
    <SideMenuDashboard v-if="sidebar" />
    <!-- /menubar -->

    <!-- content area -->

    <div class="bg-dash ml-auto pb-6" :class="sidebar ? ' w-[82%]' : 'w-full'">
      <!-- top nav area  -->
      <DashboardTopNav
        :sidebar="sidebar"
        @closeSidebar="sidebar = false"
        @openSidebar="sidebar = true"
      />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    SideMenuDashboard: () =>
      import('@/components/MainComponent/SideMenuDashboard.vue'),
    DashboardTopNav: () =>
      import('@/components/MainComponent/DashboardTopNav.vue'),
  },
  data() {
    return {
      sidebar: true,
      isMobile: false,
    };
  },
  created() {
    if (process.client) {
      this.isMobile = window.innerWidth <= 768;
      window.addEventListener('resize', this.handleResize);
    }
    this.sidebar = !this.isMobile;
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      this.sidebar = !this.isMobile;
    },
  },
  watch: {
    $route() {
      if (this.isMobile) {
        this.sidebar = false;
      }
    },
  },
};
</script>
