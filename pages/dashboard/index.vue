<template>
  <!-- /top nav area  -->

  <div class="px-3 pt-6 2xl:container">
    <!-- /nav alert  -->
    <!-- <Alert
          v-if="getDashboardNotice.shown"
          :message="getDashboardNotice.message"
          @closed="$store.commit('settings/closeDashboardNotice')"
        /> -->
    <!-- /nav alert  -->

    <!-- content center  -->
    <div class="md:flex flex-col">
      <div class="w-full h-full px-2">
        <!-- 3 in cards  -->
        <div class="md:flex gap-4 items-center justify-evenly text-white">
          <DashCard title="Total Songs Created" number="45" />
          <DashCard title="Total Pending Audio" number="6" />
          <DashCard title="Total Final Release" number="999" />
        </div>
        <!-- /3 in cards  -->
        <!-- latest Tracks -->
        <div class="py-3 mt-3 px-3">
          <div class="flex justify-between items-center">
            <h5 class="text-xl text-gray-900 font-medium mx-4 py-4">
              Latest Tracks
            </h5>
            <div class="justify-around items-center gap-3">
              <!-- <button
                :disabled="currentIndex <= 3"
                @click="previousTrack"
                class="bg-transparent font-extrabold text-xl text-gray-900 p-2 border rounded-md hover:bg-blue-400 hover:text-white"
                :class="
                  currentIndex <= 3
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-200'
                    : ''
                "
              >
                <
              </button> -->
              <button
                @click="nextTrack"
                class="bg-transparent font-extrabold text-xl text-gray-900 p-2 border rounded-md hover:bg-blue-400 hover:text-white"
              >
                =>
              </button>
            </div>
          </div>
          <Tracks :data="currentTracks" />
          <!-- <div
            class="md:flex md:flex-wrap w-72 md:w-full mx-auto justify-center items-center md:space-x-2 gap-y-2 p-3"
          >
            <div
              class="sm:mb-5 h-full md:w-1/5"
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
          </div> -->
        </div>
        <!-- /latest Tracks -->
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
      <div
        class="w-full h-full flex flex-col md:flex-row justify-between gap-y-4 md:gap-x-4 px-6"
      >
        <!-- Correction Requested  -->
        <ListCard title="Correction Requested" />
        <!-- /Correction Requested  -->
        <!-- Drafts -->
        <ListCard title="Drafts" />

        <!-- /Drafts -->
      </div>
      <!-- /Correction Requested and Drafts -->
    </div>

    <!-- content center  -->
  </div>
  <!-- /content area -->
</template>

<script>
import { ref } from 'vue';
export default {
  layout: 'dashboard',
  components: {
    DashCard: () => import('@/components/MainComponent/DashCard.vue'),
    Tracks: () => import('@/components/MainComponent/Tracks.vue'),
    ListCard: () => import('@/components/MainComponent/ListCard.vue'),
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
      totalTracks: [
        {
          id: 1,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail:
            'data:image/jpeg;base64,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',
        },
        {
          id: 2,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail: 'https://trendybeatz.com/images/Replica-Cover-Me.jpg',
        },
        {
          id: 3,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail:
            'https://cdn.myportfolio.com/62cac9cfa422a96da5f0d44da3dc73fa/457902a0-bbcd-476e-a667-dbab93c19c69_rw_1200.jpg?h=0934699a9d29f263c78c385afe08af34',
        },
        {
          id: 4,
          title: 'Some Title 2nd',
          author: 'Mr. Xmen',
          thumbnail:
            'https://media.istockphoto.com/id/1127565686/photo/vintage-vinyl-record-album-cover-mockup-flat-concept.jpg?b=1&s=170667a&w=0&k=20&c=h60TEhymZ7Ol0e9zu9H3RTk8n4_KPsBAFRNO5NuUtGs=',
        },
        {
          id: 5,
          title: 'Some Title 2nd',
          author: 'Mr. Xmen',
          thumbnail:
            'data:image/jpeg;base64,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',
        },
        {
          id: 6,
          title: 'Some Title 2nd',
          author: 'Mr. Xmen',
          thumbnail: 'https://via.placeholder.com/250x150',
        },
      ],
      currentTracks: [],
      currentIndex: 0,
      tracksPerLoad: 3,
    };
  },
  computed: {
    remainingTracks() {
      return this.totalTracks.slice(this.currentIndex);
    },
  },
  mounted() {
    this.loadNextTracks();
  },
  methods: {
    loadNextTracks() {
      const nextTracks = this.remainingTracks.slice(0, this.tracksPerLoad);
      this.currentTracks = nextTracks;
    },
    nextTrack() {
      if (this.currentIndex + this.tracksPerLoad >= this.totalTracks.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += this.tracksPerLoad;
      }
      this.loadNextTracks();
    },
    previousTrack() {
      if (this.currentIndex === 0) {
        const remaining = this.totalTracks.length % this.tracksPerLoad;
        this.currentIndex = this.totalTracks.length - remaining;
      } else {
        this.currentIndex -= this.tracksPerLoad;
      }
      this.loadNextTracks();
    },
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
