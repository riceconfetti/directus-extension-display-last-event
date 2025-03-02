<template>
  <div>{{ lastEvent }}</div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

let config = {
  thresholds: [
    { l: "s", r: 1 },
    { l: "m", r: 1 },
    { l: "mm", r: 59, d: "minute" },
    { l: "h", r: 1 },
    { l: "hh", r: 23, d: "hour" },
    { l: "d", r: 1 },
    { l: "dd", r: 29, d: "day" },
    { l: "M", r: 1 },
    { l: "MM", r: 11, d: "month" },
    { l: "y", r: 1 },
    { l: "yy", d: "year" },
  ],
};
dayjs.extend(relativeTime, config);
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
