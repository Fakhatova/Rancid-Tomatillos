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
    cy.get('.App > :nth-child(3)') // third child of the app class component -> MoviList <main>
})
 

it('Should be able to see all featured movies with name, image, ratings and tagline', () => {
    cy.get('.App > :nth-child(3) > :nth-child(1)')// third child of the app class component -> MoviList first child MovirCard
    cy.get('img')
    cy.get('h4')
    cy.get('p')
    cy.get('p').contains('Heres a tagline!')
    // need to find the way add method coontains or should to check value of img/p/h4 dynamicly 
})
})