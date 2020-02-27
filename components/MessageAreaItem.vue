<template>
  <v-list-item class="border-t">
    <v-list-item-title>
      {{ post.message }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: () => {} },
  },
};
</script>

<style scoped>
.border-t:first-child {
  border-top: none;
}
</style>
