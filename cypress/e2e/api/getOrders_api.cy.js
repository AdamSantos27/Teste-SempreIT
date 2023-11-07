const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('Get Orders', () => {
    it('successfully', () => {
        cy.request({
            method: 'GET',
            url: "https://simple-books-api.glitch.me/orders",
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(200)
               
            })
    })
})
