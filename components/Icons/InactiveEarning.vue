<template>
  <div>
    <svg
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0233 5.53489H20.5582V2.96511C20.5582 1.33014 19.228 0 17.5931 0H2.96511C1.33014 0 0 1.33014 0 2.96511V14.0349C0 15.6699 1.33014 17 2.96511 17H17.5931C19.228 17 20.5582 15.6699 20.5582 14.0349V11.4651H15.0233C13.3883 11.4651 12.0582 10.135 12.0582 8.5C12.0582 6.86502 13.3883 5.53489 15.0233 5.53489Z"
        :fill="color"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    default: '#8A8B9F'
  }
}
</script>