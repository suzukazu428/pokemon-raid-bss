<template>
  <section class="py-4 px-4 flex justify-between">
    <div class="width">
      <v-textarea v-model="message" label="コメント" filled auto-grow />
      <BaseButton @click="sendPost" class="w-24 h-12" bg-color="#E7A4C4">
        Submit
      </BaseButton>
    </div>
    <MessageArea :posts="posts" class="width message-area-height" />
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import MessageArea from '@/components/MessageArea';

export default {
  components: {
    BaseButton,
    MessageArea,
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {
    posts: {
      get() {
        return this.$store.getters.getPosts;
      },
    },
  },
  async fetch({ store }) {
    await store.dispatch('fetchPostList');
  },
  methods: {
    sendPost() {
      if (!this.message) return false;
      this.$store.dispatch('sendPost', this.message);
      this.message = '';
    },
  },
};
</script>

<style scoped>
.width {
  width: 49%;
}
.message-area-height {
  height: calc(100vh - 32px);
}
</style>
