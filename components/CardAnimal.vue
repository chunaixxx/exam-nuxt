<template>
	<v-card>
		<v-img
			:src="`/${animal.type}_img.jpg`"
			class="white--text align-end"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			height="150"
		>
			<v-card-title>{{ animal.name }}</v-card-title>
		</v-img>

		<v-card-text class="text-left">
			<v-row>
				<v-col
					><div>Цвет</div>
					<p class="text-h6 text--primary">{{ animal.color }}</p></v-col
				>
				<v-col
					><div>Вес</div>
					<p class="text-h6 text--primary">{{ animal.weight }}кг</p></v-col
				>
				<v-col
					><div>Пол</div>
					<p class="text-h6 text--primary">{{ animal.sex }}</p></v-col
				>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: ['animal']
}
</script>
