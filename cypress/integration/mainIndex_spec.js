beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.fetchData('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2')
});

describe('Main index user flow', () => {

it('Should be able visit the page and render Nav bar with correct name and home button', () => {
    cy.get('nav')
    cy.get('h2').contains('Rancid Tomatillos')
    cy.get('.home').contains('Home')
    cy.url().should('include', '/')
 })

it('Should be able to see list of movies on dashboard', () => {
    cy.get('h1').contains('Featured Movies')
    cy.get('.App > :nth-child(3)') 
 })
 
it('Should be able to see all featured movies with name, image, ratings and tagline', () => {
    cy.get('.App > :nth-child(3) > :nth-child(1)')
    cy.get('img').invoke('attr', 'src').should('not.be.empty')
    cy.get('h3').contains("Money Plane")
    cy.get('p').contains(6.142857142857143)
    cy.get('p').contains('2020-09-29')
 })
})