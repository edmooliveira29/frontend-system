/// <reference types="cypress" />

describe('Create Category', () => {
  before(() => {
    cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
  })

  it('Create category ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#button-commom-register').click()
    cy.get('#input-name').type('Company Of Tests')
    cy.get('#input-email').type('category-tests@gmail.com')
    cy.get('#input-username').type('category-tests')
    cy.get('#input-password-singin').type('1234*Abcd')
    cy.get('#input-passwordConfirmation').type('1234*Abcd')
    cy.get('#button-commom-register-singin').click()
    cy.wait(1000)
    cy.get('#link-categories').click()
    cy.wait(1000)
    cy.get('#button-commom-add-category').click()
    for (let i = 1; i <= 5; i++) {
      cy.wait(1000)
      cy.get('#input-type').click()
      if (i % 2 == 0) {
        cy.get('#option-0').click()
      } else {
        cy.get('#option-1').click()
      }
      cy.get('#input-name').type('Category ' + i)
      cy.get('#input-description').type('Description of Category ' + i)
      cy.get('#button-success-save-edit-category').click()
      cy.get('#confirm-text-save').should('have.text', 'Deseja salvar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Salvo com sucesso!')
      cy.get('#confirm-text-ok').click()
      if ((i != 5)) {
        cy.get('#button-commom-add-category').click()
      }
    }
  })

  it('Read category ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('category-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()

    cy.get('#link-categories').click()
    for (let i = 0; i < 5; i++) {
      cy.wait(1000)
      cy.get('#details-' + i).click()
      if (i % 2 == 0) {
        cy.get('#label-type').should('have.text', 'TIPO: ')
        cy.get('#value-type').should('have.text', 'SERVIÇO')
      } else {
        cy.get('#label-type').should('have.text', 'TIPO: ')
        cy.get('#value-type').should('have.text', 'PRODUTO')
      }
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Category ' + (i + 1))
      cy.get('#label-description').should('have.text', 'DESCRIÇÃO: ')
      cy.get('#value-description').should('have.text', 'Description of Category ' + (i + 1))

      if (i != 4) {
        cy.get('#close-modal-details').click()
      }
    }
  })

  it('Update category ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('category-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()
    cy.get('#link-categories').click()
    cy.wait(1000)
    cy.get('#edit-2').click()
    cy.wait(1000)
    cy.get('#input-name').clear().type('Category Updated')
    cy.get('#button-success-save-edit-category').click()
    cy.get('#confirm-text-edit').should('have.text', 'Deseja editar as informações?')
    cy.get('#confirm-text-yes').click()
    cy.get('#confirm-text-save').should('have.text', 'Editado com sucesso!')
    cy.get('#confirm-text-ok').click()
    cy.wait(1000)
    cy.get('#details-2').click()
    cy.get('#label-name').should('have.text', 'NOME: ')
    cy.get('#value-name').should('have.text', 'Category Updated')
    cy.get('#close-modal-details').click()
  })

  it('Delete category ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('category-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()
    cy.get('#link-categories').click()
    for (let i = 0; i < 3; i++) {
      cy.wait(1000)
      cy.get('#delete-' + i).click()
      cy.wait(1000)
      cy.get('#confirm-text-delete').should('have.text', 'Você tem certeza que quer apagar esta informação?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-delete').should('have.text', 'Informação deletada com sucesso!')
      cy.get('#confirm-text-ok').click()
    }
  })

})