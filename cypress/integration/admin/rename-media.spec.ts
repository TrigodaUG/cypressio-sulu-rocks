import {adminPage, loginPage} from '../../support/pages';

describe('Change media name', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.intercept('/admin/login').as('login');
    loginPage.doLoginAsAdmin();
    cy.wait('@login');
    cy.getCookie('SULUSESSID').should('exist');
  });

  it('Navigate to media page, find media name field and set new name', () => {
    adminPage.visit('/admin/#/collections/en');
    cy.get('[aria-label="su-pen"]').first().click();
    cy.get('#\\/title').click().clear().type('Wolfsrudel.jpg').clear().type('Wolf.jpg');
    cy.get('.su-save').click();
  });
  
});
