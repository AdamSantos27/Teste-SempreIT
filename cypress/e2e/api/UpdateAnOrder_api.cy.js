const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('Get An Order', () => {
    it('successfully', () => {
        cy.request({
            method: 'PATCH',
            url: "https://simple-books-api.glitch.me/orders/NO3p11MAW-w3JRswiUBRh",
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