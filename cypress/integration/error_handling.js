describe('Error Status', () => {
    it('Should display error message if page is not found', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404
      })
      cy.visit('http://localhost:3000/')
    //   cy.get('.App > :nth-child(4)')
      cy.get('.App > p')
      .contains('Please wait loading ...')
    })
})

// cy.get('.App > :nth-child(3)')
// cy.get('.App > :nth-child(4)')