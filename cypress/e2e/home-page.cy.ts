context('Homepage tests', () => {
  const BASE_URL = 'https://pokeapi.co/api/v2';

  beforeEach(() => {
    cy.intercept('GET', `${BASE_URL}/pokemon/*`, {
      fixture: 'pokedex-details.json',
    });

    cy.intercept('GET', `${BASE_URL}/pokemon/?limit*`, {
      fixture: 'pokemons-list.json',
    });

    cy.visit('/');
    cy.wait(1000);
    cy.get('[data-cy=pokedex-card]').as('card');
  });

  it('should show error text when data fetch is unsuccessful', () => {
    cy.visit('/');
    cy.intercept('GET', `${BASE_URL}/pokemon/*`, { forceNetworkError: true });
    cy.get('@card').should('not.exist');
    cy.get('body').contains('An Error Ocurred, Refresh Page').should('exist');
  });

  it('should render cards when data fetch is successful', () => {
    cy.get('@card').should('exist');
  });

  it('should render search field and search pokemon by name', () => {
    const text = 'ba';
    cy.get('[data-cy=top-header]').find('input').focus().type(text);
    cy.get('[data-cy=pokedex-name').then(($poke) => {
      cy.wrap($poke).should('contain.text', text);
    });
  });

  it('should route to pokedex details page when a card it clicked', () => {
    cy.get('@card').first().dblclick();
    cy.location('pathname').should('equal', '/pokedex');
  });

  it('should retain searched text when user returns to homepage after routing away', () => {
    const text = 'ba';
    cy.get('[data-cy=top-header]').find('input').focus().type(text);
    cy.get('@card').first().dblclick();
    cy.get('[data-cy=home-link]').dblclick();
    cy.get('[data-cy=top-header]').find('input').should('exist');
  });

  it('should show loader when a pokemon id is searched', () => {
    const text = '05';
    cy.get('[data-cy=top-header]').find('input').focus().type(text);
    cy.get('@card').first().dblclick();
    cy.get('[data-cy=loader]').should('exist');
    cy.wait(1000);
    cy.get('[data-cy=loader]').should('not.exist');
    cy.get('[data-cy=home-link]').dblclick();
    cy.get('[data-cy=top-header]').find('input').should('exist');
  });

  it('should show no pokemon found text when there is no result from search', () => {
    const text = 'babababababa';
    cy.get('[data-cy=top-header]').find('input').focus().type(text);
    cy.get('@card').should('not.exist');
    cy.get('[data-cy=error-card]').should('exist');
  });

  it('should disable previous and next when there are less than 9 cards', () => {
    cy.visit('/');
    cy.intercept('GET', `${BASE_URL}/pokemon/?limit*`, {
      fixture: '8-items-in-pokemons-list.json',
    });
    cy.get('[data-cy=pagination')
      .get('button')
      .then(($btn) => {
        cy.wrap($btn).should('be.disabled');
      });
  });

  it('should enable previous button when next button is clicked', () => {
    cy.get('[data-cy=next]').dblclick();
    cy.get('[data-cy=previous]').should('not.be.disabled');
  });
});
