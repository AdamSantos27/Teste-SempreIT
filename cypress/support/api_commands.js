const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('', status => {
  cy.request({
    method: 'POST',
    url: `https://simple-books-api.glitch.me`,
    body: {

      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})
