/// <reference types="cypress" />

describe('Create Account without Google', () => {
  before(() => {
    cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
  })
  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
  })

  it('enter website and create account', () => {

    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#button-commom-register').click()
    cy.get('#input-name').type('Company Of Tests')
    cy.get('#input-email').type('company-tests@gmail.com')
    cy.get('#input-username').type('company-tests')
    cy.get('#input-password-singin').type('1234*Abcd')
    cy.get('#input-passwordConfirmation').type('1234*Abcd')
    cy.get('#button-commom-register-singin').click()
    cy.wait(1000)
    cy.get('#img-user').click()
    cy.get('#logout-system').click()
    cy.get('#cancel-text').click()
    cy.get('#img-user').click()
    cy.get('#logout-system').click()
    cy.get('#confirm-text').click()
    cy.get('#text-logout').should('be.visible')
    cy.get('#text-logout').should('have.text', 'Saindo...')
  })

  it('enter website, create account and return error ', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#button-commom-register').click()
    cy.get('#input-name').type('Company Of Tests')
    cy.get('#input-email').type('company-tests@gmail.com')
    cy.get('#input-username').type('company-tests')
    cy.get('#input-password-singin').type('1234*Abcd')
    cy.get('#input-passwordConfirmation').type('1234*Abcd')
    cy.get('#button-commom-register-singin').click()
    cy.wait(1000)
    cy.get('#error-response').should('have.text', 'Erro do servidor: Já existe uma empresa com este e-mail.')
  })

  it('enter and edit account', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('company-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()

    cy.get('#img-user').click()
    cy.get('#my-account-dropdown').click()
    cy.get('#input-cnpj').type('06135538000190')
    cy.wait(2000)
    cy.get('body').trigger('keydown', { keyCode: 27, which: 27 })
    cy.get('#button-success-save-edit-profile').click()
    cy.get('#message-alert').should('have.text', 'Empresa editada com sucesso')
    cy.get('#confirm-text-ok').click()
    cy.get('#img-user').click()
    cy.get('#logout-system').click()
    cy.get('#confirm-text').click()
    cy.get('#text-logout').should('be.visible')
    cy.get('#text-logout').should('have.text', 'Saindo...')
  })

  it('enter and assert expiration date in this day', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('company-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.wait(1000)
    cy.get('#button-login').click()

    cy.get('#expire-session').should('have.text', `Sua sessão expira no dia ${new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })} às 23:59:00`)
    cy.get('#img-user').click()
    cy.get('#logout-system').click()
    cy.get('#confirm-text').click()
    cy.get('#text-logout').should('be.visible')
    cy.get('#text-logout').should('have.text', 'Saindo...')
  })


  it('enter and assert expiration date in 7 days', () => {
    cy.wait(1000)
    cy.get('#link-login').click()
    cy.get('#input-username').type('company-tests')
    cy.get('#input-password').type('1234*Abcd')
    cy.get('#checkbox-input-remember').click()
    cy.wait(1000)
    cy.get('#button-login').click()


    const nowDate = new Date()

    const dateFuture = new Date(nowDate)
    dateFuture.setDate(nowDate.getDate() + 7)
    const dateFormated = dateFuture.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    dateFuture.setSeconds(dateFuture.getSeconds() + 1)

    cy.get('#expire-session').should(($element) => {
      const fullText = $element.text()
      const expectedText = `Sua sessão expira no dia ${dateFormated}`

      expect(fullText).to.include(`Sua sessão expira no dia ${dateFormated}`)
    }); 
    cy.get('#img-user').click()
    cy.get('#logout-system').click()
    cy.get('#confirm-text').click()
    cy.get('#text-logout').should('be.visible')
    cy.get('#text-logout').should('have.text', 'Saindo...')
  })
})