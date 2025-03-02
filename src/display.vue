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
  data() {
    if (this.value && this.value.length > 0) {
      let events = this.value.map((x) => dayjs(x.events_id.endDate));
      events.sort((a, b) => b.diff(a));

      return { lastEvent: events[0].fromNow() };
    } else {
      return { lastEvent: "" };
    }
  },
};
</script>
