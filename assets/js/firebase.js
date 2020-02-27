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
      const post = {
        id: resItem.id,
        message: resItem.data().message,
      };
      postList.push(post);
    });
    return postList;
  }
  async addPost(post) {
    const sendData = {
      message: post,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await this.db.collection('posts').add(sendData);
  }
}
