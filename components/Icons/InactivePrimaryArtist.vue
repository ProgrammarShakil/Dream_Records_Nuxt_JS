<template>
  <div>
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10C9 10 10.05 10.16 11.2 10.44C10.39 11.31 10 12.33 10 13.5C10 14.39 10.25 15.23 10.78 16H0V14C0 12.81 0.91 11.85 2.74 11.12C4.57 10.38 6.33 10 8 10ZM8 8C6.92 8 6 7.61 5.18 6.83C4.38 6.05 4 5.11 4 4C4 2.92 4.38 2 5.18 1.18C6 0.38 6.92 0 8 0C9.11 0 10.05 0.38 10.83 1.18C11.61 2 12 2.92 12 4C12 5.11 11.61 6.05 10.83 6.83C10.05 7.61 9.11 8 8 8ZM15.5 6H19V8H17V13.5C17 14.163 16.7366 14.7989 16.2678 15.2678C15.7989 15.7366 15.163 16 14.5 16C13.837 16 13.2011 15.7366 12.7322 15.2678C12.2634 14.7989 12 14.163 12 13.5C12 12.837 12.2634 12.2011 12.7322 11.7322C13.2011 11.2634 13.837 11 14.5 11C14.86 11 15.19 11.07 15.5 11.21V6Z"
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