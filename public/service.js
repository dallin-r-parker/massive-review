angular.module('app').service('service', function ($http) {
    this.createUser = (user) => {
      return $http({
        url:'/api/new-user',
        method: 'POST',
        data: user
      }).then(res => {
        return res.data;
      })
    }
})
