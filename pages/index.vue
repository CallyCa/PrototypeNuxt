<template>
	<section>
		<h1>Comprar Produtos</h1>
		<ProdSearch />
		<ListProduct />
	</section>
</template>

<script>
import ProdSearch from '@/components/Product/ProdSearch.vue'
import ListProduct from '@/components/Product/ListProduct.vue'

export default {
	name: 'Home',
	components: {
		ProdSearch,
		ListProduct,
	},
}
</script>

<style lang="scss" scoped>
h1 {
	font-size: 2rem;
	color: rgb(255, 146, 107);
	margin-top: 40px;
	text-align: center;
}
</style>
