<template>
	<v-app>
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title class="mr-5">Фермерский роддом №5</v-toolbar-title>
            <v-spacer/>
			<v-toolbar-title>Кириллов Даниил Павлович 201-322</v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<WidgetStats />
		</v-navigation-drawer>

		<v-main>
			<v-container class="pa-10">
				<Nuxt />
			</v-container>
		</v-main>
		<v-footer app>
			<span>© {{ new Date().getFullYear() }} Кириллов Д.П. 201-322</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data() {
		return {
			drawer: true,
			items: [
				{
					icon: 'mdi-home',
					title: 'Главная',
					to: '/'
				},
				{
					icon: 'mdi-account-box',
					title: 'О нас',
					to: '/about'
				},
				{
					icon: 'mdi-view-list',
					title: 'Список животных',
					to: '/baby'
				}
			]
		}
	}
}
</script>
