import soundCloudClient from '../api/SoundCloudClient';
import genres from '../fixtures/genres.json';

describe('SoundCloud API: Data Driven Genre Search', () => {

    genres.forEach((genre) => {

        it(`Should verify search results for genre: ${genre}`, () => {
            soundCloudClient.searchTracks(genre, 3).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.collection.length).to.be.at.least(1);

                const firstTrack = response.body.collection[0];
                cy.log(`Genre [${genre}] - Top track: ${firstTrack.title}`);

                expect(firstTrack).to.have.property('id');
            });
        });
    });
});