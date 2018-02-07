angular
  .module('limejump')
  .factory('Company', Company);

Company.$inject = [
  '$resource',
  'API'
];
function Company(
  $resource,
  API){
  return $resource(`${API}/part1/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
