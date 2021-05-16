<template>
	<section>
		<h2>Crie sua Conta</h2>
		<transition mode="out-in">
			<button v-if="!criar" class="btn" @click="criar = true">
				Criar Conta
			</button>
			<FormUser v-else>
				<button class="btn btn-form" @click.prevent="criarUsuario">
					Criar Usuario
				</button>
			</FormUser>
		</transition>
	</section>
</template>

<script>
import FormUser from '@/components/Form/FormUser.vue'
export default {
	name: 'LoginCriar',
	components: {
		FormUser,
	},
	data() {
		return {
			criar: false,
		}
	},
	methods: {
		async criarUsuario() {
			try {
				await this.$store.dispatch(
					'criarUsuario',
					this.$store.state.state.login
				)
				await this.$store.dispatch(
					'getUsuario',
					this.$store.state.state.usuario.email
				)
				this.$router.push({ name: 'usuario' })
			} catch (error) {
				// eslint-disable-next-line no-console
				console.log(error)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
h2 {
	text-align: center;
	margin-top: 40px;
	margin-bottom: 10px;
	font-size: 27px;
	font-weight: lighter;
	color: #345;
}
.btn {
	width: 100%;
	max-width: 300px;
	margin-left: auto;
	margin-right: auto;
	&-form {
		max-width: 100%;
	}
	&:hover {
		color: white !important;
	}
}
</style>
