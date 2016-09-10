angular.module('myApp', [])
  .controller('AppController', ['$scope', function($scope) {
    var self = this;
    self.user = {id: null, username: '', address: '', email: ''};
    self.id = 5;

    self.users = [
      {id: 1, username: 'Charlie', address: 'CA', email: 'charlie@email.com'},
      {id: 2, username: 'Lucy', address: 'CO', email: 'lucy@email.com'},
      {id: 3, username: 'Schroeder', address: 'WA', email: 'shroeder@email.com'},
      {id: 4, username: 'Snoopy', address: 'OR', email: 'snoopy@email.com'}
    ];

    self.submit = function() {
      if(self.user.id === null) {
        self.user.id = self.id++;
        console.log("Saving New User", self.user);
        self.users.push(self.user);
      } else {
        for(var i = 0; i < self.users.length; i++) {
          if(self.users[i].id === self.user.id) {
            self.users[i] = self.user;
          }
        }
        console.log('User updated with id', self.user.id);
      }
      self.reset();
    };

    self.edit = function(id) {
      console.log('id to be edited', id);
      for(var i = 0; i < self.users.length; i++) {
        if(self.users[i].id === id) {
          self.user = angular.copy(self.users[i]);
          break;
        }
      }
    };

    self.remove = function(id) {
      console.log('id to be deleted', id);
      for(var i = 0; i < self.users.length; i++) {
        if(self.users[i].id === id) {
          self.users.splice(i, 1);
          if(self.user.id === id) {
            self.reset();
          }
          break;
        }
      }
    };

    self.reset = function() {
      self.user = {id: null, username: '', address: '', email: ''};
      $scope.myForm.$setPristine();
    };
  }]);
