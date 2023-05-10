<template>
  <Dashboard/>
</template>

<script>
export default {
  components: {
    Dashboard: () => import("@/pages/dashboard/index.vue")
  },
  name: 'IndexPage'
}
</script>
