const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('Get An Order', () => {
    it('successfully', () => {
        cy.request({
            method: 'GET',
            url: "https://simple-books-api.glitch.me/orders/Z3Ok6mb4p1jwo0iGrev6g",
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal("Z3Ok6mb4p1jwo0iGrev6g")
                expect(response.body.customerName).to.equal(Cypress.env('costumerName'))

            })
    })
})