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
              v-bind="processedUserData"
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

  computed: {
    processedUserData() {
      return {
        ...this.userData,
        bodyLinks: this.userData.bodyLinks.map((link) => ({
          text: String(link.text || ""),
          url: String(link.url || ""),
        })),
        socialLinks: this.userData.socialLinks.map((link) => ({
          text: String(link.text || ""),
          url: String(link.url || ""),
        })),
      };
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
  background-color: white;
}
</style>
