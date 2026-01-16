class BasePage {
    /**
     *
     * @param {string} path
     */
    navigate(path = '') {
        cy.visit(path);
        cy.get('.onetrust-pc-dark-filter', { timeout: 10000 }).invoke('remove');
        cy.get('#onetrust-banner-sdk').invoke('remove');
    }

    getPageTitle() {
        return cy.title();
    }

    waitForLoaderToDisappear() {
        cy.get('.loadingIndicator').should('not.exist');
    }

    clickElement(element) {
        element.should('be.visible').click();
        cy.log(`Clicked on element`);
    }

    verifyUrlContains(text) {
        cy.url().should('contain', text);
    }
}

export default BasePage;