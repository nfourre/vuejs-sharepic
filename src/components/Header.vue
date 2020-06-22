<template>
  <div class="top-nav">
    <div class="logo">
      <img src="../assets/images/sharepic.png" alt="" />
    </div>
    <div class="top-nav_actions">
      <div class="search">
        <span class="submit"></span>
        <input
          type="text"
          placeholder="Search on SharePic"
          class="search_input"
        />
      </div>
      <div class="user">
        <a class="user_link user_account">
          <img
            src="https://drscdn.500px.org/user_avatar/14517171/q%3D85_w%3D50_h%3D50/v2?webp=true&v=1&sig=9bc42e40486b89ffe32344944a77a9fd171314fa413622dc7da9b15a76c431b4"
            alt=""
          />
        </a>
        <a class="user_link user_msg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 0.75C24 0.49367 23.8691 0.255093 23.6529 0.117398C23.4366 -0.0202958 23.1651 -0.0380342 22.9328 0.0703641L0.432842 10.5703C0.154609 10.7002 -0.0163823 10.9865 0.00124378 11.293C0.0188698 11.5996 0.221553 11.8644 0.512835 11.9615L8.99999 14.7905V23.25C8.99999 23.5638 9.19542 23.8445 9.48978 23.9534C9.78414 24.0623 10.1152 23.9764 10.3194 23.7381L15.9912 17.121L23.0128 19.4615C23.2415 19.5377 23.4929 19.4994 23.6885 19.3584C23.8841 19.2174 24 18.9911 24 18.75V0.75ZM22.5 17.7094L15.9872 15.5385L11.1384 13.9222L22.5 2.56059V17.7094ZM19.7093 3.22997L9.54737 13.3919L2.77277 11.1337L19.7093 3.22997ZM10.5 21.2225V15.2905L14.4546 16.6088L10.5 21.2225Z"
            ></path>
          </svg>
        </a>
        <a class="user_link user_notif">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8037 13.5C19.8037 13.6908 19.8416 13.8799 19.9154 14.0571L21.3245 17.4429C21.7346 18.4282 20.9796 19.5 19.8754 19.5H4.12457C3.0204 19.5 2.26538 18.4282 2.67545 17.4429L4.08463 14.0571C4.15838 13.8799 4.19626 13.6908 4.19626 13.5V9C4.19626 4.85786 7.69011 1.5 12 1.5C16.3099 1.5 19.8037 4.85786 19.8037 9V13.5ZM1.22634 16.8858L2.63552 13.5V9C2.63552 4.02944 6.82814 0 12 0C17.1719 0 21.3645 4.02944 21.3645 9V13.5L22.7737 16.8858C23.5938 18.8564 22.0838 21 19.8754 21H15.8238C15.4623 22.7117 13.8877 24 12 24C10.1123 24 8.53773 22.7117 8.1762 21H4.12457C1.91623 21 0.406179 18.8564 1.22634 16.8858ZM9.79211 21C10.1135 21.8739 10.9807 22.5 12 22.5C13.0194 22.5 13.8865 21.8739 14.2079 21H9.79211ZM11.2196 4.5C9.92668 4.5 8.87852 5.50736 8.87852 6.75C8.87852 7.16421 8.52914 7.5 8.09815 7.5C7.66716 7.5 7.31778 7.16421 7.31778 6.75C7.31778 4.67893 9.0647 3 11.2196 3C11.6506 3 12 3.33579 12 3.75C12 4.16421 11.6506 4.5 11.2196 4.5Z"
            ></path>
          </svg>
        </a>
        <a class="upload button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66029 0.285116C8.29559 -0.0950387 7.70441 -0.0950387 7.33971 0.285116L0.302564 7.62259C0.0497699 7.86442 -0.0555065 8.23131 0.0283622 8.57817C0.112231 8.92503 0.371741 9.19603 0.70428 9.28399C1.03682 9.37196 1.38884 9.26275 1.62116 8.99953L7.06608 3.32224V15.0262C7.06608 15.564 7.48421 16 8 16C8.51579 16 8.93392 15.564 8.93392 15.0262V3.32224L14.3788 8.99953C14.6112 9.26275 14.9632 9.37196 15.2957 9.28399C15.6283 9.19603 15.8878 8.92503 15.9716 8.57817C16.0555 8.23131 15.9502 7.86442 15.6974 7.62259L8.66029 0.285116Z"
            ></path>
          </svg>
          Upload
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.top-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  z-index: 1001;
  top: 0;
  min-height: 72px;
  width: 100vw;
  background-color: #fff;
  transition: all 0.1s ease-out;
  padding: 16px 64px;
  white-space: nowrap;
}

.top-nav .logo {
  max-width: 240px;
}

.top-nav .logo img {
  width: 100%;
}

.top-nav_actions {
  display: flex;
  flex-direction: row;
}

.top-nav .search {
  position: relative;
  min-width: 224px;
  min-height: 24px;
  margin-right: 24px;
}

.top-nav .search .submit {
  background-image: url(https://assetcdn.500px.org/assets/search-8fe8897ae58915b80f55b3d78163cf63.svg);
  position: absolute;
  top: 12px;
  left: 16px;
  height: 16px;
  width: 16px;
  border: none;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  text-indent: 30px;
  cursor: pointer;
  pointer-events: none;
}

.top-nav .search .search_input {
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 25px;
  background: #f7f8fa;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
  color: #222;
  text-indent: 48px;
  outline: none;
}

.top-nav .user {
  display: flex;
  flex-direction: row;
}

.top-nav .user .button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  color: #222;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  padding: 0 16px;
  transition: background-color 0.1s ease-out;
}

.top-nav .user .button:hover {
  color: #0099e5;
}

.top-nav .user .button.signup {
  border-color: #222;
  border-radius: 16px;
  border-width: 2px;
  border-style: solid;
}

.top-nav .user .button.signup:hover {
  border-color: #0099e5;
}

.top-nav .user .user_account,
.top-nav .user .user_link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 24px;
  transition: all 0.1s ease-out;
}

.top-nav .user .user_link:hover {
  background-color: #0099e5;
  fill: #fff;
}

.top-nav .user .user_account img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.top-nav .user .button.upload {
  height: 46px;
  padding: 0 28px;
  border-color: #222;
  border-radius: 25px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
}

.top-nav .user .button.upload svg {
  margin-right: 10px;
}

.top-nav .user .button.upload:hover {
  background: #0099e5;
  color: #fff;
  border-color: #0099e5;
}

.top-nav .user .button.upload:hover svg {
  fill: #fff;
}
</style>
