beforeEach(() => {
    cy.visit('http://localhost:3000/')
});

describe('Main  index user flow', () => {

it('Should be able visit the page and render Nav bar with correct name and home button', () => {
    cy.get('nav')
    cy.get('h3').contains('Rancid Tomatillos')
    cy.get('button').contains('Home')
})

// it('Should be able click a button to get back main page', () => {
   // we should be able to test button click
   // what event/type button holds and where it takes us back 
// })

 
})