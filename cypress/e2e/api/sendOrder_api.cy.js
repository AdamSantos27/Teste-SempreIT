describe('Send Orders', () => {
    it('successfully', () => {

        const order = {

        }

        cy.api_sendOrder(order)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.created).to.equal(true)
                expect(response.body.orderId).to.equal(response.body.orderId)
            })
    })
})