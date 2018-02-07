angular
  .module('limejump')
  .controller('companyIndexCtrl', companyIndexCtrl)
  .controller('companyEditCtrl', companyEditCtrl);

companyIndexCtrl.$inject = ['Company'];
function companyIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();
}

companyEditCtrl.$inject = ['Company', '$stateParams', '$state'];
function companyEditCtrl(Company, $stateParams, $state) {
  const vm = this;
  vm.company = Company.get($stateParams);

  function update() {
    vm.company
      .$update()
      .then(() => $state.go('part1', $stateParams ));
  }

  vm.update = update;
}
