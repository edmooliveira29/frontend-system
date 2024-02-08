/// <reference types="cypress" />

describe('Customer', () => {
  for (let i = 0; i < 2; i++) {

    before(() => {
      cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
    })

    beforeEach(() => {
      cy.viewport(1366, 768)
      cy.visit('http://localhost:3000/')
    })

    it('Create physical customer ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()

      } else {
        cy.viewport(412, 915)
        cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }

      cy.get('#button-commom-register').click()
      cy.get('#input-name').type('Company Of Tests')
      cy.get('#input-email').type('customer-tests@gmail.com')
      cy.get('#input-username').type('customer-tests')
      cy.get('#input-password-singin').type('1234*Abcd')
      cy.get('#input-passwordConfirmation').type('1234*Abcd')
      cy.get('#button-commom-register-singin').click()
      cy.wait(1000)
      cy.get('#link-customers').click()
      cy.wait(1000)
      cy.get('#button-commom-add-customer').click()
      cy.get('#input-name').type('Customer Of Tests')
      cy.get('#input-cpf').type('123.456.789.10')
      cy.get('#input-birthday').type('01/01/2023')
      cy.get('#input-gender').click()
      cy.get('#option-0').click()
      cy.get('#input-nickname').type('customernickname')
      cy.get('#input-phoneNumber').type('11999999999')
      cy.get('#input-email').type('customer-tests@gmail.com')
      cy.get('#input-additionalInformation').type('Customer Additional Information')
      cy.get('#input-zipCode').type('32180640')
      cy.get('#input-houseNumber').type('1500')
      cy.get('#input-complement').type('House A')
      cy.get('#button-success-save-edit-customer').click()
      cy.get('#confirm-text-ok').click()
      cy.get('#input-cpf').clear().type('000.000.000-00')
      cy.get('#button-success-save-edit-customer').click()
      cy.get('#confirm-text-save').should('have.text', 'Deseja salvar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Salvo com sucesso!')
      cy.get('#confirm-text-ok').click()
    })

    it('Read customer ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
        cy.wait(2000)      }
      cy.get('#input-username').type('customer-tests')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#link-customers').click()
      cy.wait(1000)
      cy.get('#details-0').click()
      cy.wait(1000)
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Customer Of Tests')
      cy.get('#close-modal-details').click()

    })

    it('Update customer ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#input-username').type('customer-tests')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#link-customers').click()
      cy.wait(1000)
      cy.get('#edit-0').click()
      cy.wait(1000)
      cy.get('#input-name').clear().type('Customer Updated')
      cy.get('#input-email').clear().type('customer-updated@gmail.com')
      cy.get('#button-success-save-edit-customer').click()
      cy.get('#confirm-text-edit').should('have.text', 'Deseja editar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Editado com sucesso!')
      cy.get('#confirm-text-ok').click()
      cy.wait(1000)
      cy.get('#details-0').click()
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Customer Updated')
      cy.get('#close-modal-details').click()
    })

    it('Delete customer ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#input-username').type('customer-tests')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#link-customers').click()
      cy.wait(1000)
      cy.get('#delete-0').click()
      cy.wait(1000)
      cy.get('#confirm-text-delete').should('have.text', 'Você tem certeza que quer apagar esta informação?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-delete').should('have.text', 'Informação deletada com sucesso!')
      cy.get('#confirm-text-ok').click()
    })
  }
})