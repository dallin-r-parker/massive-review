angular.module('app').service('service', function ($http) {
    this.createUser = (newUser) => {
      return $http({
        url:'/api/new-user',
        method: 'POST',
        data: newUser
      }).then(res => {
        return res.data;
      })
    }
})
