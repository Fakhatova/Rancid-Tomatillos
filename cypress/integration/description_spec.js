describe('Movie Description', () => {
    it('Should show new page with movie details', () => {
        cy.visit('http://localhost:3000/337401')
        cy.get('.movie-details')
        cy.get('.movie-image').invoke('attr', 'src').should('not.be.empty')
    })
})