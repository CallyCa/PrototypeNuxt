<template>
	<div class="layout">
		<Header />
		<main id="main">
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/Main/Header.vue'
import Footer from '@/components/Main/Footer.vue'

export default {
	name: 'Layout',
	components: {
		Header,
		Footer,
	},
}
</script>

<style>
* {
	box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
}

body {
	font-family: sans-serif;
	color: #345;
	background: url('@/assets/images/Prism.svg') repeat top;
}

a {
	color: #345;
	text-decoration: none;
}

img {
	width: 100%;
	display: block;
}

.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

#main {
	flex: 1;
}

input,
textarea {
	border-radius: 4px;
	border: 1px solid white;
	padding: 15px;
	box-shadow: 0 4px 8px rgba(30, 30, 90, 0.1);
	transition: all 0.3s;
	font-size: 1rem;
	font-family: sans-serif;
	margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
	outline: none;
	box-shadow: 0 6px 12px rgba(30, 30, 90, 0.2);
	border-color: rgb(255, 146, 107);
}
</style>
