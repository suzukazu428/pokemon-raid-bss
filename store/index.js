import { vuexfireMutations, firestoreAction } from 'vuexfire';
import firebase from '@/plugins/firebase';

export const state = () => ({
  posts: [],
});

export const mutations = {
  ...vuexfireMutations,
};

export const actions = {
  setPostsRef: firestoreAction(function(context, ref) {
    context.bindFirestoreRef('posts', ref);
  }),
  async fetchPostList({ commit }) {
    const res = await firebase.fetchPostList();
    console.log(res);
  },
};

export const getters = {
  posts: state => state.posts,
};
