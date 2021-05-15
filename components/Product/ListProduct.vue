<template>
	<section class="products-container">
		<div v-if="products && products.length" key="products" class="products">
			<div v-for="product in products" :key="product.id" class="product">
				<nuxt-link
					:to="{ name: 'product', params: { id: product.id } }"
				>
					<img
						v-if="product.fotos"
						:src="product.fotos[0].src"
						:alt="product.fotos[0].titulo"
					/>
					<h2 class="title">{{ product.nome }}</h2>
					<p class="price">{{ product.preco }}</p>
					<p>{{ product.descricao }}</p>
				</nuxt-link>
			</div>
		</div>
		<div v-else-if="products && products.length === 0" key="sem-resultados">
			<p class="no-results">Busca sem resultados</p>
		</div>
	</section>
</template>

<script>
import { api } from '@/services/index'
import { serialize } from '@/helpers/helpers'

export default {
	name: 'ProductLists',
	components: {},
	data() {
		return {
			products: null,
			productsPerPage: 2,
			totalProducts: 0,
			value: '',
		}
	},
	computed: {
		url() {
			const query = serialize(this.$route.query)
			return `/product?_limit=${this.productsPerPage}${query}`
		},
	},
	watch: {
		url() {
			this.getProducts()
		},
	},
	created() {
		if (process.client) {
			this.getProducts()
		}
	},
	methods: {
		getProducts() {
			this.products = null
			window.setTimeout(() => {
				api.get(this.url).then((response) => {
					this.totalProducts = Number(
						response.headers['x-total-count']
					)
					this.products = response.data
				}, 1000)
			})
		},
		// priceProduct() {
		// 	let value = this.value
		// 	value = Number(value)
		// 	if (!isNaN(value)) {
		// 		return (
		// 			value.toLocaleString('pt-BR'),
		// 			{
		// 				style: 'currency',
		// 				currency: 'BRL',
		// 			}
		// 		)
		// 	} else {
		// 		return ''
		// 	}
		// },
	},
}
</script>

<style lang="scss" scoped>
.products {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;
	margin: 30px;

	&-container {
		max-width: 1000px;
		margin: 0 auto;
	}
}

.product {
	box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
	padding: 10px;
	background: #fff;
	border-radius: 10px;
	transition: all 0.2s;

	&:hover {
		box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
		transform: scale(1.1);
		position: relative;
		z-index: 1;
	}
	& > img {
		border-radius: 4px;
		margin-bottom: 20px;
	}
}

.title {
	margin-bottom: 10px;
	font-size: 28px;
	font-weight: 400;
	color: #345;
}

.price {
	font-weight: bold;
	color: #e80;
}

.no-results {
	text-align: center;
}
</style>
