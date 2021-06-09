<template>
	<section>
		<h2>Endereço de Envio</h2>
		<FormUser>
			<button class="btn" @click.prevent="finishBuy">
				Finalizar Compra
			</button>
		</FormUser>
	</section>
</template>

<script>
import { api } from '@/services/index'
import { mapState } from 'vuex'
import FormUser from '../Form/FormUser'

export default {
	name: 'FinishTransation',
	components: {
		FormUser,
	},
	props: ['prod'],
	computed: {
		...mapState(['usuario']),
		buy() {
			return {
				comprador_id: this.usuario.email,
				vendedor_id: this.usuario.usuario_id,
				product: this.product,
				endereco: {
					cep: this.usuario.numerocep,
					rua: this.usuario.rua,
					numero: this.usuario.numero,
					cidade: this.usuario.cidade,
					estado: this.usuario.estado,
				},
			}
		},
	},
	methods: {
		createTransation() {
			return api.post('/transacao', this.buy).then(() => {
				this.$router.push({ name: 'compras' })
			})
		},
		async createUser() {
			try {
				await this.$store.dispatch(
					'criarUsuario',
					this.$store.state.state.usuario
				)
				await this.$store.dispatch(
					'getUsuario',
					this.$store.state.state.usuario.email
				)
				await this.createTransation()
			} catch (error) {
				console.log(error)
			}
		},
		finishBuy() {
			if (this.$store.state.state.login) {
				this.createTransation()
			} else {
				this.createUser()
			}
		},
	},
}
</script>

<style lang="scss" scoped>
h2 {
	margin-top: 40px;
	margin-bottom: 20px;
}

.btn {
	background: #ff926b;
	&:hover {
		color: white;
	}
}
</style>
