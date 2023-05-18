<template>
  <div>
    <!-- release info  -->
    <div class="p-3 flex justify-between items-center">
      <div class="">
        <div class="font-medium">Submission</div>
        <div class="text-sm secondary-color">Release your submission</div>
      </div>
      <div>
        <!-- release submission -->
        <div class="flex">
          <div>
            <button
              type="submit"
              class="rounded-md btn-outline-primary"
              @click="submitSong"
            >
              Submit My Release
            </button>
          </div>
          <div>
            <button type="submit" class="rounded-md btn-primary ml-3">
              <NuxtLink to="/releaseAudio/show">Edit</NuxtLink>
            </button>
          </div>
        </div>
        <!-- /release submission -->
      </div>
    </div>
    <hr />
    <!-- /release info  -->

    <!-- release info details -->
    <div class="p-3 flex">
      <!-- left side  -->
      <div class="lg:w-3/4">
        <!-- Release Information  -->
        <div class="flex">
          <div class="font-medium">Release Information</div>
          <div class="ml-3">
            <button class="btn-primary-sm text-sm">
              <div class="flex space-x-2 items-center">
                <div><RightIcon /></div>
                <div>Details</div>
              </div>
            </button>
          </div>
        </div>
        <!-- /Release Information  -->

        <!-- show table data  -->
        <div>
          <div class="rounded-md border mt-4 p-4 border-gray-200 bg-white">
            <!-- 3 in cards  -->
            <div class="lg:flex lg:space-x-4">
              <!-- column -->
              <div
                class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3"
              >
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Release Title</div>
                  <div class="secondary-color">: {{ getCurrent.title }}</div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Version/Subtitle</div>
                  <div class="secondary-color">: {{ getCurrent.version }}</div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Primary Artist</div>
                  <div class="secondary-color">
                    : {{ getCurrent.primary_artist }}
                  </div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Featuring</div>
                  <div class="secondary-color">
                    : {{ getCurrent.featuring }}
                  </div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Song Writer</div>
                  <div class="secondary-color">
                    : {{ getCurrent.song_writer }}
                  </div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Composer</div>
                  <div class="secondary-color">: {{ getCurrent.composer }}</div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Arranger</div>
                  <div class="secondary-color">: {{ getCurrent.arranger }}</div>
                </div>
                <!-- flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Producer</div>
                  <div class="secondary-color">: {{ getCurrent.producer }}</div>
                </div>
                <!-- flexed div  -->
              </div>
              <!-- /column -->
              <!-- column -->
              <div
                class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3"
              >
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Original Release Date</div>
                  <div class="secondary-color">
                    : {{ getCurrent.original_release_date }}
                  </div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Remixer</div>
                  <div class="secondary-color">: {{ getCurrent.remixer }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Lyrics Language</div>
                  <div class="secondary-color">
                    : {{ getCurrent.lyrics_language }}
                  </div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Genre</div>
                  <div class="secondary-color">: {{ getCurrent.genre }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Subgenre</div>
                  <div class="secondary-color">: {{ getCurrent.subgenre }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Label Name</div>
                  <div class="secondary-color">
                    : {{ getCurrent.label_name }}
                  </div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Format</div>
                  <div class="secondary-color">: {{ getCurrent.format }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Parental Advisory</div>
                  <div class="secondary-color">: {{ getCurrent.advisory }}</div>
                </div>
                <!-- /flexed div  -->
              </div>
              <!-- column -->
              <!-- column -->
              <div
                class="lg:w-1/3 lg:space-y-5 w-full h-full py-6 px-6 sm:mb-3"
              >
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>℗ line</div>
                  <div class="secondary-color">: {{ getCurrent.p_line }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>© line</div>
                  <div class="secondary-color">: {{ getCurrent.c_line }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>UPC/EAN</div>
                  <div class="secondary-color">: {{ getCurrent.upc }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>ISRC</div>
                  <div class="secondary-color">: {{ getCurrent.isrc }}</div>
                </div>
                <!-- /flexed div  -->
                <!-- flexed div  -->
                <div class="flex justify-between">
                  <div>Producer Catalogue Number</div>
                  <div class="secondary-color">
                    : {{ getCurrent.producer_catelog_number }}
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
      </div>
      <!-- /left side  -->
      <!-- right side -->
      <div class="lg:w-1/4 ml-6">
        <div class="">
          <!-- upload audio  -->
          <div
            class="h-full mb-6 rounded-md p-6 border border-gray-200 bg-white"
          >
            <div class="flex justify-center mt-4 items-center">
              <img src="~/assets/img/audio-img-icon.png" alt="" srcset="" />
            </div>
            <div class="mt-8 mb-3 ml-3 flex justify-center items-center">
              <p class="secondary-color" v-if="getCurrent.audio_file.name">
                {{ getCurrent.audio_file.name }}
              </p>
              <audio
                :src="getCurrent.audio_url"
                controls
                v-if="getCurrent.audio_url"
              ></audio>
            </div>
          </div>
          <!-- /upload audio  -->
          <!-- cover song  -->
          <div class="h-full rounded-md p-6 border border-gray-200 bg-white">
            <div class="flex justify-center items-center">
              <img :src="getCurrent.thumbnail_url" alt="Cover" />
            </div>
          </div>
          <!-- /cover song  -->
        </div>
      </div>
      <!-- right side -->
    </div>
    <!-- /release info details -->
    <!-- Release Information errors -->
    <div v-if="false" class="lg:-mt-4">
      <div class="flex ml-3">
        <div class="font-medium">Release Information</div>
        <div class="ml-3">
          <button class="btn-red-sm text-sm">
            <div class="flex space-x-2 items-center">
              <div><ErrorIcon /></div>
              <div>1 Error(s)</div>
            </div>
          </button>
        </div>
      </div>
      <!-- release error table  -->
      <div class="mx-3 mt-3 bg-white lg:w-96 rounded-md bordered h-full p-6">
        <!-- flexed div  -->
        <div class="flex justify-between">
          <div>Main Release Date</div>
          <div class="secondary-color">: {{ getCurrent.release_date }}</div>
        </div>
        <!-- /flexed div  -->
      </div>
      <!-- /release error table  -->
    </div>
    <!-- /Release Information  -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  components: {
    RightIcon: () => import('@/components/Icons/RightIcon.vue'),
    ErrorIcon: () => import('@/components/Icons/ErrorIcon.vue'),
  },
  computed: {
    getCurrent() {
      return this.$store.state.songs.currentSong;
    },
  },
  methods: {
    submitSong() {
      this.$store.commit('songs/addNewSong', this.getCurrent);
      this.$router.push('/catalog');
    },
  },
};
</script>

<style></style>
