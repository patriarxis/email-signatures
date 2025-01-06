import { ref, readonly } from "vue";

const name = ref("");
const description = ref("");
const bodyLinks = ref(["", "", ""]);
const website = ref("");
const email = ref("");

export function useSignatureState() {
  const updateName = (newValue) => {
    name.value = newValue;
  };

  const updateDescription = (newValue) => {
    description.value = newValue;
  };

  const updateBodyLinks = (index, newValue) => {
    bodyLinks.value[index] = newValue;
  };

  const addBodyLink = () => {
    bodyLinks.value.push("");
  };

  const removeBodyLink = (index) => {
    bodyLinks.value.splice(index, 1);
  };

  const updateWebsite = (newValue) => {
    website.value = newValue;
  };

  const updateEmail = (newValue) => {
    email.value = newValue;
  };

  return {
    // Readonly state
    name: readonly(name),
    description: readonly(description),
    bodyLinks: readonly(bodyLinks),
    website: readonly(website),
    email: readonly(email),
    // Methods
    updateName,
    updateDescription,
    updateBodyLinks,
    addBodyLink,
    removeBodyLink,
    updateWebsite,
    updateEmail,
  };
}
