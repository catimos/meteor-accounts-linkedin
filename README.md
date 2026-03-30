meteor-accounts-linkedin
============================

A meteor package for LinkedIn's login service.

### Important
BREAKING CHANGE Sign In with LinkedIn using OpenID Connect

v6.0.0 works with Meteor@1.10.2 & not tested with higher versions of meteor.

From January 10, 2023 Sign In with LinkedIn v2 - OpenID Connect Authentication [Docs](https://www.linkedin.com/developers/news/featured-updates/openid-connect-authentication)

Install
-----------
```
meteor add catimos:accounts-linkedin
```

Usage
-----------

Core principles are the same as native Meteor external services login, all available params are in [meteor documentation](https://docs.meteor.com/api/accounts.html#Meteor-loginWith<ExternalService>). So if you using `{{> loginButtons}}`, it will just appear in the selection.

For custom usage, available functions in **Client**:

    login: ``Meteor.loginWithLinkedin([options], [callback])``
    credential request:``Meteor.requestCredential([options], [callback])``

If you are not using any other external login service, you need to `metoer add service-configuration`, otherwise just config it in server folder:

```js
ServiceConfiguration.configurations.upsert(
  { service: 'linkedin' },
  {
    $set: {
      clientId: "XXXXXXX", // Client ID
      secret: "XXXXXXX" // Client Secret
    }
  }
);
```

The **OpenID** scope openid is required to get the ID Token. The new scopes introduced are profile and email
[Docs](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2)

**API Request to retreive member details**
```js
HTTP GET https://api.linkedin.com/v2/userinfo
Authorization: Bearer <access token>
```


**Sample API Response**

JSON

```js
    {
    "sub": "782bbtaQ",
    "name": "John Doe",
    "given_name": "John",
    "family_name": "Doe",
    "picture": "https://media.licdn-ei.com/dms/image/C5F03AQHqK8v7tB1HCQ/profile-displayphoto-shrink_100_100/0/",
    "locale": "en-US",
    "email": "doe@email.com",
    "email_verified": true
  }
```

If you want during login process to ask for more fields, you need to pass requestPermissions to options.
To change popup options:
```js
popupOptions = { width: XXX, height: XXX }
```

More info [Linkedin API](https://docs.microsoft.com/en-us/linkedin/consumer/)

License
-----------
[MIT](https://github.com/PauliBuccini/meteor-accounts-linkedin/blob/master/LICENSE)
