'use strict';

angular.module('Favor', [])
  .controller('FavController', function ($scope, $log) {

  $scope.items = [
    {
        name:"First Place",
        description: "it's a good place"
    },
    {
        name:"Second Place",
        description: "it's better place"
    },
    {
        name:"Third Place",
        description: "it's the best place"
    }
    ]
})

.directive('favourite', function () {
  console.log('Directive Favourite is ON');
  var directive = {
    restrict: 'E',
    scope: {
        item: '='
    },
    // controller: FavController,
    // controllerAs: 'favctrl',
    template:
    [
        '<section class="favourite">',
        '<h4>{{ item.name }}</h4>',
        '<p>{{ item.description }}</p>',
        '</section>'
      ].join('')
  };
  return directive;
});


