<template>
  <div>
    <!-- menubar -->
    <aside
      class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
    >
      <div>
        <div class="-mx-6 px-6 py-4">
          <div class="flex">
            <Logo />
            <div class="mx-2 font-bold text-xl primary-color">
              Dream records
            </div>
          </div>
        </div>

        <ul class="space-y-2 tracking-wide mt-8">
          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl primary-color from-sky-600 to-cyan-400"
            >
              <ActiveHome />
              <span class="-mr-1 font-medium">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveReleaseAudio />
              <span class="-mr-1 font-medium">Release Audio</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveCatalog />
              <span class="-mr-1 font-medium">Catalog</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveAnalytics />
              <span class="-mr-1 font-medium">Analytics</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactivePrimaryArtist />
              <span class="-mr-1 font-medium">Primary Artist</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-2 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveYoutube />
              <span class="-mr-1 font-medium">Youtube Request</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="dashboard"
              class="relative px-4 py-1 flex items-center space-x-4 rounded-xl secondary-color from-sky-600 to-cyan-400"
            >
              <InactiveEarning />
              <span class="-mr-1 font-medium">Earning</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <div class="flex justify-center items-center">
          <div><SupportCenter /></div>
          <div class="ml-3 secondary-color">Support Center</div>
        </div>
      </div>
    </aside>
    <!-- /menubar -->

    <!-- content area -->

    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- top nav area  -->
      <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div
          class="px-6 flex items-center justify-between space-x-4 2xl:container"
        >
          <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
            <Back />
          </h5>
          <button class="w-12 h-16 -mr-2 border-r lg:hidden">
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
          <div class="flex space-x-4">
            <!--search bar -->
            <div class="secondary-color mt-2">Mahfuzur R.</div>
            <!--/search bar -->
            <button
              aria-label="search"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
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
            <div class="rounded mt-1">
              <img src="~/assets/img/demoProfilePic.png" />
            </div>
            <div>
              <Settings class="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <!-- /top nav area  -->

      
      <div class="px-3 pt-6 2xl:container">
        <!-- /nav alert  -->
        <div
          class="md:w-full rounded-xl border text-white border-gray-200 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-3 mb-3 p-4"
        >
          <div class="flex justify-between items-center">
            <div><Volume /></div>
            <div>Saturday & Sunday is our off day</div>
            <div><Cross /></div>
          </div>
        </div>
        <!-- /nav alert  -->

        <!-- content center  -->
        <div class="lg:flex">
          <div class="lg:w-2/3 w-full h-full px-2">
            <!-- 3 in cards  -->
            <div class="lg:flex lg:space-x-4 text-white">
              <div
                class="lg:w-1/3 w-full h-full py-6 px-6 sm:mb-3 rounded-xl border border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <h5 class="text-xl">Total Created Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>

              <div
                class="lg:w-1/3 w-full h-full py-6 px-6 sm:mb-3 rounded-xl border border-green-200 bg-gradient-to-r from-red-500 to-blue-500"
              >
                <h5 class="text-xl">Total Pending Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>

              <div
                class="lg:w-1/3 w-full h-full py-6 px-6 rounded-xl border border-blue-200 bg-gradient-to-r from-yellow-500 to-blue-500"
              >
                <h5 class="text-xl">Total Final Release Audio</h5>
                <div class="my-3">
                  <h1 class="text-3xl font-bold">64</h1>
                </div>
              </div>
            </div>
            <!-- /3 in cards  -->

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
                    <div>
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
          <div class="lg:w-1/3 w-full h-full px-6">
            <!-- Correction Requested  -->
            <div class="h-full mb-6 rounded-xl border border-gray-200 bg-white">
              <div class="flex items-center ml-4">
                <div><CorrectionRequest /></div>
                <div>
                  <h5 class="text-lg px-4 text-gray-900 font-medium py-3">
                    Correction Requested
                  </h5>
                </div>
              </div>
              <hr />
              <div>
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div
                  class="flex justify-between p-3 items-center bg-indigo-600"
                >
                  <div class="flex justify-start space-x-3 items-center">
                    <div><ActiveAudio /></div>
                    <div class="text-white">Lolipop</div>
                  </div>
                  <div><ActiveEdit /></div>
                </div>
                <!-- /row -->
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
              </div>
            </div>
            <!-- /Correction Requested  -->
            <!-- Drafts -->
            <div class="h-full mb-6 rounded-xl border border-gray-200 bg-white">
              <div class="flex items-center ml-4">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div>
                      <Drafts />
                    </div>
                    <div>
                      <h5 class="text-lg px-4 text-gray-900 font-medium py-3">
                        Drafts
                      </h5>
                    </div>
                  </div>
                  <div class="lg:ml-20">5 Items</div>
                </div>
              </div>
              <hr />
              <div>
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
                <hr />
                <!-- row -->
                <div class="flex justify-between p-3 items-center">
                  <div class="flex justify-start space-x-3 items-center">
                    <div><InactiveAudio /></div>
                    <div class="secondary-color">Lolipop</div>
                  </div>
                  <div><InactiveEdit /></div>
                </div>
                <!-- /row -->
              </div>
            </div>
            <!-- /Drafts -->
          </div>
        </div>
        <!-- /Correction Requested and Drafts -->

        <!-- content center  -->

        <!-- latest blog -->
        <div
          class="h-full py-3 mt-3 mx-3 px-3 rounded-xl border border-gray-200 bg-white"
        >
          <h5 class="text-xl text-gray-900 font-medium">Latest Blog</h5>

          <div class="lg:flex w-72 lg:w-full mx-auto justify-center items-center lg:space-x-2 p-3">
            <div class="sm:mb-5 h-full">
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
            <div class="sm:mb-5 h-full">
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
            <div class="sm:mb-5 h-full">
              <div>
                <img src="~/assets/img/spotify-music.png" alt=""/>
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
            <div class="sm:mb-5 h-full">
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
            <div class="sm:mb-5 h-full">
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
          </div>
        </div>
        <!-- /latest blog -->
      </div>
    </div>
    <!-- /content area -->
  </div>
