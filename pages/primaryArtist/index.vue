<template>
  <div>
    <!-- -------------- -->
    <div class="p-3 space-y-2">
      <p class="font-medium">Primary Artist</p>
      <p class="secondary-color text-xs">
        A primary artist is the main or lead artist
      </p>
    </div>
    <hr />
    <!-- -------------- -->
    <!-- showing result and search  -->
    <div class="p-3 flex justify-between items-center">
      <div class="">
        <div class="text-lg secondary-color font-medium">Show 2 entries</div>
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
    <!-- table  -->
    <div class="mx-3">
      <table
        class="lg:w-full sm:w-3/4 my-3 border-collapse border border-slate-400 rounded"
      >
        <thead>
          <tr>
            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>ID</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>
            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>Name</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>

            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>Spotify ID</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>
            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>Apple ID</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>

            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>Facebook URL</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>
            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>YouTube Channel URL</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>

            <th class="border border-slate-300 p-2">
              <div class="flex justify-between items-center">
                <div>Instagram ID</div>
                <div><TableFilterIcon /></div>
              </div>
            </th>
            <th class="border border-slate-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">1</td>
            <td class="border border-slate-300 p-2">Shakil</td>

            <td class="border border-slate-300 p-2">567357</td>
            <td class="border border-slate-300 p-2">865656</td>

            <td class="border border-slate-300 p-2">https://fb.v71NrtdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v73in</td>

            <td class="border border-slate-300 p-2">450065</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="secondary-color">
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Suvo</td>

            <td class="border border-slate-300 p-2">456456</td>
            <td class="border border-slate-300 p-2">158799</td>

            <td class="border border-slate-300 p-2">https://fb.v71NnhdVzwU</td>
            <td class="border border-slate-300 p-2">https://youtu.be/v71Nn</td>

            <td class="border border-slate-300 p-2">325345</td>
            <td class="border border-slate-300 p-2 primary-color">
              <nuxt-link to="/primaryArtist/edit">Edit</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /table  -->
    <!-- pagination  -->
    <div class="flex justify-between items-center w-48 mt-6 mx-3">
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
    TableFilterIcon: () => import('@/components/Icons/TableFilterIcon.vue'),
  },
};
</script>

<style></style>
