
describe('Movie Description', () => {
    it('Should took to a new page with movie details on image click', () => {
        cy.visit('http://localhost:3000/694919')
    })

    it('Should see description of the movie', () => {
        cy.visit('http://localhost:3000/694919')
        cy.get('.movie-details')
        cy.get('.overal-stats')
        cy.get('.movie-image').invoke('attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        cy.get('.movie-title').contains('Money Plane')
        cy.get('.movie-ratings').contains(6)
        cy.get('.movie-revenue').contains(0)
        cy.get('.movie-runtime').contains('82 minutes')
        cy.get('.genres').contains('Action')
        cy.get('.movie-release').contains('2020-09-29')
    })
    it('Should take back to home page if home link is clicked', () => {
        cy.visit('http://localhost:3000/337401')
        cy.get('.home').click()
        cy.url().should('include', '/')
    })
})