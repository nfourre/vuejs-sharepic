export default class PictureService {
  constructor() {}

  getFeaturedPictures() {
    return fetch(
      `${process.env.VUE_APP_API_URL}/pictures?_sort=rating&_order=desc`
    );
  }

  getNewestPictures() {
    return fetch(
      `${process.env.VUE_APP_API_URL}/pictures?_sort=createdAt&_order=desc`
    );
  }

  getEditorPictures() {
    return fetch(
      `${process.env.VUE_APP_API_URL}/pictures?editorChoice=true&_sort=createdAt&_order=desc`
    );
  }

  getPictureById(id) {
    return fetch(`${process.env.VUE_APP_API_URL}/pictures/${id}`);
  }
}
