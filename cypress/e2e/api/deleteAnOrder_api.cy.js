const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('Delete An Order', () => {
    it('successfully delete an order', () => {
        cy.request({
            method: 'DELETE',
            url: "https://simple-books-api.glitch.me/orders/Z3Ok6mb4p1jwo0iGrev6g",
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(204)

            })
    })
})