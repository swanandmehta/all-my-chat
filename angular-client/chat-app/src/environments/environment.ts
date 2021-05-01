export const environment = {
	production: false,
	auth: {
		okta: {
			issuer: "https://dev-67343191.okta.com/oauth2/default",
			clientId: "0oanvuuumCg5FJIdf5d6",
			redirectUri: "http://localhost:4200/auth/callback",
		}
	},
	topic: {
		rest: {
			getAll: "http://localhost:8080/topic",
			create: "http://localhost:8080/topic"
		}
	}

};