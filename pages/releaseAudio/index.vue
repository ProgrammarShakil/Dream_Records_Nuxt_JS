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
      <div class="">
        <!-- form  -->
        <div class="lg:w-3/3 w-full h-full px-2">
          <div>
            <form @submit.prevent="formSubmit">
              <!-- release info  -->
              <div class="p-3 flex justify-between items-center">
                <div class="">
                  <div class="font-medium">Release Information</div>
                  <div class="text-sm secondary-color">
                    Details About the Upcoming Release
                  </div>
                </div>
                <div>
                  <!-- submit or preview button on the top from -->
                  <button type="submit" class="rounded-md btn-primary">
                    Preview
                  </button>
                  <!-- /submit or preview button on the top from -->
                </div>
              </div>
              <hr />
              <!-- /release info  -->

              <div class="lg:flex justify-between mt-3">
                <!--************** flex left  **************-->
                <div class="lg:w-3/4">
                  <!-- 3 cols in input  -->
                  <div class="lg:flex justify-between mt-2">
                    <div class="lg:w-1/3 space-y-4">
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="release-title"
                          >Release Title
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          v-model="formData.title"
                          class="cust-input"
                          id="release-title"
                          type="text"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="version-subtitle">Version/Subtitle </label>
                        <br />
                        <input
                          v-model="formData.version"
                          class="cust-input"
                          id="version-subtitle"
                          type="text"
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="primary-artist"
                              >Primary Artist
                              <span class="text-red-600">*</span>
                            </label>
                            <br />
                            <input
                              v-model="formData.primary_artist"
                              class="cust-input"
                              id="primary-artist"
                              type="text"
                              required
                            />
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="featuring">Featuring </label>
                            <br />
                            <input
                              v-model="formData.featuring"
                              class="cust-input"
                              id="featuring"
                              type="text"
                            />
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="remixer">Remixer </label>
                            <br />
                            <input
                              v-model="formData.remixer"
                              class="cust-input"
                              id="remixer"
                              type="text"
                            />
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="song-writer"
                          >Song Writer
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          v-model="formData.song_writer"
                          class="cust-input"
                          id="song-writer"
                          type="text"
                          required
                        />
                        <div class="text-xs secondary-color pt-2">
                          Digital Audio Stores required Full First & Last Name
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="composer"
                              >Composer
                              <span class="text-red-600">*</span>
                            </label>
                            <br />
                            <input
                              v-model="formData.composer"
                              class="cust-input"
                              id="composer"
                              type="text"
                              required
                            />
                            <div class="text-xs secondary-color pt-2">
                              Digital Audio Stores required Full First & Last
                              Name
                            </div>
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                    </div>
                    <div class="lg:w-1/3 space-y-4">
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="main-release"
                          >Main Release Date
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          v-model="formData.release_date"
                          class="cust-input"
                          id="main-release"
                          type="date"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="arranger">Arranger </label>
                            <br />
                            <input
                              v-model="formData.arranger"
                              class="cust-input"
                              id="arranger"
                              type="text"
                            />
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <div class="flex relative">
                          <div>
                            <label for="producer">Producer </label>
                            <br />
                            <input
                              v-model="formData.producer"
                              class="cust-input"
                              id="producer"
                              type="text"
                            />
                          </div>
                          <div class="absolute top-8 right-0">
                            <InputPlus />
                          </div>
                        </div>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="original-release-date"
                          >Original Release Date
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          v-model="formData.original_release_date"
                          class="cust-input"
                          id="original-release-date"
                          type="date"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="lyrics-language"
                          >Lyrics Language
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          v-model="formData.lyrics_language"
                          class="cust-input"
                          id="lyrics-language"
                          type="text"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="genre"
                          >Genre <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          class="cust-input"
                          id="genre"
                          type="text"
                          v-model="formData.genre"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="sub-genre"
                          >SubGenre <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          class="cust-input"
                          id="sub-genre"
                          type="text"
                          v-model="formData.subgenre"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="label-name"
                          >Label Name <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          class="cust-input"
                          id="label-name"
                          type="text"
                          v-model="formData.label_name"
                          required
                        />
                      </div>
                      <!-- /input  -->
                    </div>
                    <div class="lg:w-1/1 space-y-4">
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="format"
                          >Format <span class="text-red-600">*</span></label
                        >
                        <br />
                        <select
                          v-model="formData.format"
                          id="format"
                          class="cust-input cust-select-input"
                          required
                        >
                          <option value="default">option 1</option>
                        </select>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="p-line"
                          >℗ line <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          class="cust-input"
                          id="p-line"
                          type="text"
                          v-model="formData.p_line"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="c-line"
                          >© line <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input
                          class="cust-input"
                          id="c-line"
                          type="text"
                          v-model="formData.c_line"
                          required
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="upc-ean">UPC/EAN</label>
                        <br />
                        <input
                          class="cust-input"
                          id="upc-ean"
                          type="text"
                          v-model="formData.upc"
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="irc">ISRC</label>
                        <br />
                        <input
                          class="cust-input"
                          id="irc"
                          type="text"
                          v-model="formData.isrc"
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="parential-advisory"
                          >Parental Advisory
                          <span class="text-red-600">*</span></label
                        >
                        <br />
                        <select
                          v-model="formData.advisory"
                          id="parential-advisory"
                          class="cust-input cust-select-input"
                          required
                        >
                          <option value="default">option 1</option>
                        </select>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="producer-catalog-number"
                          >Producer Catalogue Number</label
                        >
                        <br />
                        <input
                          v-model="formData.product_catalogue_number"
                          class="cust-input"
                          id="producer-catalog-number"
                          type="text"
                        />
                      </div>
                      <!-- /input  -->
                    </div>
                  </div>
                  <!--/ 3 cols in input  -->
                </div>
                <!-- ***********/flex left **************** -->

                <!-- flex ************right  **************-->

                <div class="lg:w-1/4">
                  <!-- upload audio & cover -->
                  <div class="w-full px-6">
                    <!-- upload audio  -->
                    <div
                      class="h-full mb-6 rounded-md p-6 border border-gray-200 bg-white"
                    >
                      <div class="flex justify-center items-center">
                        <UploadIcon />
                      </div>
                      <div class="mt-4 ml-3 space-y-4">
                        <div v-if="!formData.audio_file" class="space-y-4">
                          <div class="secondary-color">Audio Format</div>
                          <div class="secondary-color">- WAV,16-bit</div>
                        </div>
                        <div v-else class="secondary-color">
                          {{ formData.audio_file.name }}
                        </div>
                        <div class="flex justify-center items-center mt-6">
                          <input
                            @change="fileUpload"
                            type="file"
                            allow="audio"
                            ref="audio"
                            hidden
                          />
                          <button
                            @click="fileButtonClicked"
                            type="button"
                            class="rounded-md btn-primary"
                          >
                            Upload Your Audio
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /upload audio  -->

                    <!-- upload cover  -->
                    <div
                      class="h-full mb-6 rounded-md p-6 border border-gray-200 bg-white"
                    >
                      <div class="flex justify-center items-center">
                        <UploadIcon />
                      </div>
                      <div class="mt-4 ml-3 space-y-4">
                        <div v-if="!formData.thumbnail" class="space-y-4">
                          <div class="secondary-color">Your cover must be:</div>
                          <div class="secondary-color">- Size: 3000*3000px</div>
                          <div class="secondary-color">- Format: .jpeg</div>
                        </div>
                        <div v-else class="secondary-color">
                          {{ formData.thumbnail.name }}
                        </div>
                        <div class="flex justify-center items-center mt-6">
                          <input
                            @change="thumbnailUpload"
                            type="file"
                            ref="thumbnail"
                            hidden
                          />
                          <button
                            @click="thumbnailButtonClicked"
                            type="button"
                            class="rounded-md btn-primary"
                          >
                            Upload Cover
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /upload audio  -->
                  </div>
                  <!-- /upload audio & cover  -->
                </div>
                <!--************** /flex right  **************-->
              </div>
            </form>
          </div>
        </div>
        <!-- /form  -->
      </div>
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
    UploadIcon: () => import('@/components/Icons/UploadIcon.vue'),
    InputPlus: () => import('@/components/Icons/InputPlus.vue'),
  },
  data() {
    return {
      formData: {
        title: '',
        release_date: '',
        format: 'default',
        version: '',
        arranger: '',
        c_line: '',
        primary_artist: '',
        producer: '',
        featuring: '',
        original_release_date: '',
        upc: '',
        remixer: '',
        lyrics_language: '',
        isrc: '',
        song_writer: '',
        genre: '',
        advisory: 'default',
        composer: '',
        subgenre: '',
        producer_catelog_number: '',
        label_name: '',
        p_line: '',
        audio_file: null,
        audio_url: null,
        thumbnail_url: null,
        thumbnail: null,
      },
    };
  },
  mounted() {
    this.$store.commit('songs/clearCurrent', { ...this.formData });
  },
  methods: {
    fileButtonClicked() {
      this.$refs.audio.click();
    },
    thumbnailButtonClicked() {
      this.$refs.thumbnail.click();
    },
    fileUpload(e) {
      try {
        this.formData.audio_file = e.target.files[0];
        this.formData.audio_url = URL.createObjectURL(e.target.files[0]);
        console.log(
          this.formData.audio_url,
          URL.createObjectURL(e.target.files[0])
        );
        this.$toast.success('Successfully Uploaded Audio');
      } catch (err) {
        console.error(err);
        this.$toast.error('Error in Uploading');
      }
    },
    thumbnailUpload(e) {
      try {
        this.formData.thumbnail = e.target.files[0];
        this.formData.thumbnail_url = URL.createObjectURL(
          this.formData.thumbnail
        );
        this.$toast.success('Successfully Uploaded Cover');
        console.log(this.formData.thumbnail);
      } catch {
        this.$toast.error('Error in Uploading');
      }
    },
    formSubmit() {
      this.$store.commit('songs/addSongToCurrent', this.formData);
      this.$router.push('/releaseAudio/show');
    },
  },
};
</script>

<style></style>
