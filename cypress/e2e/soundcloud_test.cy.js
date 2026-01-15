import soundCloudClient from '../api/SoundCloudClient';
import { trackSchema } from '../fixtures/schemas/trackShema';
import Ajv from 'ajv';

const ajv = new Ajv();
describe('SoundCloud API: Advanced Validation', () => {

    it('Should validate full JSON schema for all found tracks', () => {
        soundCloudClient.searchTracks('Radiohead Let down', 5).then((response) => {
            expect(response.status).to.eq(200);

            const tracks = response.body.collection;
            const validate = ajv.compile(trackSchema);

            tracks.forEach((track) => {
                const isValid = validate(track);

                if (!isValid) {
                    cy.log('Ошибки схемы:', validate.errors);
                }

                expect(isValid, `Трек "${track.title}" должен соответствовать схеме JSON`).to.be.true;
            });
        });
    });

});