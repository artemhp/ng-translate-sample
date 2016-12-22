angular.module('myApp', ['pascalprecht.translate', 'ui.bootstrap'])
    .config(function ($translateProvider) {
        $translateProvider
            .translations('en', {
                'TITLE': {
                    'SUBSCRIBE': 'Join 1000 other subscribers today.',
                    'WELCOME': 'Welcome'
                },
                'BUTTON': {
                    'SUBSCRIBE': 'Subscribe'
                }
            })
            .translations('de', {
                'TITLE': {
                    'SUBSCRIBE': 'Heute 1000 anderen Abonnenten beitreten.',
                    'WELCOME': 'Willkommen'
                },
                'BUTTON': {
                    'SUBSCRIBE': 'Abonnieren'
                }
            });
        $translateProvider.preferredLanguage('en');
    });

angular.module('myApp').controller('LangControls', LangControls);
function LangControls($translate ) {
    var vm = this;
    vm.changeLanguage = changeLanguage;
    vm.currentLang = $translate.use();
    function changeLanguage(langKey) {
        $translate.use(langKey);
        vm.currentLang = $translate.use();
    }
}