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
            <form>
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
                          class="cust-input"
                          id="release-title"
                          type="text"
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="version-subtitle">Version/Subtitle </label>
                        <br />
                        <input
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
                              class="cust-input"
                              id="primary-artist"
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
                            <label for="featuring">Featuring </label>
                            <br />
                            <input
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
                          class="cust-input"
                          id="song-writer"
                          type="text"
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
                              class="cust-input"
                              id="composer"
                              type="text"
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
                          class="cust-input"
                          id="main-release"
                          type="text"
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
                          class="cust-input"
                          id="original-release-date"
                          type="text"
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
                          class="cust-input"
                          id="lyrics-language"
                          type="text"
                        />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="genre"
                          >Genre <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input class="cust-input" id="genre" type="text" />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="sub-genre"
                          >SubGenre <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input class="cust-input" id="sub-genre" type="text" />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="label-name"
                          >Label Name <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input class="cust-input" id="label-name" type="text" />
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
                          id="format"
                          class="cust-input cust-select-input"
                        >
                          <option value="">option 1</option>
                        </select>
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="p-line"
                          >℗ line <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input class="cust-input" id="p-line" type="text" />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="c-line"
                          >© line <span class="text-red-600">*</span></label
                        >
                        <br />
                        <input class="cust-input" id="c-line" type="text" />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="upc-ean">UPC/EAN</label>
                        <br />
                        <input class="cust-input" id="upc-ean" type="text" />
                      </div>
                      <!-- /input  -->
                      <!-- input  -->
                      <div class="ml-3">
                        <label for="irc">ISRC</label>
                        <br />
                        <input class="cust-input" id="irc" type="text" />
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
                          id="parential-advisory"
                          class="cust-input cust-select-input"
                        >
                          <option value="">option 1</option>
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
                        <div class="secondary-color">Audio Format</div>
                        <div class="secondary-color">- WAV,16-bit</div>
                        <div class="flex justify-center items-center mt-6">
                          <button class="rounded-md btn-primary">
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
                        <div class="secondary-color">Your cover must be:</div>
                        <div class="secondary-color">- Size: 3000*3000px</div>
                        <div class="secondary-color">- Format: .jpeg</div>
                        <div class="flex justify-center items-center mt-6">
                          <button class="rounded-md btn-primary">
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
      import("@/components/MainComponent/SideMenuDashboard.vue"),
    DashboardTopNav: () =>
      import("@/components/MainComponent/DashboardTopNav.vue"),
    UploadIcon: () => import("@/components/Icons/UploadIcon.vue"),
    InputPlus: () => import("@/components/Icons/InputPlus.vue"),
  },
};
</script>

<style></style>
