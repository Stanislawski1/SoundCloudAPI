import soundCloudClient from '../../api/SoundCloudClient';

describe('SoundCloud API: User Data Chaining', () => {

    it('Should find a track and then fetch its creator profile', () => {
        soundCloudClient.searchTracks('Rock', 1).then((searchResponse) => {
            const track = searchResponse.body.collection[0];
            const userId = track.user.id;
            const username = track.user.username;

            cy.log(`Found track by: ${username} (ID: ${userId})`);

            soundCloudClient.getUser(userId).then((userResponse) => {
                expect(userResponse.status).to.eq(200);

                expect(userResponse.body.id).to.eq(userId);
                expect(userResponse.body.username).to.eq(username);

                expect(userResponse.body).to.have.property('description');
                cy.log(`User ${username} has ${userResponse.body.followers_count} followers`);
            });
        });
    });

});