app.directive('hourglass', ['$interval', function ($interval) {
    return {
        restrict: 'A',
        scope: {
            'source': '=',
            'action': '=',
            'callback': '='
        },
        link: function (scope, elem, attr) {
        	var hourglass;

          elem.on('$destroy', function(){
		        $interval.cancel(hourglass);
            if(scope.callback)
              scope.callback(scope.timeLeft);
		      });

          scope.$watch('source', function (value) {
              if (value) {
              	scope.timeLeft = parseInt(value, 10);
              	if(scope.timeLeft > 0) {
                  hourglass = $interval(
                    function() {
                      scope.timeLeft--;
                      if(scope.callback)
                        scope.callback(scope.timeLeft);
                      if(scope.timeLeft === 0) {
                        $interval.cancel(hourglass);
                        scope.action();
                      }
                    },
                    1000
                  );
                }
              }
          });
        },
        template: "{{timeLeft}}"
    };
}]);