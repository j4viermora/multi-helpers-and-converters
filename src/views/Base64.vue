<script setup lang="ts">
import { ref, computed } from "vue";

const kindConvertion = ref("text");
const toConvert = ref("");
const converted = ref("");
const showNotificationCopied = ref(false);

const isTextConvertion = computed(() => kindConvertion.value === "text");

const textToBase64 = () => {
  converted.value = btoa(toConvert.value);
};

const base64ToText = () => {
  converted.value = atob(toConvert.value);
};

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(converted.value);
  notificationToggle();
};

const notificationToggle = () => {
  showNotificationCopied.value = true;

  setTimeout(() => {
    showNotificationCopied.value = false;
  }, 2000);
};

const reset = () => {
  toConvert.value = "";
  converted.value = "";
};
</script>
<template>
  <div>
    <div v-if="showNotificationCopied" class="notification is-primary">
      Copied to clipboard
    </div>
    <h1 class="title">Base64 converter</h1>
    <div class="is-flex">
      <div class="select mb-4">
        <select v-model="kindConvertion">
          <option value="text">Text</option>
          <option value="base64">Base64</option>
        </select>
      </div>
      <div class="ml-2">
        <button class="button is-danger" @click="reset">Clear forms</button>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <textarea v-model="toConvert" class="textarea"> </textarea>
        <button
          v-if="isTextConvertion"
          class="button is-primary mt-4"
          :disabled="toConvert.length === 0"
          @click="textToBase64"
        >
          Convert to base 64
        </button>
        <button
          v-else
          class="button is-primary mt-4"
          :disabled="toConvert.length === 0"
          @click="base64ToText"
        >
          Convert to text
        </button>
      </div>
      <div class="column">
        <textarea v-model="converted" class="textarea"> </textarea>
        <button
          class="button mt-4"
          :disabled="converted.length === 0"
          @click="copyToClipboard"
        >
          Copy
        </button>
      </div>
    </div>
  </div>
</template>
