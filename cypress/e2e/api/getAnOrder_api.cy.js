const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('buscar um livro', () => {

    let firstOrderID

    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders',
            headers: { Authorization: accessToken },
        }).then(response => {
            const responseBody = response.body;
            expect(response.status).to.equal(200);
            expect(responseBody).to.be.an('array').and.to.have.length.greaterThan(0)
            firstOrderID = responseBody[0].id
        })
    })

    it('Buscar um livro com sucesso', () => {

        cy.request({
            method: 'GET',
            url: `https://simple-books-api.glitch.me/orders/${firstOrderID}`,
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal(firstOrderID)
                expect(response.body.customerName).to.equal(Cypress.env('costumerName'))

            })
    })

    it('Checar livro que não exista', () => {

        cy.request({
            method: 'GET',
            url: `https://simple-books-api.glitch.me/orders/8`,
            body: {},
            failOnStatusCode: false,
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(404)
                expect(response.body.error).to.equal("No order with id 8.")

            })
    })

})