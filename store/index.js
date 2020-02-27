import firebase from '@/plugins/firebase';

export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
};

export const actions = {
  async fetchPostList({ commit }) {
    const res = await firebase.fetchPostList();
    commit('setPosts', res);
  },
  async sendPost({ dispatch }, payload) {
    await firebase.addPost(payload);
    dispatch('fetchPostList');
  },
};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
};
