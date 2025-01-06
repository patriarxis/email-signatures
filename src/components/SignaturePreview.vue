// SignaturePreview.vue
<template>
  <div class="signatures-container">
    <div class="signatures">
      <h2 class="signatures-title">All Signatures</h2>

      <div class="signatures-list">
        <div
          v-for="(componentName, index) in signatures"
          :key="index"
          class="signature-item window"
        >
          <div class="window-top">
            <h3 class="window-title">{{ index }}</h3>
            <button @click="copySignature(index)" class="copy-button">
              Copy Signature
            </button>
          </div>

          <div class="window-body">
            <component
              :is="componentName"
              :name="userData.name"
              :description="userData.description"
              :companyName="userData.companyName"
              :companyTagline="userData.companyTagline"
              :phone="userData.phone"
              :email="userData.email"
              :website="userData.website"
              :websiteUrl="userData.websiteUrl"
              :bodyLinks="parseLinks(userData.bodyLinks)"
              :socialLinks="parseLinks(userData.socialLinks)"
              :copyrights="userData.copyrights"
              :disclaimer="userData.disclaimer"
              ref="signatureComponents"
              class="signature"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import { DarkEdge, CleanSlate, ProfilePlus, CorporatePro } from "../signatures";

export default {
  name: "SignaturePreview",

  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({
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
      }),
    },
  },

  data() {
    return {
      signatures: {
        "dark-edge": markRaw(DarkEdge),
        "clean-slate": markRaw(CleanSlate),
        "profile-plus": markRaw(ProfilePlus),
        "corporate-pro": markRaw(CorporatePro),
      },
    };
  },

  methods: {
    parseLinks(links) {
      return links.map((link) => ({
        text: link,
        url: link,
      }));
    },

    async copySignature(index) {
      try {
        const signatureHtml =
          this.$refs.signatureComponents[index].$el.outerHTML;
        await navigator.clipboard.writeText(signatureHtml);
        this.$emit("copied", true);
      } catch (error) {
        console.error("Failed to copy signature:", error);
        this.$emit("copied", false);
      }
    },
  },
};
</script>

<style>
.signatures-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  overflow-y: auto;
}

.signatures {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.signatures-title {
  width: 100%;
}

.signatures-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.window {
  background-color: var(--neutral-2);
  border: 2px solid var(--neutral-2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.window-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
}

.window-body {
  padding: 2rem;
  background: linear-gradient(var(--neutral-1) 0%, var(--neutral-2) 50%);
}
</style>
