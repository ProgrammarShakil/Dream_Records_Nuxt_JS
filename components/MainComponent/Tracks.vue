<template>
  <div class="md:flex md:flex-row flex-col gap-y-4 flex-wrap gap-4">
    <div
      v-for="item in data"
      :key="item.id"
      class="h-32 md:h-56 my-2 w-full md:w-1/4 flex md:flex-col bg-white shadow shadow-md rounded-md"
    >
      <div class="w-3/5 h-full md:w-full md:h-3/5 relative">
        <img
          :src="
            item.thumbnail
              ? item.thumbnail
              : 'https://via.placeholder.com/250x150'
          "
          alt="Image"
          class="w-full h-full object-cover object-top"
        />
      </div>
      <div class="flex flex-col p-2 px-4 h-full">
        <h2 class="text-lg font-bold">{{ item.title }}</h2>
        <p class="text-sm">{{ item.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [
        {
          id: 1,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail: 'https://via.placeholder.com/250x150',
        },
        {
          id: 2,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail: 'https://via.placeholder.com/250x150',
        },
        {
          id: 3,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail: 'https://via.placeholder.com/250x150',
        },
        {
          id: 4,
          title: 'Some Title',
          author: 'Mr. Xmen',
          thumbnail: 'https://via.placeholder.com/250x150',
        },
      ],
    },
  },
};
</script>

<style></style>
