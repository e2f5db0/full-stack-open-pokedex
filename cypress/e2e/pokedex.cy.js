/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('particular pokemon can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.get('a[id=41]').click()
    cy.contains('infiltrator')
  })
})