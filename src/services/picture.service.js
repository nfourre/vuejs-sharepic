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

  savePicture(payload) {
    return fetch(`${process.env.VUE_APP_API_URL}/pictures/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  uploadPicture(file, filename) {
    const formData = new FormData();
    formData.append("name", filename);
    formData.append("file", file);

    return fetch("http://localhost:8082/upload", {
      method: "POST",
      body: formData,
    });
  }
}
