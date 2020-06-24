<template>
  <form id="comment_form" method="post" @submit="checkForm">
    <div class="input_wrapper">
      <label for="text">Add your comment</label>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="5"
        v-model="comment.text"
      ></textarea>
      <small class="error" v-if="errors.emptyText"
        >This field is required</small
      >
    </div>
    <div class="actions">
      <input class="button" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CommentForm",
  computed: {
    ...mapGetters(["current"]),
  },
  data: () => ({
    errors: {
      emptyText: false,
    },
    comment: {
      text: null,
      authorId: 1,
      imageId: null,
    },
  }),
  methods: {
    ...mapActions(["postComment"]),
    checkForm(event) {
      event.preventDefault();

      if (this.comment.text === null || this.comment.text === "") {
        this.errors.emptyText = true;
      } else {
        this.errors.emptyText = false;
      }

      this.comment.imageId = this.current.id;

      this.postComment(this.comment);
      this.comment.text = null;
    },
  },
};
</script>

<style scoped>
.comment_form {
  display: flex;
  flex-direction: row;
}
.input_wrapper {
  position: relative;
  width: 100%;
}

.input_wrapper label {
  display: block;
  margin: 30px 0 10px;
}

.input_wrapper textarea {
  width: 100%;
  box-sizing: border-box;
}

.actions {
  margin-top: 10px;
  width: 100%;
  padding: 5px 0;
}

.actions input {
  width: 100%;
  border: none;
  background: #0099e5;
  color: #ffffff;
  padding: 5px 0px;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 0.75rem;
  position: absolute;
  bottom: -15px;
  left: 0;
}
</style>
