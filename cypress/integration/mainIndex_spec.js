beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.fetchData('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2')
});

describe('Main index user flow', () => {

it('Should be able visit the page and render Nav bar with correct name and home button', () => {
    cy.get('nav')
    cy.get('h1').contains('Rancid Tomatillos')
    cy.get('.home-icon').invoke('attr', 'src').should('include', "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zOTIgNTExLjk2M2gtMjcyYy02Ni4xNjggMC0xMjAtNTMuODMyLTEyMC0xMjB2LTE2OC4yNzFjMC0zNy4xOTEgMTcuNjU1LTcyLjg2IDQ3LjIyNi05NS40MTVsMTM2LTEwMy43MjljNDIuODQ5LTMyLjY4MSAxMDIuNjk5LTMyLjY4MSAxNDUuNTQ4IDBsNDMuMjI2IDMyLjk0di0yNS41MjVjMS4wNTYtMjYuNTM2IDM4Ljk1My0yNi41MTYgNDAgMHY2NS45MTFjMCA3LjYwMy00LjMxMSAxNC41NDgtMTEuMTI1IDE3LjkyMy02LjgxNCAzLjM3NC0xNC45NTEgMi41OTItMjAuOTk4LTIuMDE1bC03NS4zNTUtNTcuNDIzYy0yOC41NzItMjEuNzkyLTY4LjQ3NC0yMS43OTItOTcuMDM5LS4wMDVsLTEzNiAxMDMuNzI5Yy0xOS43MTMgMTUuMDM1LTMxLjQ4MyAzOC44MTQtMzEuNDgzIDYzLjYwOXYxNjguMjcxYzAgNDQuMTEyIDM1Ljg4OCA4MCA4MCA4MGgyNzJjNDQuMTEyIDAgODAtMzUuODg4IDgwLTgwdi0xNjguMjcxYzAtMjUuMDk5LTExLjYzNy00OC45NTktMzEuMTI5LTYzLjgyNy04Ljc4My02LjY5OS0xMC40NzItMTkuMjQ5LTMuNzczLTI4LjAzMSA2LjY5OS04Ljc4MyAxOS4yNS0xMC40NzIgMjguMDMxLTMuNzczIDI5LjM0OSAyMi4zODQgNDYuODcxIDU4LjEzNCA0Ni44NzEgOTUuNjMxdjE2OC4yNzFjMCA2Ni4xNjgtNTMuODMyIDEyMC0xMjAgMTIwem0tMTc2LTI4MWMtMTMuODA3IDAtMjUgMTEuMTkzLTI1IDI1IDEuMzIxIDMzLjE3IDQ4LjY5MSAzMy4xNDUgNTAgMCAwLTEzLjgwOC0xMS4xOTMtMjUtMjUtMjV6bTEwNSAyNC45OTljLTEuMzIxIDMzLjE3LTQ4LjY5MSAzMy4xNDUtNTAgMCAxLjMyMS0zMy4xNyA0OC42OTEtMzMuMTQ0IDUwIDB6bS04MCA4MGMtMS4zMjEgMzMuMTctNDguNjkxIDMzLjE0NS01MCAwIDEuMzIxLTMzLjE3IDQ4LjY5MS0zMy4xNDQgNTAgMHptODAgMGMtMS4zMjEgMzMuMTctNDguNjkxIDMzLjE0NS01MCAwIDEuMzIxLTMzLjE3IDQ4LjY5MS0zMy4xNDQgNTAgMHoiLz48L3N2Zz4=")
    cy.get('.home').click()
    cy.url().should('include', '/')
 })

it('Should be able to see list of movies on dashboard', () => {
    cy.get('.list-header').contains('Featured Movies')
    cy.get('[href="/694919"] > .movie-card > .movie-image')
 })
 
it('Should be able to see all featured movies with name, image, ratings and tagline', () => {
    cy.get('.list-grid')
    cy.get('.movie-image').invoke('attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    cy.get('h2').contains('Money Plane')
    cy.get('p').contains(6)
    cy.get('p').contains('2020-09-29')
 })
})