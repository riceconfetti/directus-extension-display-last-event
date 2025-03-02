<template>
	<div>{{ lastEvent }}</div>
</template>

<script>
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	data() {
		return { lastEvent: this.value.length > 0 ? this.value[0] : ''}
	}
};
</script>
