export const state = () => ({
	widgetStats: {
		cows: 0,
		rabbits: 0,
		sheeps: 0
	},

	home: {},
	about: {}
})

export const mutations = {
	setWidgetStats(state, payload) {
		state.widgetStats = payload
	},

	setHome(state, payload) {
		state.home = payload
	},

	setAbout(state, payload) {
		state.about = payload
	}
}

export const actions = {
    async fetchWidgetStats({ commit }) {
        const response = await this.$axios.get('/left_widget')

        console.log(1);

        commit('setWidgetStats', response.data)
    },

    async fetchHome({ commit }) {
        const response = await this.$axios.get('/home_page')

        commit('setHome', response.data)
    },

    async fetchAbout({ commit }) {
        const response = await this.$axios.get('/about_page')

        commit('setAbout', response.data)
    },
}

export const getters = {
    getWidgetStats(state) {
        return state.widgetStats
    },

    getHome(state) {
        return state.home
    },

    getAbout(state) {
        return state.about
    }
}