angular.module('myApp', ['pascalprecht.translate', 'ui.bootstrap'])
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            WELCOME: 'Hey. Welcome to the app!',
            SUBSCRIPTION: 'Today, our product have already signed {{count}} people'
        })
            .translations('de', {
                WELCOME: 'Hallo. Willkommen in der App',
                SUBSCRIPTION: 'Heute haben unser Produkt bereits unterzeichnet {{count}} Personen'
            });
        $translateProvider.preferredLanguage('en');
    });