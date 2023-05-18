<template>
  <div>
    <!-- edit primary artist  -->
    <div class="p-3 flex justify-between items-center">
      <div class="">
        <div class="font-medium">Edit Primary Artist</div>
        <div class="text-sm secondary-color">Update main soloist</div>
      </div>
      <div>
        <div class="flex">
          <div>
            <button type="submit" class="rounded-md btn-primary mr-3">
              <NuxtLink to="">Submit</NuxtLink>
            </button>
          </div>
          <div>
            <button type="submit" class="rounded-md btn-outline-primary">
              <NuxtLink to="">Cancel</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- /edit primary artist  -->
    <!-- upload photo -->
    <div class="w-3/4 mx-auto">
      <div class="w-full px-6 mt-5">
        <!-- upload photo  -->
        <div class="h-full mb-6 rounded-md p-6 border border-gray-200 bg-white">
          <div class="flex justify-center items-center">
            <UploadIcon />
          </div>
          <div class="mt-4 ml-3 space-y-4">
            <div class="secondary-color font-medium text-center">
              Your cover must be:
            </div>
            <div class="secondary-color text-center">- Size: 3000*3000px</div>
            <div class="secondary-color text-center">-Format: .jpeg</div>
            <div class="flex justify-center items-center mt-6">
              <button class="w-full rounded-md btn-primary mt-3">
                Upload Your Photo
              </button>
            </div>
          </div>
        </div>
        <!-- /upload audio  -->
      </div>
    </div>
    <!-- /upload photo  -->
    <!-- form  -->
    <div class="w-3/4 mx-auto">
      <div class="lg:flex justify-between mx-5 mb-3">
        <div class="space-y-4">
          <!-- input  -->
          <div class="ml-3">
            <div class="flex relative">
              <div>
                <label for="name">Name </label>
                <br />
                <input class="cust-input" id="name" type="text" />
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
                <label for="spotify-id">Spotify Id </label>
                <br />
                <input class="cust-input" id="spotify-id" type="text" />
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
                <label for="fb-url">Facebook URL </label>
                <br />
                <input class="cust-input" id="fb-url" type="text" />
              </div>
              <div class="absolute top-8 right-0">
                <InputPlus />
              </div>
            </div>
          </div>
          <!-- /input  -->
        </div>
        <div class="space-y-4">
          <!-- input  -->
          <div class="ml-3">
            <div class="flex relative">
              <div>
                <label for="instagram-id">Instagram Id </label>
                <br />
                <input class="cust-input" id="instagram-id" type="text" />
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
                <label for="apple-id">Apple Id </label>
                <br />
                <input class="cust-input" id="apple-id" type="text" />
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
                <label for="youtube-url">YouTube Channel URL </label>
                <br />
                <input class="cust-input" id="youtube-url" type="text" />
              </div>
              <div class="absolute top-8 right-0">
                <InputPlus />
              </div>
            </div>
          </div>
          <!-- /input  -->
        </div>
      </div>
    </div>
    <!-- form  -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  components: {
    UploadIcon: () => import('@/components/Icons/UploadIcon.vue'),
  },
};
</script>

<style></style>
