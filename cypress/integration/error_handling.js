describe('Error Status', () => {
    it('Should display error message if page is not found', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404
      })
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies'), {
        statusCode: 500
      }
      cy.visit('http://localhost:3000/')
      cy.get('.error').contains('Something went wrong, please try again!')
      cy.get('.loading').contains('Please wait loading ...')

    })
    it('Should display error message when on card click page is not found', () => {
      cy.visit('http://localhost:3000/potato')
      cy.get('.description-error').contains('404 Page not found')
    })
})
