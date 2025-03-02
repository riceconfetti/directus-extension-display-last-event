import { defineInterface } from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineInterface({
  id: "dailydrip-directus-extension-display-last-event",
  name: "Display Last Event",
  icon: "box",
  description: "Displays days since last occuring event",
  component: DisplayComponent,
  options: null,
  types: ["alias"],
  localTypes: ["m2m"],
  fields() {
    return ["*"];
  },
});
