angular
  .module('limejump')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('part1', {
      url: '/part1',
      templateUrl: '/js/views/part1.html',
      controller: 'companyIndexCtrl as part1'
    })
    .state('edit', {
      url: '/part1/:id/edit',
      templateUrl: '/js/views/edit.html',
      controller: 'companyEditCtrl as edit'
    });


  $urlRouterProvider.otherwise('/part1');
}
