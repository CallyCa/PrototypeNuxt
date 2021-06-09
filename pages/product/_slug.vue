<template>
	<section>
		<div v-if="item" class="boardering">
			<div v-for="(board, index) in item" :key="index">
				<div class="information">
					<h1>{{ board.nome }}</h1>
					<p class="price">{{ board.preco | priceNumber }}</p>
					<p class="description">{{ board.descricao }}</p>
				</div>

				<transition v-if="board.vendido === 'false'" mode="out-in">
					<button v-if="!sell" class="btn" @click="sell = true">
						Comprar
					</button>
					<FinishTransation v-else :prod="board" />
				</transition>
				<button v-else class="btn" disabled>Produto vendido</button>
			</div>
		</div>
		<LoadingProducts v-else />
	</section>
</template>

<script>
import { api } from '@/services/index'
import FinishTransation from '@/components/FinishTransation/index'

export default {
	name: 'Slug',
	components: {
		FinishTransation,
	},
	props: {
		id: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			sell: false,
			item: {},
		}
	},
	created() {
		this.pushItem()
	},
	methods: {
		pushItem() {
			api.get(`/product/${this.id}`).then((response) => {
				this.item = response.data

				this.item.forEach(
					({
						nome,
						preco,
						id,
						fotos,
						// eslint-disable-next-line camelcase
						usuario_id,
						descricao,
						vendido,
					}) => {
						return {
							nome,
							preco,
							id,
							fotos,
							usuario_id,
							descricao,
							vendido,
						}
					}
				)
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.boardering {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 30px;
	max-width: 900px;
	padding: 60px 20px;
	margin: 0 auto;
}

.price {
	color: #ff926b;
	font-weight: bold;
	font: 1.5rem;
	margin-bottom: 40px;
}

.description {
	font-size: 1.2rem;
}

.btn {
	margin-top: 60px;
	width: 200px;
}
</style>
