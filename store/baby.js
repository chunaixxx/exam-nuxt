export const state = () => ({
	animals: [],
	form: {}
})

export const mutations = {
	setAnimals(state, payload) {
		state.animals = payload
	},

	setForm(state, payload) {
		state.form = payload
	}
}

export const actions = {
	async fetchAnimals({ commit }) {
		try {
			const response = await this.$axios.get('/baby')

			commit('setAnimals', response.data)
		} catch (e) {
			console.log(e)
		}
	},

	async fetchForm({ commit }) {
		try {
			const response = await this.$axios.get('/baby/form')

			commit('setForm', response.data.fields)
		} catch (e) {
			console.log(e)
		}
	}
}

export const getters = {
	getAnimals(state) {
		return state.animals
	},

	getForm(state) {
		return state.form
	}
}
