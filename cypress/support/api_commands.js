const accessToken = `Bearer ${Cypress.env('api_access_token')}`

Cypress.Commands.add('api_sendOrder', sendorder => {

  const bookId = Math.floor(Math.random() * 6) + 1

  cy.request({
    method: 'POST',
    url: "https://simple-books-api.glitch.me/orders",
    body: {

      "bookId": bookId,
      "customerName": "Adam",

      initialize_with_readme: true
    },
    failOnStatusCode: false,
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
    failOnStatusCode: false,
    headers: { Authorization: accessToken },
  })
})
