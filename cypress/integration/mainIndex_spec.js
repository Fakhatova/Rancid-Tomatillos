beforeEach(() => {
    cy.visit('http://localhost:3000/')
});

describe('Main  index user flow', () => {

it('Should be able visit the page and render Nav bar with correct name and home button', () => {
    cy.get('nav')
    cy.get('h3').contains('Rancid Tomatillos')
    cy.get('button').contains('Home')
})
})