</template>

<script>
export default {
  components: {
    Logo: () => import("@/components/Icons/Logo.vue"),
    ActiveHome: () => import("@/components/Icons/ActiveHome.vue"),
    Back: () => import("@/components/Icons/Back.vue"),
    InactiveAnalytics: () => import("@/components/Icons/InactiveAnalytics.vue"),
    InactiveCatalog: () => import("@/components/Icons/InactiveCatalog.vue"),
    InactiveReleaseAudio: () =>
      import("@/components/Icons/InactiveReleaseAudio.vue"),
    InactiveYoutube: () => import("@/components/Icons/InactiveYoutube.vue"),
    InactivePrimaryArtist: () =>
      import("@/components/Icons/InactivePrimaryArtist.vue"),
    InactiveCatalog: () => import("@/components/Icons/InactiveCatalog.vue"),
    InactiveEarning: () => import("@/components/Icons/InactiveEarning.vue"),
    SupportCenter: () => import("@/components/Icons/SupportCenter.vue"),
    Settings: () => import("@/components/Icons/Settings.vue"),
    Volume: () => import("@/components/Icons/Volume.vue"),
    Cross: () => import("@/components/Icons/Cross.vue"),
    CorrectionRequest: () => import("@/components/Icons/CorrectionRequest.vue"),
    Drafts: () => import("@/components/Icons/Drafts.vue"),
    InactiveAudio: () => import("@/components/Icons/InactiveAudio.vue"),
    InactiveEdit: () => import("@/components/Icons/InactiveEdit.vue"),
    ActiveAudio: () => import("@/components/Icons/ActiveAudio.vue"),
    ActiveEdit: () => import("@/components/Icons/ActiveEdit.vue"),
  },
};
</script>

<style></style>
