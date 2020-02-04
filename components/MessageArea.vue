<template>
  <div class="border-2 rounded">
    <MessageAreaItem v-for="post in posts" :key="post.id" :message="post">
      {{ post.message }}
    </MessageAreaItem>
  </div>
</template>

<script>
import MessageAreaItem from '@/components/MessageAreaItem';
export default {
  components: {
    MessageAreaItem,
  },
  props: {
    posts: { type: Array, default: () => [] },
  },
};
</script>
