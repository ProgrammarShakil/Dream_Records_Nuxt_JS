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
      <!-- cover song full screen-->
      <div class="px-3">
        <div
          :class="`lg:flex h-full w-full rounded-md px-20 py-10 bg-cover-[${song.thumbnail_url}] mt-3 text-white`"
        >
          <div class="">
            <img :src="song.thumbnail_url" alt="Cover" />
          </div>
          <div class="ml-3 mt-1">
            <div class="">
              <img src="~/assets/img/RightIconPng.png" />
            </div>
            <div>
              <p class="font-medium mt-3">{{ song.title }}</p>
              <p class="text-xs mt-4">{{ song.primary_artist }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- /cover song full screen -->
      <!-- show table data  -->
      <div class="mx-auto w-3/4">
        <div class="rounded-md border mt-8 p-4 border-gray-200 bg-white">
          <!-- 3 in cards  -->
          <div class="lg:flex lg:space-x-4">
            <!-- column -->
            <div class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3">
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Release Title</div>
                <div class="secondary-color">: {{ song.title }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Version/Subtitle</div>
                <div class="secondary-color">: {{ song.version }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Primary Artist</div>
                <div class="secondary-color">: {{ song.primary_artist }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Featuring</div>
                <div class="secondary-color">: {{ song.featuring }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Song Writer</div>
                <div class="secondary-color">: {{ song.song_writer }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Composer</div>
                <div class="secondary-color">: {{ song.composer }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Arranger</div>
                <div class="secondary-color">: {{ song.arranger }}</div>
              </div>
              <!-- flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Producer</div>
                <div class="secondary-color">: {{ song.producer }}</div>
              </div>
              <!-- flexed div  -->
            </div>
            <!-- /column -->
            <!-- column -->
            <div class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3">
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Original Release Date</div>
                <div class="secondary-color">
                  : {{ song.original_release_date }}
                </div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Remixer</div>
                <div class="secondary-color">: {{ song.remixer }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Lyrics Language</div>
                <div class="secondary-color">: {{ song.lyrics_language }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Genre</div>
                <div class="secondary-color">: {{ song.genre }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Subgenre</div>
                <div class="secondary-color">: {{ song.subgenre }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Label Name</div>
                <div class="secondary-color">: {{ song.label_name }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Format</div>
                <div class="secondary-color">: {{ song.format }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Parental Advisory</div>
                <div class="secondary-color">: {{ song.advisory }}</div>
              </div>
              <!-- /flexed div  -->
            </div>
            <!-- column -->
            <!-- column -->
            <div class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3">
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>℗ line</div>
                <div class="secondary-color">: {{ song.p_line }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>© line</div>
                <div class="secondary-color">: {{ song.c_line }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>UPC/EAN</div>
                <div class="secondary-color">: {{ song.upc }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>ISRC</div>
                <div class="secondary-color">: {{ song.isrc }}</div>
              </div>
              <!-- /flexed div  -->
              <!-- flexed div  -->
              <div class="flex justify-between">
                <div>Producer Catalogue Number</div>
                <div class="secondary-color">
                  : {{ song.producer_catelog_number }}
                </div>
              </div>
              <!-- /flexed div  -->
            </div>
            <!-- /column -->
          </div>
          <!-- /3 in cards  -->
        </div>
      </div>
      <!-- /show table data  -->
      <!-- release info  -->
      <div class="p-3 flex justify-end mr-5 items-center">
        <div class="flex">
          <div>
            <button type="submit" class="rounded-md btn-primary mr-3">
              <NuxtLink to="/releaseAudio/show">Apply For Ringtone</NuxtLink>
            </button>
          </div>
          <div>
            <button type="submit" class="rounded-md btn-outline-primary">
              <NuxtLink to="/releaseAudio/show">Edit</NuxtLink>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <!-- /release info  -->
    </div>
    <!-- /content area -->
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
      song: {},
    };
  },
  mounted() {
    try {
      if (
        this.$store.state.songs.list.filter(
          (i) => i.id == this.$route.params.id
        ).length
      ) {
        this.song = this.$store.state.songs.list.filter(
          (i) => i.id == this.$route.params.id
        )[0];
      } else {
        this.$toast.warning('Can not Open This Track');
        this.$router.push('/catalog');
      }
    } catch {
      this.$toast.warning('Can not Open This Track');
      this.$router.push('/catalog');
    }
  },
};
</script>

<style scoped>
.bg-cover-song {
  background: url('../../assets/img/bg-cover-song.png');
}
</style>
