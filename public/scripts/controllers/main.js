'use strict';

angular.module('contactListApp')
    .controller('mainCtrl', function($scope, dataService) {

        $scope.toggleEdit = function() {
            $scope.editing = !$scope.editing;
        };

        $scope.addContact = function() {
            var contact = {type:'change this',name: "Enter a name",title:"Chief",phone:"000 000-0000",fax:"000 000-0000", email:"you@some.com"};
            $scope.contacts.unshift(contact);
        };

        $scope.indicateClick = function(){
            console.log('we clicked');
        };

        dataService.getContacts(function(response) {
            console.log(response.data);
            $scope.contacts = response.data;
        });

        $scope.deleteContact = function(contact, $index) {
            console.log('delete function - ' + $index);
            dataService.deleteContacts(contact);
            $scope.contacts.splice($index, 1);
        };

        $scope.saveContacts = function(contact, $index) {
            var filteredContacts = $scope.contacts.filter(function(contact) {
                if(contact.edited) {
                    return contact;
                };
            });
            if(filteredContacts.length < 1) {
             console.log('exit the function, there is nothing to save');
             return false;   
            }
            dataService.saveContact($scope,filteredContacts);
        };
    })
