<template>
  <div class="flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md px-6 py-6">
      <h2
        class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4"
      >
        Notifications
      </h2>
      <p class="mt-4 text-gray-700">
        Choose your notification settings.
      </p>
      <div class="flex mt-6">
        <Toggle v-model="email" />
        <span class="ml-4">Send me all the emails.</span>
      </div>
      <div class="flex mt-6">
        <Toggle v-model="sms" />
        <span class="ml-4">Text me tailwindcss news</span>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/components/Toggle.vue";
export default {
  name: "ToggleExample",
  components: {
    Toggle
  },
  data() {
    return {
      email: false,
      sms: false
    };
  }
};
</script>
