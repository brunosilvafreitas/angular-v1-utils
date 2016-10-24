app.directive('horizontalBarGraphic', function () {
    return {
        restrict: 'A',
        scope: {
            'progress': '='
        },
        link: function (scope, elem, attr) {
            scope.$watch('progress', function (value) {
                if (value) {
                    $(elem).animate({
                        width: scope.progress + "%"
                    }, 2000, "linear");
                }
            });
        }
    };
});