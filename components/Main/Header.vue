<template>
	<header>
		<nav>
			<nuxt-link to="/" class="logo">
				<img src="@/assets/images/vaca.svg" alt="Cow" />
			</nuxt-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
	padding: 10px 0;
}

.logo img {
	width: 47px;
	height: 50px;
}
</style>
