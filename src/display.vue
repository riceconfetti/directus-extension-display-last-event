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
		let endDates = this.value.map((x)=> dayjs(x.endDate));
		endDates.sort((a, b)=> b.diff(a))

		return {lastEvent: endDates[0].fromNow()}
	}
};
</script>
