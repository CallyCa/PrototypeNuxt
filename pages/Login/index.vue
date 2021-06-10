<template>
	<section class="login">
		<h1>Login</h1>
		<form>
			<label for="email">Email</label>
			<input id="email" v-model="login.email" type="email" name="email" />
			<label for="senha">Senha</label>
			<input
				id="senha"
				v-model="login.senha"
				type="password"
				name="senha"
			/>
			<button class="btn" @click.prevent="logar">Logar</button>
		</form>
		<p class="perdeu">
			<a href="/" target="_blank">Esqueceu a senha?</a>
		</p>
		<CreateLogin />
	</section>
</template>

<script>
import CreateLogin from '@/components/Form/CreateLogin.vue'
export default {
	name: 'Login',
	components: {
		CreateLogin,
	},
	data() {
		return {
			login: {
				email: '',
				senha: '',
			},
		}
	},
	methods: {
		logar() {
			this.$store.dispatch('getUsuario', this.login.email)
			this.$router.push({ name: 'user' })
		},
	},
}
</script>

<style lang="scss" scoped>
.login {
	max-width: 500px;
	margin: 0 auto;
	padding: 0 20px;
}
form {
	display: grid;
}
.btn {
	width: 100%;
	max-width: 300px;
	margin-left: auto;
	margin-right: auto;
	&:hover {
		color: white !important;
	}
}
.perdeu {
	text-align: center;
	margin: 20px auto 0 auto;
	a {
		&:hover {
			color: rgb(255, 146, 107) !important;
			text-decoration: underline;
		}
	}
}
h1 {
	text-align: center;
	font-size: 2rem;
	margin-top: 40px;
	color: rgb(255, 146, 107);
}
</style>
