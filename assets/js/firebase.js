import firebase from 'firebase';

export default class Firebase {
  constructor(config) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }
  async fetchPostList() {
    const postList = [];
    const res = await this.db.collection('posts').get();
    res.forEach(resItem => {
      const post = resItem.data().message;
      postList.push(post);
    });
    return postList;
  }
}
