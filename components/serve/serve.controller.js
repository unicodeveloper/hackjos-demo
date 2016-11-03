(function() {

  'use strict';

  angular
    .module('app')
    .controller('serveController', serveController);

    serveController.$inject = ['$scope', '$http'];

    function serveController($scope, $http) {
      $scope.imageUrl = "https://naij-ask.gencdn.com/questions/25187-f49f31-jollof-rice-with-fish-500x303.jpg";
    }

})();