describe('Edit my account', (): void => {
  it('enter website', () => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
    cy.get('.swal2-confirm').click()
    cy.get('#link-login').click()
    cy.get('#button-login').click({ force: true })
    cy.get('#img-user').click()
    cy.get('#my-account-dropdown').click()

    //expect(true).to.equal(true)
  })
  it('enter my account', () => {
  })
})
