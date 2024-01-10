/// <reference types="cypress" />

describe('Create Product', () => {
  before(() => {
    cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
  })

  it('Create product ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#button-commom-register').click()
    cy.get('#input-name').type('Company Of Tests')
    cy.get('#input-email').type('product-tests@gmail.com')
    cy.get('#input-username').type('product-tests')
    cy.get('#input-password-singin').type('1234*Abcd')
    cy.get('#input-passwordConfirmation').type('1234*Abcd')
    cy.get('#button-commom-register-singin').click()
    cy.wait(1000)
    cy.get('#link-categories').click()
    cy.wait(1000)
    cy.get('#button-commom-add-category').click()
    for (let i = 1; i <= 2; i++) {
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
      if ((i != 2)) {
        cy.get('#button-commom-add-category').click()
      }
    }

    cy.get('#icon-bar-menu').click()
    cy.get('#link-products').click()
    cy.wait(1000)
    cy.get('#button-commom-add-product').click()
    for (let i = 1; i <= 3; i++) {
      cy.wait(1000)
      cy.get('#input-name').type('Product ' + i)
      cy.get('#input-description').type('Description of Product ' + i)
      cy.get('#input-category').click()
      cy.get('#option-0').click()
      cy.get('#input-price').type('1099')
      cy.get('#input-quantityInStock').type('10')
      cy.get('#button-success-save-edit-product').click()
      cy.get('#confirm-text-save').should('have.text', 'Deseja salvar as informações?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-save').should('have.text', 'Salvo com sucesso!')
      cy.get('#confirm-text-ok').click()
      if ((i != 3)) {
        cy.get('#button-commom-add-product').click()
      }
    }
  })

  it('Read product ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('product-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()

    cy.get('#link-products').click()
    for (let i = 0; i < 3; i++) {
      cy.wait(1000)
      cy.get('#details-' + i).click()
      cy.wait(1000)
      cy.get('#label-name').should('have.text', 'NOME: ')
      cy.get('#value-name').should('have.text', 'Product ' + (i + 1))
      cy.get('#label-description').should('have.text', 'DESCRIÇÃO: ')
      cy.get('#value-description').should('have.text', 'Description of Product ' + (i + 1))

      if (i != 3) {
        cy.get('#close-modal-details').click()
      }
    }

  })

  it('Update product ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('product-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()
    cy.get('#link-products').click()
    cy.wait(1000)
    cy.get('#edit-2').click()
    cy.wait(1000)
    cy.get('#input-name').clear().type('Product Updated')
    cy.get('#button-success-save-edit-product').click()
    cy.get('#confirm-text-edit').should('have.text', 'Deseja editar as informações?')
    cy.get('#confirm-text-yes').click()
    cy.get('#confirm-text-save').should('have.text', 'Editado com sucesso!')
    cy.get('#confirm-text-ok').click()
    cy.wait(1000)
    cy.get('#details-2').click()
    cy.get('#label-name').should('have.text', 'NOME: ')
    cy.get('#value-name').should('have.text', 'Product Updated')
    cy.get('#close-modal-details').click()
  })

  it('Delete product ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('product-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()

    cy.get('#link-products').click()
    for (let i = 0; i < 2; i++) {
      cy.wait(1000)
      cy.get('#delete-0').click()
      cy.wait(1000)
      cy.get('#confirm-text-delete').should('have.text', 'Você tem certeza que quer apagar esta informação?')
      cy.get('#confirm-text-yes').click()
      cy.get('#confirm-text-delete').should('have.text', 'Informação deletada com sucesso!')
      cy.get('#confirm-text-ok').click()
    }
  })

})