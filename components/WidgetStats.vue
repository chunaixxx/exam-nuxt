<template>
	<v-list>
		<v-subheader>В нашем роддоме родилось:</v-subheader>

		<v-list-item>
			<v-list-item-content>
				<v-list-item-title
					>Добрейших коровок: {{ widgetStats.cows }}</v-list-item-title
				>
			</v-list-item-content>
		</v-list-item>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title
					>Милейших кроликов: {{ widgetStats.rabbits }}</v-list-item-title
				>
			</v-list-item-content>
		</v-list-item>

		<v-list-item>
			<v-list-item-content>
				<v-list-item-title
					>Пушистейших овечек: {{ widgetStats.sheeps }}</v-list-item-title
				>
			</v-list-item-content>
		</v-list-item>

		<v-list-item>
			<v-img
				src="/left_widget_img.jpg"
				width="200"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			></v-img>
		</v-list-item>
	</v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('content', {
			widgetStats: 'getWidgetStats'
		})
	},

	created() {
		this.$store.dispatch('content/fetchWidgetStats')
	}
}
</script>
