const accessToken = `Bearer ${Cypress.env('api_access_token')}`
describe('buscar pedidos', () => {

    const API_URL = Cypress.env('API_URL')

    it('buscar lista de pedidos com sucesso', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}orders`,
            body: {},
            headers: { Authorization: accessToken },
        })
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(200)

            })
    })
})
