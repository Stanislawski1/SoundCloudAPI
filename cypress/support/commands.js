Cypress.Commands.add('loginViaCookie', () => {
    const token = Cypress.env('soundcloudAuthToken');
    cy.setCookie('oauth_token', token, {
        domain: '.soundcloud.com',
        path: '/',
        secure: true,
        sameSite: 'no_restriction'
    });
});