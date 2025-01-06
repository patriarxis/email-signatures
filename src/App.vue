<template>
  <div class="container">
    <SignatureInput :userData="userData" @update:userData="updateUserData" />
    <SignaturePreview :userData="userData" />
  </div>
</template>

<script>
import SignatureInput from "./components/SignatureInput.vue";
import SignaturePreview from "./components/SignaturePreview.vue";

export default {
  components: {
    SignatureInput,
    SignaturePreview,
  },
  data() {
    return {
      userData: {
        name: "name",
        description: "description",
        companyName: "companyName",
        companyTagline: "companyTagline",
        phone: "phone",
        email: "email",
        website: "website",
        websiteUrl: "websiteUrl",
        bodyLinks: [
          { text: "bodyLink", url: "https://" },
          { text: "bodyLink", url: "https://" },
          { text: "bodyLink", url: "https://" },
        ],
        socialLinks: [
          { text: "socialLink", url: "https://" },
          { text: "socialLink", url: "https://" },
          { text: "socialLink", url: "https://" },
        ],
        copyrights: "copyrights",
        disclaimer: "disclaimer",
      },
    };
  },
  methods: {
    updateUserData(newData) {
      this.userData = { ...this.userData, ...newData };
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
