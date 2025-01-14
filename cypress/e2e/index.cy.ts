describe('@storyblok/svelte', () => {
  describe('Bridge', () => {
    it('Is loaded by default', () => {
      cy.visit('http://localhost:5173/?_storyblok_tk[timestamp]=1677494658');
      cy.get('#storyblok-javascript-bridge').should('exist');
    });
  });

  describe('Rendering Components', () => {
    it('The teaser blok is correctly rendered', () => {
      cy.visit('http://localhost:5173/');
      cy.get('[data-blok-uid="141210018-97a0e33f-1e0b-4561-8193-4839a9f85cae"]').should('exist');
    });
  });
});
