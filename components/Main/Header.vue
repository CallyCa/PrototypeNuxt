<template>
	<header>
		<nav>
			<nuxt-link to="/" class="logo">
				<img src="@/assets/images/vaca.svg" alt="Cow" />
			</nuxt-link>
			<nuxt-link v-if="$store.state.state.login" to="/user" class="btn">
				{{ name }}
			</nuxt-link>
			<nuxt-link v-else class="btn" to="/login">Login</nuxt-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	computed: {
		name() {
			return this.$store.state.state.usuario.nome.replace(/ .*/, '')
		},
	},
}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
	padding: 10px 0;
	> img {
		width: 47px;
		height: 50px;
	}
}
a {
	color: white !important;
}

.btn {
	padding-top: 7px;
}
</style>
