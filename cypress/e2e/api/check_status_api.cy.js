describe('Checar status da api', () => {

const API_URL = Cypress.env('API_URL')

  it('Deve checar api status com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}status`,
      body: {}
    })
      .then(response => {
        const responseBody = response.body
        expect(response.status).to.equal(200)
        expect(response.body.status).to.equal('OK')
      })
  })
})
