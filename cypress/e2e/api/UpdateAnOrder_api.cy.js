const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('atualizar Pedido', () => {

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

    it('Atualizar nome do pedido com sucesso', () => {
        cy.request({
            method: 'PATCH',
            url: `https://simple-books-api.glitch.me/orders/${firstOrderID}`,
            body: {

                "customerName": "John"

            },
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(204)

            })
    })
})