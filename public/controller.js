angular.module('app').controller('controller', ($scope, service) =>{

      $scope.createUser = (newuser) => {
        service.createUser(newuser).then(response => {
            console.log(response);
        })
      }
})
