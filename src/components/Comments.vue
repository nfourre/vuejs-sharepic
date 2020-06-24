<template>
  <div class="comments_wrapper">
    <span class="title"> {{ comments.length }} Comments</span>
    <div class="comments_list">
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :author="authors.find((author) => author.id === comment.authorId)"
      />
    </div>
    <div class="comment_form">
      <CommentForm />
    </div>
  </div>
</template>

<script>
import CommentCard from "./CommentCard.vue";
import CommentForm from "./CommentForm.vue";

export default {
  name: "Comments",
  components: {
    CommentCard,
    CommentForm,
  },
  props: ["comments", "authors"],
};
</script>

<style scoped>
.comments_wrapper {
  display: flex;
  flex-direction: column;
}

.comments_wrapper .title {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  font-weight: bold;
  text-transform: none;
  color: rgb(34, 34, 34);
  margin: 0px 0px 24px;
}

.comments_wrapper_list {
  display: flex;
  flex-direction: column;
}
</style>
