describe('Listar Livros', () => {

  const API_URL = Cypress.env('API_URL')

  it('Buscar Livros com Sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}books`,
      body: {}
    })
      .then(response => {
        const responseBody = response.body
        expect(response.status).to.equal(200)
        expect(response.body).to.length(6)
      })
  })
})
