<template>
  <section class="flex justify-between">
    <div>
      <textarea
        v-model="message"
        placeholder="Please enter a comment(Within 100 characters)"
        maxLength="100"
      />
      <BaseButton @click="sendData" class="w-24 h-12" bg-color="#E7A4C4">
        Submit
      </BaseButton>
    </div>
    <MessageArea :posts="posts" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(['posts']),
  },
  created() {
    this.$store.dispatch('fetchPostList');
  },
  methods: {
    sendData() {
      // if (!this.message || this.message.length > 100) {
      //   return false;
      // }
      // const dbdata = {
      //   message: this.message,
      // };
      // db.collection('posts').add(dbdata);
    },
  },
};
</script>
