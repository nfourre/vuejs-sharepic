export default class CommentService {
  constructor() {}

  getPictureComments(id) {
    return fetch(`${process.env.VUE_APP_API_URL}/comments?imageId=${id}`);
  }
}
