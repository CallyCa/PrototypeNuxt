<template>
	<section class="users">
		<nav class="sidenav">
			<ul>
				<li>
					<nuxt-link :to="{ name: 'usuario' }">Produtos</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'buy' }">Compras</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'sells' }">Vendas</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'edit-user' }"
						>Editar usuário</nuxt-link
					>
				</li>
				<li>
					<button @click="disconnect">Deslogar</button>
				</li>
			</ul>
		</nav>
		<transition mode="out-in">
			<Nuxt />
		</transition>
	</section>
</template>

<script>
export default {
	name: 'User',
	methods: {
		disconnect() {
			this.$store.dispatch('deslogarUsuario')
			this.$router.push('/login')
		},
	},
}
</script>

<style lang="scss" scoped>
.users {
	display: grid;
	grid-template-columns: minmax(140px, 200px) 1fr;
	max-width: 900px;
	margin: 40px auto;
	grid-gap: 30px;
	padding: 30px;
}

.sidenav a,
.sidenav button {
	padding: 10px;
	display: block;
	background: #f4f7fc;
	margin-bottom: 10px;
	border-radius: 4px;
	border: none;
	width: 100%;
	font-size: 1rem;
	text-align: left;
	font-family: sans-serif;
	cursor: pointer;

	&.nuxt-link-exact-active,
	&:hover,
	> button:hover {
		background: rgb(255, 146, 107);
		color: #fff;
	}
}
</style>
