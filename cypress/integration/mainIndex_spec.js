beforeEach(() => {
    cy.visit('http://localhost:3000/')
});

describe('Main index user flow', () => {

it('Should be able visit the page and render Nav bar with correct name and home button', () => {
    cy.get('nav')
    cy.get('h3').contains('Rancid Tomatillos')
    cy.get('button').contains('Home')
})

// it('Should be able click a button to get back main page', () => {
   // we should be able to test button click
   // what event/type button holds and where it takes us back 
// })

it('Should be able to see list of movies on dashboard', () => {
    cy.get('h1').contains('Rancid Tomatillos')
    // it looks like we are repeating name of the application twice 👆🏽
    // maybe we can change naming of this h1 into Movies ? List of Movies? Featured Movies?
    
})
 
})