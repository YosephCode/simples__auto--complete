/*CONTROLLERS ANGULAR*/
app.controller('peopleController', ['$scope','$http', function($scope, $http){	

	$http.get('js/config/people.json').success (function(data){
		$scope.people = angular.fromJson(data.peopleJson);
		console.log($scope.people);
	});

	$scope.setState = function(name){
		$scope.template = 'js/templates/'+ name +'.html';
		if(name === 'new-client'){
			$scope.searching="";
		}
	}
	$scope.add = function(person){
		$scope.people.push(person);
		delete $scope.person;
	}
	$scope.take = function (autocomplete){
	    $scope.searching = autocomplete;
	    
	};
}]);
