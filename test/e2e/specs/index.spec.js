const Page = require('../pageObjects/main.page')

describe('Title test', () => {
	it('should open correct app', () => {
		Page.open()
		expect(browser).toHaveTitle('Projeto NuxtJS')
	})
})
