<template>
	<div class="text-center">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" dark v-bind="attrs" v-on="on">
					Добавить новое животное
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					Добавить новое животное
				</v-card-title>

				<v-card-text class="pa-15">
					<FormAnimals @closeDialog="closeDialog" />
				</v-card-text>
			</v-card>
		</v-dialog>

        <v-row class="mt-10">
            <v-col v-for="animal in animals" :key="animal.id">
                <CardAnimal :animal="animal"/>
            </v-col>
        </v-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		dialog: false
	}),

    methods: {
        closeDialog() {
            this.dialog = false
        }
    },

	computed: {
		...mapGetters('baby', {
			animals: 'getAnimals'
		})
	},

    async mounted() {
        await this.$store.dispatch('baby/fetchAnimals')
    }
}
</script>
