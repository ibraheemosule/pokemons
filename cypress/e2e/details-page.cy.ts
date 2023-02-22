context('Details Page tests', () => {
  const BASE_URL = 'https://pokeapi.co/api/v2';

  beforeEach(() => {
    cy.intercept('GET', `${BASE_URL}/pokemon/*`, {
      fixture: 'pokedex-details.json',
    }).as('getPokemonsList');

    cy.intercept('GET', `${BASE_URL}/pokemon/?limit*`, {
      fixture: 'pokemons-list.json',
    }).as('getPokemonsList');

    cy.intercept('GET', `${BASE_URL}/pokemon-species/*`, {
      fixture: 'pokemon-species-response.json',
    });

    cy.intercept('GET', `${BASE_URL}/evolution-chain/*`, {
      fixture: 'evolution-chain.json',
    });

    cy.visit('/');
    cy.wait(1000);
    cy.get('[data-cy=pokedex-card]').first().dblclick();
  });

  it('should route to home page if user visits /pokedex directly', () => {
    cy.visit('/pokedex');
    cy.location('pathname').should('equal', '/');
  });

  it('should render image', () => {
    cy.get('[data-cy=pokedex-image]').should('exist');
  });

  it('A clicked mini image should have the same src as the main image', () => {
    cy.get('[data-cy=pokedex-image]').as('mainImage');

    cy.get('[data-cy=mini-image]').each(($img) => {
      cy.wrap($img).click();
      cy.wrap($img)
        .should('have.attr', 'src')
        .then((src1) => {
          cy.get('@mainImage')
            .should('have.attr', 'src')
            .then((src2) => {
              expect(src1).to.equal(src2);
            });
        });
    });
  });

  it('should render the Moves component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('moves').click();
    cy.get('[data-cy=moves]').should('exist');
  });

  it('should render the HeldItems component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('held items').click();
    cy.get('[data-cy=held-items]').should('exist');
  });

  it('should render the Stats component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('stats').click();
    cy.get('[data-cy=stats]').should('exist');
  });

  it('should render the Abilities component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('abilities').click();
    cy.get('[data-cy=abilities]').should('exist');
  });

  it('should render the Game Indices component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('indices').click();
    cy.get('[data-cy=indices]').should('exist');
  });

  it('should render the Evolutions component when clicked on the navbar', () => {
    cy.get('[data-cy=nav]').contains('evolutions').click();
    cy.get('[data-cy=evolutions]').should('exist');
  });

  it('should render loader in evolutions section when fetching evolutions', () => {
    cy.get('[data-cy=nav]').contains('evolutions').click();
    cy.get('[data-cy=loader]').should('exist');
  });

  it('should show no evolutions found message if no evolutions was found', () => {
    cy.intercept('GET', `${BASE_URL}/evolution-chain/*`, {
      forceNetworkError: true,
    });
    cy.get('[data-cy=nav]').contains('evolutions').click();
    cy.get('[data-cy=evolutions]').should(
      'contain.text',
      'could not fetch evolutions data'
    );
  });
});
