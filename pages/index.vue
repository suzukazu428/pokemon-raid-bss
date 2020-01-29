<template>
  <section>
    <textarea
      v-model="message"
      placeholder="Please enter a comment(Within 100 characters)"
      maxLength="100"
    />
    <button @click="sendData">
      Submit
    </button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.message }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from '@/plugins/firebase';
const db = firebase.firestore();

export default {
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapGetters(['posts']),
  },
  created() {
    this.$store.dispatch('setPostsRef', db.collection('posts'));
  },
  methods: {
    sendData() {
      if (!this.message || this.message.length > 100) {
        return false;
      }
      const dbdata = {
        message: this.message,
      };
      db.collection('posts').add(dbdata);
    },
  },
};
</script>
