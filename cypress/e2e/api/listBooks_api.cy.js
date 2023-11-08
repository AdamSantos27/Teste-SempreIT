describe('Listar Livros', () => {
    it('Buscar Livros com Sucesso', () => {
      cy.request({
        method: 'GET',
        url: "https://simple-books-api.glitch.me/books",
        body: {}
    })
    .then(response => {
      const responseBody = response.body
      expect(response.status).to.equal(200)
      expect(response.body).to.length(6)
    })
  })
  })
  