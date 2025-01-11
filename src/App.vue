<template>
  <div class="container">
    <SignatureInput :userData="userData" @update:userData="updateUserData" />
    <SignaturePreview :userData="userData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignatureInput from "./components/SignatureInput.vue";
import SignaturePreview from "./components/SignaturePreview.vue";

interface BodyLink {
  text: string;
  url: string;
}

interface UserData {
  name: string;
  description: string;
  companyName: string;
  companyTagline: string;
  phone: string;
  email: string;
  website: string;
  websiteUrl: string;
  bodyLinks: BodyLink[];
  socialLinks: BodyLink[];
  copyrights: string;
  disclaimer: string;
}

export default defineComponent({
  components: {
    SignatureInput,
    SignaturePreview,
  },
  data() {
    return {
      userData: {
        name: "John Doe",
        description: "Founder & CEO",
        companyName: "Best Co.",
        companyTagline: "The best company ever",
        phone: "+00 548 562 2548",
        email: "example@email.com",
        website: "website",
        websiteUrl: "https://",
        bodyLinks: [
          { text: "Link", url: "https://" },
          { text: "Link", url: "https://" },
          { text: "Link", url: "https://" },
        ],
        socialLinks: [
          { text: "+00 548 562 2548", url: "tel:+00 548 562 2548 " },
          { text: "example@email.com", url: "mailto:example@email.com" },
          { text: "LinkedIn", url: "https://" },
        ],
        copyrights: "© 2022 Best Co.",
        disclaimer:
          "This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this e-mail from your system. If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited.",
      } as UserData,
    };
  },
  methods: {
    updateUserData(newData: Partial<UserData>) {
      this.userData = { ...this.userData, ...newData };
    },
  },
});
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
}
</style>
