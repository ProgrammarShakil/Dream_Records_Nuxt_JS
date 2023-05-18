<template>
  <div
    class="h-full w-full md:w-1/2 mb-6 rounded-xl border border-gray-200 bg-white"
  >
    <div class="flex justify-between items-center px-5">
      <div class="flex gap-x-2 items-center">
        <CorrectionRequest v-if="title === 'Correction Requested'" />
        <Drafts v-if="title === 'Drafts'" />
        <h5 class="text-lg px-4 text-gray-900 font-bold py-3">
          {{ title }}
        </h5>
      </div>
      <h3 class="text gray-600 font-semibold text-xs">
        Total: {{ data.length }}
      </h3>
    </div>
    <hr />
    <div>
      <!-- row -->
      <div
        class="flex justify-between p-3 items-center"
        v-for="item in data"
        @mouseover="hovered = item"
        @mouseleave="hovered = null"
        :key="item"
        :class="hovered === item ? 'bg-indigo-600 rounded-md' : ''"
      >
        <div class="flex justify-start space-x-3 items-center">
          <div>
            <InactiveAudio :color="hovered === item ? '#fff' : '#8A8B9F'" />
          </div>
          <div :class="hovered === item ? 'text-white' : 'secondary-color'">
            Lolipop
          </div>
        </div>
        <div>
          <InactiveEdit :color="hovered === item ? '#fff' : '#8A8B9F'" />
        </div>
      </div>
      <!-- /row -->
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CorrectionRequest: () => import('@/components/Icons/CorrectionRequest.vue'),
    Drafts: () => import('@/components/Icons/Drafts.vue'),
    InactiveAudio: () => import('@/components/Icons/InactiveAudio.vue'),
    InactiveEdit: () => import('@/components/Icons/InactiveEdit.vue'),
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      default: [
        {
          id: 1,
          value: 'Correction',
        },
        {
          id: 2,
          value: 'Correction',
        },
        {
          id: 3,
          value: 'Correction',
        },
      ],
    },
  },

  data() {
    return {
      hovered: null,
    };
  },
};
</script>

<style></style>
