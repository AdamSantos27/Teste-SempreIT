const accessToken = `Bearer ${Cypress.env('api_access_token')}`
const costumerName = `${Cypress.env('costumerName')}`
describe('buscar um livro', () => {

    let firstOrderID

    beforeEach(() => {
    cy.api_sendOrder()
    })

    it('Buscar um livro com sucesso', () => {

        cy.api_sendOrder()
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(201)
                expect(response.body.id).to.equal(firstOrderID)
                expect(response.body.customerName).to.equal(Cypress.env(costumerName))

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