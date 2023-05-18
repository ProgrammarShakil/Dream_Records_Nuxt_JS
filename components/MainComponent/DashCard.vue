<template>
  <div
    class="bg-white shadow shadow-lg p-5 rounded-md w-full m-2 md:w-1/4 flex items-center justify-between gap-x-4"
  >
    <img src="~/assets/img/audio-img-icon.png" alt="musicIcon" class="w-5" />
    <div class="flex flex-col gap-2">
      <h3
        :style="`color:${TitleColor}`"
        class="text-gray-700 text-md font-bold truncate"
      >
        {{ title }}
      </h3>
      <h3
        :style="`color:${NumberColor}`"
        class="text-sm font-semibold w-full text-center"
      >
        {{ number }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 100,
    },
    title: {
      type: String,
      default: 'Card Title Here',
    },
  },
  data() {
    return {
      TitleColor: '',
      NumberColor: '',
    };
  },
  mounted() {
    const colors = ['#3C486B'];
    const numberColors = ['#667792'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.TitleColor = colors[randomIndex];
    this.NumberColor = numberColors[randomIndex];
  },
};
</script>

<style></style>
