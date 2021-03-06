/* eslint-disable prettier/prettier */
import LoadingProducts from '@/components/LoadingProducts/index'
import { api } from '@/services/index'
import Vue from 'vue'

export const state = () => ({
	strict: true,
	state: {
		login: false,
		usuario: {
			id: '',
			nome: '',
			email: '',
			senha: '',
			cep: '',
			rua: '',
			numero: '',
			bairro: '',
			cidade: '',
			estado: '',
		},
		usuario_produtos: null,
	},
})
export const mutations = {
	UPDATE_LOGIN(state, payload) {
		state.state.login = payload
	},
	UPDATE_USUARIO(state, payload) {
		state.state.usuario = Object.assign(state.state.usuario, payload)
	},
	UPDATE_USUARIO_PRODUTOS(state, payload) {
		state.state.usuario_produtos = payload
	},
	ADD_USUARIO_PRODUTOS(state, payload) {
		state.state.usuario_produtos.unshift(payload)
	},
}

export const actions = {
	getUsuarioProdutos(context) {
		api.get(`/product?usuario_id=${context.state.state.usuario.id}`).then(
			(response) => {
				context.commit('UPDATE_USUARIO_PRODUTOS', response.data)
			}
		)
	},
	getUsuario(context, payload) {
		return api.get(`/usuario/${payload}`).then((response) => {
			context.commit('UPDATE_USUARIO', response.data)
			context.commit('UPDATE_LOGIN', true)
		})
	},
	criarUsuario(context, payload) {
		context.commit('UPDATE_USUARIO', { id: payload.email })
		return api.post('/usuario', payload)
	},
	deslogarUsuario(context) {
		context.commit('UPDATE_USUARIO', {
			id: '',
			nome: '',
			email: '',
			senha: '',
			cep: '',
			rua: '',
			numero: '',
			bairro: '',
			cidade: '',
			estado: '',
		})
		context.commit('UPDATE_LOGIN', false)
	},
}

Vue.component('LoadingProducts', LoadingProducts)

Vue.filter("priceNumber", value => {
	value = Number(value);
	if(!isNaN(value)) {
	  return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL"
	  });
	} else {
	  return ""
	}
})
