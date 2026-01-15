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
            failOnStatusCode: false // Чтобы мы могли сами обработать ошибку 401
        });
    }

    searchTracks(query, limit = 5) {
        return this.sendRequest('GET', `/search/tracks?q=${encodeURIComponent(query)}&limit=${limit}`);
    }

    getUser(userId) {
        return this.sendRequest('GET', `/users/${userId}`);
    }
}

export default new SoundCloudClient();