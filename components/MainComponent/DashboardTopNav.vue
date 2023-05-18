<template>
  <div>
    <div class="sticky z-10 top-0 h-16 border-b bg-white md:py-2.5">
      <div
        class="px-6 flex mt-2 md:mt-0 items-center justify-between space-x-4 2xl:container"
      >
        <h5
          :class="sidebar ? 'md:block' : 'md:hidden'"
          class="text-2xl text-gray-600 font-medium"
          @click="$emit('closeSidebar')"
        >
          <Back class="cursor-pointer" />
        </h5>
        <button
          :class="!sidebar ? 'block' : 'hidden'"
          @click="$emit('openSidebar')"
        >
          <!-- class="w-8 h-8" -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 my-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          class="bg-gray-200 text-blue-800 py-1 px-3 rounded-md w-[70%] text-xs hidden lg:block"
        >
          <marquee behavior="" direction="">
            {{ getDashboardNotice.message }}
          </marquee>
        </div>
        <div class="flex space-x-4">
          <!--search bar -->
          <div class="secondary-color text-sm mt-2 cursor-pointer">
            Mahfuzur R.
          </div>
          <!--/search bar -->
          <button
            aria-label="search"
            class="hidden w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
          >
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              class="w-4 mx-auto fill-current text-gray-600"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </button>
          <div class="rounded mt-1 cursor-pointer">
            <img src="~/assets/img/demoProfilePic.png" />
          </div>
          <div>
            <Settings class="mt-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Back: () => import('@/components/Icons/Back.vue'),
    Settings: () => import('@/components/Icons/Settings.vue'),
  },
  computed: {
    getDashboardNotice() {
      return this.$store.state.settings.dashboard_notice;
    },
    // currentWidth() {
    //   return window.innerWidth;
    // },
  },
  // watch: {
  //   currentWidth() {
  //     console.log(this.currentWidth);
  //   },
  // },
};
</script>
