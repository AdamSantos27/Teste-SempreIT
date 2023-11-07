import { faker } from '@faker-js/faker'
describe('Autentication', () => {
    it('', () => {
        const token = {
            "clientName": faker.name.findName(),
            "clientEmail": faker.internet.email(),
        }
        cy.api_autenticationToken(token)
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(201)
                //expect(response.body.accessToken).to.string()
            })
    })
})