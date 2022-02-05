<template>
	<div class="d-flex align-center">
		<p v-html="aboutContent.text"></p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('content', {
			aboutContent: 'getAbout'
		})
	},

	created() {
		this.$store.dispatch('content/fetchAbout')
	}
}
</script>
