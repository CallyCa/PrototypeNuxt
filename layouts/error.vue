<template>
	<div class="error">
		<h1>Página não encontrada</h1>
		<span>Sad 404 :( 🍉</span>
		<nuxt-link to="/">Voltar ao inicio</nuxt-link>
	</div>
</template>

<script></script>
<style lang="scss" scoped>
.error {
	min-height: 400px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 500px;
	margin: auto;
	color: #345 !important;

	span {
		font-size: 24px;
		text-align: center;
		margin-top: 16px;
		margin-right: 20px;
	}

	a {
		color: rgb(255, 146, 107) !important;
		font-weight: bold;
		margin-top: 30px;
		margin-right: 48px;
		text-decoration: none;
		transition: 0.3s;
		text-align: center;
		&:hover {
			color: rgb(250, 176, 149) !important;
		}
	}
}
</style>
