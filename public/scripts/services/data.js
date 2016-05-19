'use strict';

angular.module('contactListApp')
    .service('dataService', function($http) {

        this.getContacts = function(callback){
            $http.get('mocks/contacts.json')
                .then(callback)
        };

        this.deleteContacts = function(contact) {
            console.log("The " + contact.name + " contact has been deleted!")
            // other logic
        };

        this.saveContact = function($scope,contacts) {
            console.log("this is ", this)
            console.log(contacts.length + " contacts have been saved!-");
            $scope.contacts.push(
            {
                "type" :contacts.type,
                "name" : contacts.name,
                "title":contacts.title,
                "phone":contacts.phone,
                "ext": contacts.ext,
                "fax": contacts.fax,
                "email": contacts.email
            });
        };

    });
