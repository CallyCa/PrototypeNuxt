const Page = require('../pageObjects/main.page')

describe('Test Title Input', () => {
	it('should test main title input', () => {
		Page.open()
		const titleMainSearch = $('h1=Comprar Produtos')
		expect(titleMainSearch).toBePresent('Comprar Produtos')
	})
})

describe('Test input Home', () => {
	it('should test input', () => {
		$('#busca').setValue('Teste teste teste')
		$('#lupa').click()
	})

	it('should test main logo', () => {
		$('.logo').click()
	})

	it('should select second page', () => {
		$('li:nth-child(3) > a').click()
	})
})
