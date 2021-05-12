<template>
	<section class="login">
		<h1>Login</h1>
		<form>
			<label for="email">Email</label>
			<input id="email" type="email" name="email" />
			<label for="senha">Senha</label>
			<input id="senha" type="password" name="senha" />
			<button class="btn">Logar</button>
		</form>
		<p class="perdeu">
			<a href="/" target="_blank">Esqueceu a senha?</a>
		</p>
	</section>
</template>

<script>
export default {
	name: 'Login',
}
</script>

<style></style>
