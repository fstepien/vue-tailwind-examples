<template>
  <span
    class="border rounded-full border-grey relative items-center cursor-pointer w-12 transition-slow-ease-in"
    :class="value ? 'bg-green-500 justify-end' : 'justify-start bg-white'"
    @click="$emit('input', !value)"
  >
    <span
      class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow absolute transition-inherit"
      :class="value ? 'left-100 -translate-x-full' : 'left-0'"
    >
    </span>
  </span>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {};
  },

  computed: {}
};
</script>
