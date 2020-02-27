<template>
  <v-list subheader dense class="list-border">
    <v-list-item-group v-model="item">
      <MessageAreaItem v-for="post in posts" :key="post.id" :post="post" />
    </v-list-item-group>
  </v-list>
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
  data() {
    return {
      item: undefined,
    };
  },
  watch: {
    item(newVal) {
      if (newVal === undefined) return;
      this.openModal(newVal);
    },
  },
  methods: {
    openModal(index) {
      console.log(index);
      // console.log(this.posts[index]);
    },
  },
};
</script>

<style scoped>
.list-border {
  border-width: 2px;
  border-color: #999;
}
</style>
