<template>
  <div class="informations_wrapper">
    <div class="actions">
      <span class="like_button">
        <svg
          class="icon"
          version="1.1"
          viewBox="-6.9 -13.1 40 40"
          x="0px"
          y="0px"
        >
          <path
            class="shape"
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
                            C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"
          ></path>
        </svg>
      </span>
      <span class="like">228</span>
      <span class="message_button">
        <svg
          _ngcontent-bvs-c1=""
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            _ngcontent-bvs-c1=""
            clip-rule="evenodd"
            d="M24 0.75C24 0.49367 23.8691 0.255093 23.6529 0.117398C23.4366 -0.0202958 23.1651 -0.0380342 22.9328 0.0703641L0.432842 10.5703C0.154609 10.7002 -0.0163823 10.9865 0.00124378 11.293C0.0188698 11.5996 0.221553 11.8644 0.512835 11.9615L8.99999 14.7905V23.25C8.99999 23.5638 9.19542 23.8445 9.48978 23.9534C9.78414 24.0623 10.1152 23.9764 10.3194 23.7381L15.9912 17.121L23.0128 19.4615C23.2415 19.5377 23.4929 19.4994 23.6885 19.3584C23.8841 19.2174 24 18.9911 24 18.75V0.75ZM22.5 17.7094L15.9872 15.5385L11.1384 13.9222L22.5 2.56059V17.7094ZM19.7093 3.22997L9.54737 13.3919L2.77277 11.1337L19.7093 3.22997ZM10.5 21.2225V15.2905L14.4546 16.6088L10.5 21.2225Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>

    <div class="author">
      <div class="author_column">
        <div class="title">{{ picture.title }}</div>
        <div class="author_name">
          by {{ author.firstname }} {{ author.lastname }}
        </div>
      </div>
      <div class="author_avatar">
        <img
          src="https://drscdn.500px.org/user_avatar/14517171/q%3D85_w%3D50_h%3D50/v2?webp=true&v=1&sig=9bc42e40486b89ffe32344944a77a9fd171314fa413622dc7da9b15a76c431b4"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageInfos",
  props: ["picture", "author"],
};
</script>

<style scoped>
.informations_wrapper {
  display: flex;
  flex-direction: column;
}

.informations_wrapper .actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
}

.informations_wrapper .actions span {
  margin-right: 10px;
  height: 32px;
}

.informations_wrapper .actions span.like_button {
  display: block;
  width: 32px;
  height: 32px;
}

.informations_wrapper .actions span.like_button .icon {
  height: 100%;
  width: 100%;
}

.informations_wrapper .actions span.like {
  color: #000;
  font-size: 1.2rem;
  line-height: 32px;
}

.informations_wrapper .actions span.message_button {
  margin-left: 4rem;
}

.informations_wrapper .author {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
}

.informations_wrapper .author_column {
  display: flex;
  flex-direction: column;
}

.informations_wrapper .author_column .title {
  font-size: 21px;
  line-height: 24px;
  letter-spacing: 0px;
  font-weight: bold;
  text-transform: none;
  color: rgb(34, 34, 34);
  margin: 0px 0px 8px;
}

.informations_wrapper .author_column .author_name {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  text-transform: none;
  color: rgb(34, 34, 34);
  display: inline;
  margin: 0px;
}

.informations_wrapper .author_avatar {
  width: 64px;
  height: 64px;
  border-radius: 32px;
}

.informations_wrapper .author_avatar img {
  width: 64px;
  height: 64px;
  border-radius: 32px;
}
</style>
