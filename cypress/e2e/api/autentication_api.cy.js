import { faker } from '@faker-js/faker'
describe('Autenticação no sistema', () => {
    it('autenticar no sistema com sucesso', () => {
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

    it('Deve validar parametro clientName é obrigatório', () => {

        const token = {
            "clientName": "",
            "clientEmail": faker.internet.email()

        }
        cy.api_autenticationToken(token)
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(400)
                expect(response.body.error).to.equal("Invalid or missing client name.")

            })
    })

    it('Deve validar parametro clientEmail já cadastrado', () => {

        const token = {

            "clientName": faker.name.findName(),
            "clientEmail": "adamlsantoss.qa@gmail.com"

        }
        cy.api_autenticationToken(token)
            .then(response => {
                const responseBody = response.body
                expect(response.status).to.equal(409)
                expect(response.body.error).to.equal("API client already registered. Try a different email.")

            })
    })
})