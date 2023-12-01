const accessToken = `Bearer ${Cypress.env('api_access_token')}`
const API_URL = Cypress.env('API_URL')

describe('Deletar um pedido', () => {

    let firstOrderID

    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: `${API_URL}orders`,
            body: {},
            headers: { Authorization: accessToken },
        })
        .then(response => {
            firstOrderID = response.body[0].id
          });
    })

    it('Deve deletar um pedido com sucesso', () => {

        if (firstOrderID) {
            cy.request({
              method: 'DELETE',
              url: `${API_URL}orders/${firstOrderID}`,
              body: {},
              headers: { Authorization: accessToken },
            }).then(response => {
              const responseBody = response.body;
              expect(response.status).to.equal(204)
            })
          }
    })

    it('Deve checar se o id do pedido já foi deletado', () => {
        cy.request({
            method: 'DELETE',
            url: `${API_URL}orders/1`,
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