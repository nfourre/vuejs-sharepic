export default class AuthorService {
  constructor() {}

  getAuthors() {
    return fetch(`${process.env.VUE_APP_API_URL}/authors`);
  }
}
