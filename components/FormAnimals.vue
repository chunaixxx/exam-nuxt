<template>
	<form>
		<div v-for="(value, key) in form" :key="key">
			<v-text-field
				v-if="value.type === 'string'"
				:label="value.title"
				v-model="data[key]"
				required
			></v-text-field>
			<v-select
				v-if="value.type === 'select'"
				:items="value.values"
				:label="value.title"
				v-model="data[key]"
				required
			></v-select>
		</div>
		<v-btn width="100%" @click="handleForm()" color="success" >Добавить</v-btn>
		<v-btn width="100%" @click="handleForm()" color="error" >Добавить</v-btn>
	</form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    emits: ['closeDialog'],

	data: () => ({
		data: {}
	}),

	computed: {
		...mapGetters('baby', {
			form: 'getForm'
		})
	},

	methods: {
		handleForm() {
			try {
				this.$axios.post('/baby', this.data)
				this.$store.dispatch('baby/fetchAnimals')

				console.log(1)

				for (const field in this.data) {
					this.data[field] = ''
				}

                this.$emit('closeDialog')
			} catch (e) {
				console.log(e)
			}
		}
	},

	async mounted() {
		await this.$store.dispatch('baby/fetchForm')

		for (const field in this.form) {
			this.data[field] = ''
		}
	}
}
</script>
