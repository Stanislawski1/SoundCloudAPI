import BasePage from './base/BasePage';

class TrackPage extends BasePage {

    get playButton() { return cy.get('.sc-button-play').first(); }
    get trackTitle() { return cy.get('h1.soundTitle__title'); }
    get favoriteButton(){return cy.get('.listenEngagement__footer > .soundActions > .sc-button-group > .sc-button-like')}

    play() {
        this.playButton.should('be.visible').click();
        cy.log('User clicked Play button');
    }

    checkTitle(expectedTitle) {
        this.trackTitle.should('be.visible').and('contain', expectedTitle);
    }

    addToFavorite() {
        this.favoriteButton.click().should('be.selected')
    }
}

export default new TrackPage();