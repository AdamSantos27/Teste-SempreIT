describe('Buscar por um livro', () => {

    const API_URL = Cypress.env('API_URL')

    it('Buscar por um livro com sucesso', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}books/1`,
            body: {}
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal(1)
                expect(response.body.name).to.equal("The Russian")
                expect(response.body.author).to.string("James Patterson and James O. Born")
                expect(response.body.isbn).to.string("1780899475")
                expect(response.body.type).to.string("fiction")
                expect(response.body.price).to.equal(12.98)
                expect(response.body["current-stock"]).to.equal(12)
                expect(response.body.available).to.equal(true)
            })
    })
})
