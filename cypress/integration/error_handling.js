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
      cy.get('.App > p')
      .contains('Please wait loading ...')

    })

    // we need to check now if end point of router is doesnt exist it should to see a error message
})
