<template>
  <div class="border">
    {{ message.message }}
  </div>
</template>

<script>
export default {
  props: {
    message: { type: Object, default: () => {} },
  },
  mounted() {
    console.log(1, this.message);
  },
};
</script>
