const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('Deletar um pedido', () => {

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

    it('Deve deletar um pedido com sucesso', () => {
        
        cy.request({
            method: 'DELETE',
            url: `https://simple-books-api.glitch.me/orders/${firstOrderID}`,
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(204)

            })
    })

    it('Deve checar se o id do pedido já foi deletado', () => {
        cy.request({
            method: 'DELETE',
            url: "https://simple-books-api.glitch.me/orders/1",
            body: {},
            failOnStatusCode: false,
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(404)
                expect(response.body.error).to.equal("No order with id 1.")

            })
    })

})