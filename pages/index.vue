<template>
	<div class="d-flex align-center">
		<p class="mr-5" v-html="homeContent.text"></p>
		<v-img :src="homeContent.image" width="700" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('content', {
			homeContent: 'getHome'
		})
	},

	created() {
		this.$store.dispatch('content/fetchHome')
	}
}
</script>
