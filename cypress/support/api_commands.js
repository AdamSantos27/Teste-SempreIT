const accessToken = `Bearer ${Cypress.env('api_access_token')}`

Cypress.Commands.add('api_sendOrder', order => {
  cy.request({
    method: 'POST',
    url: `https://simple-books-api.glitch.me/orders`,
    body: {

      "bookId": 1,
      "customerName": "Adam",

      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})
