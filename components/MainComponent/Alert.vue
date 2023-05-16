<template>
  <div
    class="md:w-full rounded-xl p-4 border text-white border-gray-200 bg-gradient-to-b from-sky-600 to-sky-900 mb-3"
  >
    <div class="flex justify-between items-center">
      <div class="cursor-pointer"><Volume /></div>
      <div>{{ message }}</div>
      <div @click="$emit('closed')" class="cursor-pointer"><Cross /></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
    default: 'This is a Aert Message',
  },
  components: {
    Volume: () => import('@/components/Icons/Volume.vue'),
    Cross: () => import('@/components/Icons/Cross.vue'),
  },
};
</script>
