var app = angular.module('register', []);


/*DIRETIVAS ANGULAR*/
app.directive('searchPeople', function(){
	return{
		restrict: 'A',
		templateUrl:function(elem, attrs){ 
			return 'js/templates/search-people.html'
		}
			
	};
});



