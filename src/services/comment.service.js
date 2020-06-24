export default class CommentService {
  constructor() {}

  getPictureComments(id) {
    return fetch(`${process.env.VUE_APP_API_URL}/comments?imageId=${id}`);
  }

  addPictureComment(payload) {
    return fetch(`${process.env.VUE_APP_API_URL}/comments/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
}
