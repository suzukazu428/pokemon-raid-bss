<template>
  <button
    @click="!disabled && $emit('click')"
    :style="{
      backgroundColor: bgColor,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
};
</script>
