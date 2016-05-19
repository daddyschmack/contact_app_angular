angular.module('contactListApp')
    .directive('contacts', function() {
        return {
            templateUrl: 'templates/contacts.html',
            controller: 'mainCtrl',
            replace: true
        }
    })
