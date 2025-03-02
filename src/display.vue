<template>
  <div>{{ lastEvent }}</div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ref } from "vue";
dayjs.extend(relativeTime);
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  setup() {
    const lastEvent = ref("");

    if (this.value.length > 0) {
      let events = this.value;
    }
  },
};
</script>
