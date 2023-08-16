
describe('Edit my account', () => {
  it('enter website and edit my account', () => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
    cy.get('.swal2-confirm').click()
    cy.get('#link-login').click()
    cy.get('#button-login').click({ force: true })
    cy.get('#img-user').click()
    cy.get('#my-account-dropdown').click()
  })
})
