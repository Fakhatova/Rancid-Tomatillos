
describe('Movie Description', () => {
    it('Should took to a new page with movie details on image click', () => {
        cy.visit('http://localhost:3000/337401')
    })

    it('Should see description of the movie', () => {
        cy.visit('http://localhost:3000/337401')
        cy.get('.movie-details')
        cy.get('.movie-image').invoke('attr', 'src').should('not.be.empty')
        cy.get('.movie-title').contains('Mulan')
        cy.get('.movie-ratings').contains(5)
        cy.get('.movie-release').contains('2020-09-04')
    })
    it('Should take back to home page if home link is clicked', () => {
        cy.visit('http://localhost:3000/337401')
        cy.get('.home').click()
        cy.url().should('include', '/')
    })
})