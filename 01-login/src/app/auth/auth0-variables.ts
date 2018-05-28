interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '42GcF7lht2vxvLTj5UzaJldhPLiSp2UE',
  domain: 'kolombo.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
