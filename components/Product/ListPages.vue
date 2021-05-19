<template>
	<ul v-if="totalproducts > 1">
		<nuxt-link :to="{ query: query(1) }">First</nuxt-link>
		<li v-for="page in listPages" :key="page">
			<nuxt-link :to="{ query: query(page) }">{{ page }}</nuxt-link>
		</li>
		<nuxt-link :to="{ query: query(totalproducts) }">></nuxt-link>
	</ul>
</template>

<script>
export default {
	props: {
		queryproducts: {
			type: Number,
			default: 1,
		},
		totalproducts: {
			type: Number,
			default: 1,
		},
	},
	computed: {
		listPages() {
			const current = Number(this.$route.query._page)
			const range = 9
			const offset = Math.ceil(range / 2)
			const total = this.totalproducts
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
		const total = this.totalproducts / this.queryproducts
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
