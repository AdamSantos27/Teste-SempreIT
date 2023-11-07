const accessToken = `Bearer ${Cypress.env('api_access_token')}`

Cypress.Commands.add('api_sendOrder', sendorder => {
  cy.request({
    method: 'POST',
    url: "https://simple-books-api.glitch.me/orders",
    body: {

      "bookId": 1,
      "customerName": "Adam",

      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_autenticationToken', token => {
  cy.request({
    method: 'POST',
    url: "https://simple-books-api.glitch.me/api-clients/",
    body: {

      "clientName": token.clientName,
      "clientEmail": token.clientEmail,

    },
    headers: { Authorization: accessToken },
  })
})
