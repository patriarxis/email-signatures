<template>
  <aside class="aside">
    <header class="header">
      <h1 class="title">Email Signatures</h1>
      <p class="description">
        These are some email signatures I used over the years. Feel free to copy
        them and use them as you please.
      </p>
    </header>

    <div class="inputs">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        :value="userData.name"
        @input="handleNameChange"
      />

      <label for="description">Description:</label>
      <textarea
        id="description"
        :value="userData.description"
        @input="handleDescriptionChange"
      ></textarea>

      <label for="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        :value="userData.companyName"
        @input="handleCompanyNameChange"
      />

      <label for="companyTagline">Company Tagline:</label>
      <input
        type="text"
        id="companyTagline"
        :value="userData.companyTagline"
        @input="handleCompanyTaglineChange"
      />

      <label for="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        :value="userData.phone"
        @input="handlePhoneChange"
      />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        :value="userData.email"
        @input="handleEmailChange"
      />

      <label for="website">Website Name:</label>
      <input
        type="text"
        id="website"
        :value="userData.website"
        @input="handleWebsiteChange"
      />
      <input
        type="url"
        id="websiteUrl"
        :value="userData.websiteUrl"
        @input="handleWebsiteUrlChange"
      />

      <label>Body Links:</label>
      <div
        class="links"
        v-for="(link, index) in userData.bodyLinks"
        :key="index"
      >
        <div class="link-inputs">
          <input
            class="link"
            type="text"
            placeholder="Link Text"
            :value="link.text"
            @input="handleBodyLinkTextChange(index, $event)"
          />
          <input
            class="link"
            type="url"
            placeholder="URL"
            :value="link.url"
            @input="handleBodyLinkUrlChange(index, $event)"
          />
        </div>
        <button class="remove-link" @click="removeBodyLink(index)">-</button>
      </div>
      <button @click="addBodyLink">+ Add Body Link</button>

      <label>Social Links:</label>
      <div
        class="links"
        v-for="(link, index) in userData.socialLinks"
        :key="index"
      >
        <div class="link-inputs">
          <input
            class="link"
            type="text"
            placeholder="Link Text"
            :value="link.text"
            @input="handleSocialLinkTextChange(index, $event)"
          />
          <input
            class="link"
            type="url"
            placeholder="URL"
            :value="link.url"
            @input="handleSocialLinkUrlChange(index, $event)"
          />
        </div>
        <button class="remove-link" @click="removeSocialLink(index)">-</button>
      </div>
      <button @click="addSocialLink">+ Add Social Link</button>

      <label for="copyrights">Copyrights:</label>
      <input
        type="text"
        id="copyrights"
        :value="userData.copyrights"
        @input="handleCopyrightsChange"
      />

      <label for="disclaimer">Disclaimer:</label>
      <textarea
        id="disclaimer"
        :value="userData.disclaimer"
        @input="handleDisclaimerChange"
      ></textarea>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({
        name: "",
        description: "",
        companyName: "",
        companyTagline: "",
        phone: "",
        email: "",
        website: "",
        websiteUrl: "",
        bodyLinks: [],
        socialLinks: [],
        copyrights: "",
        disclaimer: "",
      }),
    },
  },
  methods: {
    handleNameChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        name: event.target.value,
      });
    },
    handleDescriptionChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        description: event.target.value,
      });
    },
    handleCompanyNameChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        companyName: event.target.value,
      });
    },
    handleCompanyTaglineChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        companyTagline: event.target.value,
      });
    },
    handlePhoneChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        phone: event.target.value,
      });
    },
    handleEmailChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        email: event.target.value,
      });
    },
    handleWebsiteChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        website: event.target.value,
      });
    },
    handleWebsiteUrlChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        websiteUrl: event.target.value,
      });
    },
    handleBodyLinkTextChange(index, event) {
      const newLinks = [...this.userData.bodyLinks];
      newLinks[index] = {
        ...newLinks[index],
        text: event.target.value,
      };
      this.$emit("update:userData", {
        ...this.userData,
        bodyLinks: newLinks,
      });
    },
    handleBodyLinkUrlChange(index, event) {
      const newLinks = [...this.userData.bodyLinks];
      newLinks[index] = {
        ...newLinks[index],
        url: event.target.value,
      };
      this.$emit("update:userData", {
        ...this.userData,
        bodyLinks: newLinks,
      });
    },
    addBodyLink() {
      this.$emit("update:userData", {
        ...this.userData,
        bodyLinks: [...this.userData.bodyLinks, { text: "", url: "" }],
      });
    },
    removeBodyLink(index) {
      const newLinks = [...this.userData.bodyLinks];
      newLinks.splice(index, 1);
      this.$emit("update:userData", {
        ...this.userData,
        bodyLinks: newLinks,
      });
    },
    handleSocialLinkTextChange(index, event) {
      const newLinks = [...this.userData.socialLinks];
      newLinks[index] = {
        ...newLinks[index],
        text: event.target.value,
      };
      this.$emit("update:userData", {
        ...this.userData,
        socialLinks: newLinks,
      });
    },
    handleSocialLinkUrlChange(index, event) {
      const newLinks = [...this.userData.socialLinks];
      newLinks[index] = {
        ...newLinks[index],
        url: event.target.value,
      };
      this.$emit("update:userData", {
        ...this.userData,
        socialLinks: newLinks,
      });
    },
    addSocialLink() {
      this.$emit("update:userData", {
        ...this.userData,
        socialLinks: [...this.userData.socialLinks, { text: "", url: "" }],
      });
    },
    removeSocialLink(index) {
      const newLinks = [...this.userData.socialLinks];
      newLinks.splice(index, 1);
      this.$emit("update:userData", {
        ...this.userData,
        socialLinks: newLinks,
      });
    },
    handleCopyrightsChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        copyrights: event.target.value,
      });
    },
    handleDisclaimerChange(event) {
      this.$emit("update:userData", {
        ...this.userData,
        disclaimer: event.target.value,
      });
    },
  },
};
</script>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-right: 1px solid rgb(255, 255, 255);
  overflow-y: auto;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.links {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.link-inputs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
}

.link {
  width: 100%;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.remove-link {
  padding: 0 0.5rem;
}
</style>
