<template>
  <div>
    <div class="upload_modal_wrapper">
      <div class="upload_modal">
        <div class="upload_modal_title">
          Upload new image
        </div>
        <form method="post" @submit="checkForm">
          <div class="upload_modal_content">
            <div class="input_wrapper">
              <label for="title">Picture's title</label>
              <input id="title" type="text" v-model="picture.title" />
              <small v-if="errors.emptyTitle" class="error"
                >This field is required</small
              >
            </div>
            <div class="input_wrapper">
              <label for="descritpion">Picture's description</label>
              <textarea
                id="description"
                rows="8"
                v-model="picture.description"
              ></textarea>
              <small v-if="errors.emptyDescription" class="error"
                >This field is required</small
              >
            </div>
            <div class="input_wrapper">
              <label for="file">Picture's file</label>
              <input id="file" type="file" @change="handleFileChange" />
            </div>
            <div class="actions">
              <input class="button" type="submit" />
            </div>
          </div>
        </form>
      </div>
      <div class="overlay" @click="hideModal"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadModal",
  data: () => ({
    errors: {
      emptyTitle: false,
      emptyDescription: false,
    },
    picture: {
      title: null,
      description: null,
      file: null,
    },
  }),
  methods: {
    ...mapActions(["uploadPicture"]),
    handleFileChange(event) {
      this.picture.file = event.target.files[0];
    },
    checkForm(event) {
      event.preventDefault();

      if (this.picture.title === null || this.picture.title === "") {
        this.errors.emptyTitle = true;
      } else {
        this.errors.emptyTitle = false;
      }

      if (
        this.picture.description === null ||
        this.picture.description === ""
      ) {
        this.errors.emptyDescription = true;
      } else {
        this.errors.emptyDescription = false;
      }

      const newImage = {
        ...this.picture,
      };
      this.uploadPicture(newImage);
    },
    hideModal() {
      this.$emit("hideModal");
    },
  },
};
</script>

<style>
.upload_modal_wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.upload_modal_wrapper .upload_modal {
  z-index: 2;
  width: 450px;
  height: 550px;
  background: #f7f8fa;
  position: relative;
}

.upload_modal_wrapper .upload_modal_title {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 20px;
  background: #fff;
}

.upload_modal_wrapper .upload_modal_content {
  padding: 20px;
  box-sizing: border-box;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper {
  position: relative;
  padding: 20;
  margin-bottom: 20px;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper input,
.upload_modal_wrapper .upload_modal_content .input_wrapper textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #efefef;
  background-clip: padding-box;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

::-webkit-file-upload-button {
  background: #dedede;
  border-radius: 10px;
  color: #666;
  box-shadow: none;
  outline: none;
  padding: 8px;
}

.upload_modal_wrapper .upload_modal_content .actions {
  position: absolute;
  box-sizing: border-box;
  bottom: 10px;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.upload_modal_wrapper .upload_modal_content .actions .button {
  cursor: pointer;
  width: 153px;
  height: 48px;
  line-height: 48px;
  background: #0870d1;
  border-radius: 28px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #fff;
  font-weight: 700;
}

.upload_modal_wrapper .upload_modal_content .actions .button {
  background: #2986f7;
}

.error {
  color: red;
  font-size: 0.75rem;
  position: absolute;
  bottom: -15px;
  left: 0;
}

/*
    Overlay Style
*/
.overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
}
</style>
