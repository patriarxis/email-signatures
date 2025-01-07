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
      <div class="input-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          :value="userData.name"
          @input="handleNameChange"
        />
      </div>

      <div class="input-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          :value="userData.description"
          @input="handleDescriptionChange"
        ></textarea>
      </div>

      <div class="input-group">
        <label for="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          :value="userData.companyName"
          @input="handleCompanyNameChange"
        />
      </div>

      <div class="input-group">
        <label for="companyTagline">Company Tagline:</label>
        <input
          type="text"
          id="companyTagline"
          :value="userData.companyTagline"
          @input="handleCompanyTaglineChange"
        />
      </div>

      <div class="input-group">
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          :value="userData.phone"
          @input="handlePhoneChange"
        />
      </div>

      <div class="input-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          :value="userData.email"
          @input="handleEmailChange"
        />
      </div>

      <div class="input-group">
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
      </div>

      <div class="input-group">
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
      </div>

      <div class="input-group">
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
          <button class="remove-link" @click="removeSocialLink(index)">
            -
          </button>
        </div>
        <button @click="addSocialLink">+ Add Social Link</button>
      </div>

      <div class="input-group">
        <label for="copyrights">Copyrights:</label>
        <input
          type="text"
          id="copyrights"
          :value="userData.copyrights"
          @input="handleCopyrightsChange"
        />
      </div>

      <div class="input-group">
        <label for="disclaimer">Disclaimer:</label>
        <textarea
          id="disclaimer"
          :value="userData.disclaimer"
          @input="handleDisclaimerChange"
        ></textarea>
      </div>
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
  width: 100%;
  max-width: 400px;
  border-right: 1px solid var(--neutral-3);
  background-color: var(--neutral-1);
  overflow-y: auto;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background-color: var(--neutral-1);
  border-bottom: 1px solid var(--neutral-3);
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--neutral-1);
  box-shadow: 0 0 0 1px var(--neutral-3);
  transition-property: border-color, box-shadow;
  transition-duration: 0.2s;
  transition-duration: ease-in-out;
}

textarea {
  width: 100%;
  min-height: 140px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ff0000;
  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.2);
}

input:active,
textarea:active {
  box-shadow: none;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}
</style>
