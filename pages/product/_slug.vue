<template>
	<div>
		<p>{{ item }}</p>
	</div>
</template>

<script>
import { api } from '@/services/index'
// import axios from 'axios'
// import FinishTransation from '@/componenets/FinishTransation/index'
// import FinishTransation from '@/componenets/Product/ListProduct'

export default {
	name: 'Slug',
	components: {
		// FinishTransation,
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
			item: null,
		}
	},
	created() {
		this.getItem()
	},
	methods: {
		getItem() {
			api.get(`/product/${this.id}`).then((response) => {
				this.item = response.data
			})
		},
	},
}
</script>

<style></style>
