describe('Verifica status', () => {
  it('verificar status da api', () => {
    cy.request({
      method: 'GET',
      url: "https://simple-books-api.glitch.me/status",
      body: {}
  })
  .then(response => {
    const responseBody = response.body
    expect(response.status).to.equal(200)
    expect(response.body.status).to.equal('OK')
  })
})
})
