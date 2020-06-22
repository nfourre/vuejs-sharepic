import Vue from "vue";
import Vuex from "vuex";

import PictureService from "../services/picture.service";

import categoryEnum from "../enums/categoryEnum";
import AuthorService from "../services/author.service";
import CommentService from "../services/comment.service";

Vue.use(Vuex);

const pictureService = new PictureService();
const authorService = new AuthorService();
const commentService = new CommentService();

const store = new Vuex.Store({
  state: {
    pictureCategory: "popular",
    pictures: [],
    currentPicture: {},
    authors: [],
    author: {},
    comments: [],
  },
  getters: {
    pictures: (state) => state.pictures,
    category: (state) => state.pictureCategory,
    current: (state) => state.currentPicture,
    authors: (state) => state.authors,
    author: (state) => state.author,
    comments: (state) => state.comments,
  },
  mutations: {
    updatePictures(state, payload) {
      Vue.set(state, "pictures", payload);
    },
    changePictureCategory(state, payload) {
      Vue.set(state, "pictureCategory", payload);
    },
    setCurrentPicture(state, payload) {
      Vue.set(state, "currentPicture", payload);
    },
    updateAuthors(state, payload) {
      Vue.set(state, "authors", payload);
    },
    setCurrentAuthor(state, payload) {
      const author = state.authors.find((author) => author.id === payload);
      Vue.set(state, "author", author);
    },
    updateComments(state, payload) {
      Vue.set(state, "comments", payload);
    },
  },
  actions: {
    async getPictures({ commit }) {
      let pictureData;
      let pictures;
      switch (this.state.pictureCategory) {
        case categoryEnum.POPULAR.name:
          pictureData = await pictureService.getFeaturedPictures();
          pictures = await pictureData.json();
          break;

        case categoryEnum.NEWEST.name:
          pictureData = await pictureService.getNewestPictures();
          pictures = await pictureData.json();
          break;

        case categoryEnum.EDITOR.name:
          pictureData = await pictureService.getEditorPictures();
          pictures = await pictureData.json();
          break;

        default:
          break;
      }
      commit("updatePictures", pictures);
    },
    changePictureCategory({ commit, dispatch }, payload) {
      commit("changePictureCategory", payload);
      dispatch("getPictures");
    },
    async getPictureById({ commit, dispatch }, payload) {
      const pictureData = await pictureService.getPictureById(payload);
      const picture = await pictureData.json();
      commit("setCurrentPicture", picture);
      if (this.state.authors.length === 0) {
        await dispatch("getAuthors");
      }
      commit("setCurrentAuthor", picture.authorId);
    },
    async getAuthors({ commit }) {
      const authorsData = await authorService.getAuthors();
      const authors = await authorsData.json();
      commit("updateAuthors", authors);
    },
    async getPictureComments({ commit }, payload) {
      const commentsData = await commentService.getPictureComments(payload);
      const comments = await commentsData.json();
      commit("updateComments", comments);
    },
  },
});

export default store;
