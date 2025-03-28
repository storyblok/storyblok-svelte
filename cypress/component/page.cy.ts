/**
  Cypress is not working well with Svelte 5, so for now no StoryblokComponent tests are available.
  @todo Fix Cypress to work with Svelte 5
 */
describe('Basic Test', () => {
  it('can find an element', () => {
    // Create a basic element
    const element = document.createElement('div');
    element.setAttribute('data-test', 'test-div');
    element.textContent = 'Hello Test';
    document.body.appendChild(element);

    // Test if we can find it
    cy.get('[data-test="test-div"]').should('exist');
    cy.get('[data-test="test-div"]').should('have.text', 'Hello Test');
  });
});
