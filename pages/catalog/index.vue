<template>
  <div>
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
            <NuxtLink to="/releaseAudio">Create Release</NuxtLink>
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
          Showing results - {{ songs.length }}
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
    <div
      v-if="!songs.length"
      class="text-lg secondary-color font-medium w-full flex items-center justify-center h-screen"
    >
      No Tracks Found.
    </div>
    <!-- cover song  -->
    <div
      v-else-if="songs.length"
      class="lg:flex lg:flex-wrap justify-between items-center space-x-3 px-3"
    >
      <div
        v-for="item in songs"
        :key="item.id"
        @click="openTrack(item.id)"
        class="h-full lg:w-1/5 relative rounded-md p-3 border border-gray-200 bg-white cursor-pointer"
      >
        <div class="">
          <img :src="item.thumbnail_url" alt="" />
        </div>
        <div>
          <p class="font-medium mt-3">{{ item.title }}</p>
          <p class="text-xs secondary-color mt-4">
            {{ item.primary_artist }}
          </p>
        </div>
        <div class="absolute top-8 right-8">
          <img src="~/assets/img/RightIconPng.png" />
        </div>
      </div>
    </div>

    <!-- /cover song  -->
    <!-- pagination  -->
    <div
      v-if="songs.length"
      class="flex justify-between items-center w-48 mt-4 mx-3"
    >
      <div class="btn-page-arrow btn-pagination-common drop-shadow-md">
        <LeftArrowIcon />
      </div>
      <div class="btn-page-inactive btn-pagination-common drop-shadow-md">
        1
      </div>
      <div class="btn-page-active btn-pagination-common drop-shadow-md">2</div>
      <div class="btn-page-inactive btn-pagination-common drop-shadow-md">
        3
      </div>
      <div class="btn-page-arrow btn-pagination-common drop-shadow-md">
        <RightArrowIcon />
      </div>
    </div>
    <!-- /pagination  -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  components: {
    SearchIcon: () => import('@/components/Icons/SearchIcon.vue'),
    LeftArrowIcon: () => import('@/components/Icons/LeftArrowIcon.vue'),
    RightArrowIcon: () => import('@/components/Icons/RightArrowIcon.vue'),
  },
  computed: {
    songs() {
      return this.$store.state.songs.list;
    },
  },
  methods: {
    openTrack(id) {
      this.$router.push(`/catalog/${id}`);
    },
  },
};
</script>

<style></style>
