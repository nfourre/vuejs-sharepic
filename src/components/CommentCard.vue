<template>
  <div class="comment_card">
    <div class="author_avatar">
      <img
        src="https://drscdn.500px.org/user_avatar/14517171/q%3D85_w%3D50_h%3D50/v2?webp=true&v=1&sig=9bc42e40486b89ffe32344944a77a9fd171314fa413622dc7da9b15a76c431b4"
        alt=""
      />
    </div>
    <div class="comment">
      <span class="author"> {{ author.firstname }} {{ author.lastname }}</span>
      <span class="text">{{ comment.text }}</span>
    </div>
    <div class="time">
      <span>
        {{ comment.createdAt | dateFormat }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: ["author", "comment"],
};
</script>

<style scoped>
.comment_card {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

.comment_card .author_avatar {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
}

.comment_card .author_avatar img {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}

.comment_card .comment {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.comment_card .comment .author {
  position: relative;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: rgb(34, 34, 34);
  text-decoration: none;
  transition: color 0.1s ease 0s;
}

.comment_card .comment .text {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  text-transform: none;
  color: rgb(34, 34, 34);
  margin: 0px;
}

.comment_card.time {
  padding: 0 0 0 10px;
}
</style>
