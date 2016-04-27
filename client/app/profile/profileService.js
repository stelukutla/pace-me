'use strict';

var app = angular.module('paceMeApp');

app.service('ProfileService', function($http) {
  this.notifyUser = (msg) => {
    // console.log(msg);
    return $http.post('/messages/new', msg)
  }

  this.getProfile = (email) => {
    return $http.get(`/users/${email}`)
  }

  this.editProfile = (user) => {
    return $http.put(`/users/${email}`, user)
  }

})
