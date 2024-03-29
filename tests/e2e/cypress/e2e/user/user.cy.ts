/// <reference types="cypress" />

describe('Create User', () => {
  for (let i = 0; i < 2; i++) {

    before(() => {
      cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
    })

    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('Create owner user ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()

      } else {
        cy.viewport(412, 915)
        cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.wait(2000)
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#button-commom-register').click()
      cy.get('#input-name').type('Company Of Tests')
      cy.get('#input-email').type('company-tests@gmail.com')
      cy.get('#input-username').type('company-tests')
      cy.get('#input-password-singin').type('1234*Abcd')
      cy.get('#input-passwordConfirmation').type('1234*Abcd')
      cy.get('#button-commom-register-singin').click()
      cy.wait(1000)
      cy.get('#img-user').click()
      cy.get('#user-register-dropdown').click()
      if(i == 1) cy.get('#close-sideBar').click()
      cy.get('#button-commom-add-user').click()
      cy.get('#input-name').type('Owner User')
      cy.get('#input-email').type('owner-user@gmail.com')
      cy.get('#input-username').type('owner-user')
      cy.get('#input-password').type('1234*Abcd')
      cy.get('#button-success-save-edit-user').click()
      cy.get('#confirm-text-save').should('have.text', 'Deseja salvar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Salvo com sucesso!')
      cy.get('#confirm-text-ok').click()
      cy.get('#img-user').click()
      cy.get('#logout-system').click()
      cy.get('#confirm-text').click()
      cy.get('#text-logout').should('be.visible')
      cy.get('#text-logout').should('have.text', 'Saindo...')
      cy.wait(2000)
      cy.get('#input-username').type('owner-user')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#welcome-message').should('have.text', 'Seja bem vindo(a) Owner User!')
    })

    it('Read owner user ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.wait(2000)
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#input-username').type('owner-user')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#img-user').click()
      cy.get('#user-register-dropdown').click()
      if(i == 1) cy.get('#close-sideBar').click()
      cy.wait(1000)
      cy.get('#details-1').click()
      cy.wait(1000)
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Owner User')
      cy.get('#close-modal-details').click()
    })

    it('Update owner user ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.wait(2000)
        cy.wait(2000)
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#input-username').type('owner-user')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#img-user').click()
      cy.get('#user-register-dropdown').click()
      if(i == 1) cy.get('#close-sideBar').click()
      cy.wait(1000)
      cy.get('#edit-1').click()
      cy.wait(1000)
      cy.get('#input-name').clear().type('Owner User Updated')
      cy.get('#input-email').clear().type('owner-user-updated@gmail.com')
      cy.get('#button-success-save-edit-user').click()
      cy.get('#confirm-text-edit').should('have.text', 'Deseja editar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Editado com sucesso!')
      cy.get('#confirm-text-ok').click()
      cy.wait(1000)
      cy.get('#details-1').click()
      cy.wait(1000)
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Owner User Updated')
      cy.get('#close-modal-details').click()
    })

    it('Delete owner user ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.wait(2000)
        cy.get('#navbar-toggler').click()
        cy.wait(2000)
      }
      cy.get('#input-username').type('owner-user')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#img-user').click()
      cy.get('#user-register-dropdown').click()
      if(i == 1) cy.get('#close-sideBar').click()
      cy.wait(1000)
      cy.get('#delete-1').click()
      cy.wait(1000)
      cy.get('#confirm-text-delete').should('have.text', 'Você tem certeza que quer apagar esta informação?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-delete').should('have.text', 'Informação deletada com sucesso!')
      cy.get('#confirm-text-ok').click()
    })
  }

})