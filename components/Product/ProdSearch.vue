<template>
	<form>
		<input
			id="busca"
			v-model="busca"
			name="busca"
			type="text"
			placeholder="Buscar"
		/>
		<input id="lupa" type="submit" value="Buscar" />
	</form>
</template>

<script>
export default {
	data() {
		return {
			busca: '',
		}
	},
	methods: {},
}
</script>

<style scoped>
form {
	max-width: 600px;
	margin: 30px auto 60px auto;
	position: relative;
}

#busca {
	width: 100%;
	padding: 20px;
	border: none;
}

#busca:focus,
#busca:hover {
	transform: scale(1.1);
}

#lupa {
	width: 62px;
	height: 62px;
	background: url('@/assets/images/search.svg') no-repeat center center;
	text-indent: -150px;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	box-shadow: none;
}
</style>
