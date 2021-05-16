<template>
	<ul v-if="totalProducts > 1">
		<nuxt-link :to="{ query: query(1) }">First</nuxt-link>
		<li v-for="page in listPages" :key="page">
			<nuxt-link :to="{ query: query(page) }">{{ page }}</nuxt-link>
		</li>
		<nuxt-link :to="{ query: query(totalProducts) }">></nuxt-link>
	</ul>
</template>

<script>
export default {
	props: {
		productsPerPage: {
			type: Number,
			default: 1,
		},
		totalProducts: {
			type: Number,
			default: 1,
		},
	},
	computed: {
		listPages() {
			const current = Number(this.$route.query._page)
			const range = 9
			const offset = Math.ceil(range / 2)
			const total = this.totalProducts
			const pagesArray = []

			for (let i = 1; i <= total; i++) {
				pagesArray.push(i)
			}
			pagesArray.splice(0, current - offset)
			pagesArray.splice(range, total)

			return pagesArray
		},
	},
	methods: {
		query(page) {
			return {
				...this.$route.query,
				_page: page,
			}
		},
	},
	totalPages() {
		const total = this.totalProducts / this.productsPerPage
		return total !== Infinity ? Math.ceil(total) : 0
	},
}
</script>

<style lang="scss" scoped>
ul {
	grid-column: 1 / -1;
	margin-top: 80px;
}

li {
	display: inline-block;
	& > a {
		padding: 2px 8px;
		margin: 4px;
		border-radius: 14px;

		&:active,
		&:hover {
			color: rgb(255, 159, 121) !important;
		}
	}
}
</style>
