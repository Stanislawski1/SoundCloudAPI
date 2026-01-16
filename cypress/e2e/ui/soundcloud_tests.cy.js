import trackPage from '../../pages/TrackPage';
import soundCloudClient from '../../api/SoundCloudClient';

describe('SoundCloud Authenticated Flow', () => {
    let trackData;

    before(() => {
        cy.loginViaCookie();
        soundCloudClient.searchTracks('Hard techno', 1).then(res => {
            trackData = res.body.collection[0];
        });
    });

    it('should open track and verify play status', () => {
        trackPage.navigate(trackData.permalink_url);
        trackPage.checkTitle(trackData.title);
        trackPage.play();
    });

    it('should open track and add to favorite', () => {
        trackPage.navigate(trackData.permalink_url)
        trackPage.checkTitle(trackData.title)
        trackPage.play()
        trackPage.addToFavorite()
    });
});