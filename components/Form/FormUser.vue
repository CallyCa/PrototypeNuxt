<template>
	<form>
		<div v-if="mostrarDadosLogin" class="usuario">
			<label for="nome">Nome</label>
			<input id="nome" v-model="nome" type="text" name="nome" />
			<label for="email">Email</label>
			<input id="email" v-model="email" type="email" name="email" />
			<label for="senha">Senha</label>
			<input id="senha" v-model="senha" type="password" name="senha" />
		</div>

		<label for="cep">Cep</label>
		<input
			id="cep"
			v-model="cep"
			type="text"
			name="cep"
			@keyup="preencherCep"
		/>
		<label for="rua">Rua</label>
		<input id="rua" v-model="rua" type="text" name="rua" />
		<label for="numero">Numero</label>
		<input id="numero" v-model="numero" type="text" name="numero" />
		<label for="bairro">Bairro</label>
		<input id="bairro" v-model="bairro" type="text" name="bairro" />
		<label for="cidade">Cidade</label>
		<input id="cidade" v-model="cidade" type="text" name="cidade" />
		<label for="estado">Estado</label>
		<input id="estado" v-model="estado" type="text" name="estado" />
		<div class="button">
			<slot></slot>
		</div>
	</form>
</template>

<script>
import { mapFields } from '@/helpers/helpers.js'
import { getCep } from '@/services/index'
export default {
	computed: {
		...mapFields({
			fields: [
				'nome',
				'email',
				'senha',
				'rua',
				'cep',
				'numero',
				'bairro',
				'cidade',
				'estado',
			],
			base: 'usuario',
			mutation: 'UPDATE_USUARIO',
		}),
		mostrarDadosLogin() {
			return (
				!this.$store.state.state.usuario.login ||
				this.$route.name === 'usuario-editar'
			)
		},
	},
	methods: {
		preencherCep() {
			const cep = this.cep.replace(/\D/g, '')
			if (cep.length === 8) {
				getCep(cep).then((response) => {
					this.rua = response.data.longradouro
					this.bairro = response.data.bairro
					this.estado = response.data.uf
					this.cidade = response.data.localidade
				})
			}
		},
	},
}
</script>

<style scoped>
form,
.usuario {
	display: grid;
	grid-template-columns: 80px 1fr;
	align-items: center;
}
.usuario {
	grid-column: 1 / 3;
}
.button {
	grid-column: 2;
	margin-top: 10px;
}
</style>
