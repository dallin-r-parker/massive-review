angular.module('app').controller('controller', ($scope, service) =>{

      $scope.createUser = (newuser) => {
        service.createUser(newuser).then(response => {
            console.log("THIS IS THE RESPONSE FROM DB AFTER GOING THROUGH THE FRONTEND CTRL, SERVICE, SERVER, SERVER CTRL, DB AND BACK",response);

            $scope.newUser.firstname = '';
            $scope.newUser.lastname = '';
            $scope.newUser.email = '';
            $scope.newUser.password = '';

        })
      }
})
