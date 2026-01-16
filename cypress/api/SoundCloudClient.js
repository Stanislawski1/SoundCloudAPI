class SoundCloudClient {
    constructor() {
        this.clientId = Cypress.env('soundcloudClientId');
    }

    sendRequest(method, url) {
        const separator = url.includes('?') ? '&' : '?';
        const fullUrl = `${url}${separator}client_id=${this.clientId}`;

        return cy.request({
            method: method,
            url: fullUrl,
            failOnStatusCode: false
        });
    }

    searchTracks(query, limit = 5) {
        return this.sendRequest('GET', `/search/tracks?q=${encodeURIComponent(query)}&limit=${limit}`);
    }

    getUser(userId) {
        return this.sendRequest('GET', `/users/${userId}`);
    }

    loginViaApi(email, password) {
        return cy.request({
            method: 'POST',
            url: 'https://api.soundcloud.com/oauth2/token',
            body: {
                grant_type: 'password',
                client_id: this.clientId,
                username: email,
                password: password,
                scope: 'non-expiring'
            }
        }).then((response) => {

            Cypress.env('token', response.body.access_token);
            cy.setCookie('oauth_token', response.body.access_token);
        });
    }
}

export default new SoundCloudClient();