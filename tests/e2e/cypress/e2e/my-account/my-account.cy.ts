/// <reference types="cypress" />

describe('Create Account without Google', () => {
  for (let i = 0; i < 2; i++) {

    before(() => {
      cy.exec('mongosh mongodb://localhost:27017 --eval "db.getSiblingDB(\'system-database\').dropDatabase()"')
    })
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('Create account ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
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
      cy.get('#logout-system').click()
      cy.get('#cancel-text').click()
      cy.get('#img-user').click()
      cy.get('#logout-system').click()
      cy.get('#confirm-text').click()
      cy.get('#text-logout').should('be.visible')
      cy.get('#text-logout').should('have.text', 'Saindo...')
      cy.wait(2000)

    })

    it('Create account and return error ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
      }
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

    it('Edit account ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
      }
      cy.get('#input-username').type('company-tests')
      cy.get('#input-password').type('1234*Abcd')
      cy.wait(1000)
      cy.get('#button-login').click()

      cy.get('#img-user').click()
      cy.get('#my-account-dropdown').click()
      if (i == 1) cy.get('#close-sideBar').click()
      cy.get('#input-cnpj').type('06135538000190')
      cy.wait(2000)
      if (i == 0) cy.get('body').trigger('keydown', { keyCode: 27, which: 27 })
      cy.get('#button-success-save-edit-profile').click()
      cy.get('#message-alert').should('have.text', 'Empresa editada com sucesso')
      cy.get('#confirm-text-ok').click()
      cy.get('#img-user').click()
      cy.get('#logout-system').click()
      cy.get('#confirm-text').click()
      cy.get('#text-logout').should('be.visible')
      cy.get('#text-logout').should('have.text', 'Saindo...')
      cy.wait(2000)

    })

    it('Assert expiration date in this day ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
      }
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
      cy.wait(2000)

    })

    it('Assert expiration date in 7 days ' + (i == 0 ? ' - desktop' : ' - mobile'), () => {
      cy.wait(1000)
      if (i == 0) {
        cy.viewport(1920, 1080)
        cy.get('#link-login').click()
      } else {
        cy.viewport(412, 915)
        cy.get('#navbar-toggler').click()
        cy.get('#link-login').click()
        cy.get('#navbar-toggler').click()
      }
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
      })
      cy.get('#img-user').click()
      cy.get('#logout-system').click()
      cy.get('#confirm-text').click()
      cy.get('#text-logout').should('be.visible')
      cy.get('#text-logout').should('have.text', 'Saindo...')
      cy.wait(2000)

    })
  }
})