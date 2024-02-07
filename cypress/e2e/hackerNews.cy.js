describe('navigate', () => {
  it('to the newest posts', () => {
    cy.visit('/')
    cy.get('[href="newest"]').click()
    cy.url().should('eq', 'https://news.ycombinator.com/newest')
  })

  it('to the newest comments', () => {
    cy.visit('/')
    cy.get('[href="newcomments').click()
    cy.url().should('eq', 'https://news.ycombinator.com/newcomments')
  })

  it('to the newest ask posts', () => {
    cy.visit('/')
    cy.get('[href="ask').click()
    cy.url().should('eq', 'https://news.ycombinator.com/ask')
  })

  it('to the newest show posts', () => {
    cy.visit('/')
    cy.get('[href="show').click()
    cy.url().should('eq', 'https://news.ycombinator.com/show')
  })

  it('to the newest jobs', () => {
    cy.visit('/')
    cy.get('[href="jobs').click()
    cy.url().should('eq', 'https://news.ycombinator.com/jobs')
  })
})

describe('authentication', () => {
  it('lets you login', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.url().should('eq', 'https://news.ycombinator.com/login')
    cy.get(':nth-child(4) > table > tbody > :nth-child(1) > :nth-child(2) > input').type(Cypress.env('username'))
    cy.get(':nth-child(4) > table > tbody > :nth-child(2) > :nth-child(2) > input').type(Cypress.env('password'))
    cy.get(':nth-child(4) > [type="submit"]').click()
  })
})