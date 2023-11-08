describe('Enviar Pedido', () => {
    it('Enviar Pedido com sucesso', () => {

        const sendorder = {}

        cy.api_sendOrder(sendorder)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.created).to.equal(true)
                expect(response.body.orderId).to.equal(response.body.orderId)
            })
    })
})
