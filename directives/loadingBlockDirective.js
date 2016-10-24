app.directive('loadingBlock', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            'source': '='
        },
        template: '<div ng-show="!source" class="loading-block"><i class="uk-icon-spinner uk-icon-spin"></i></div><div ng-show="source" ng-transclude></div>',
        link: function (scope, elem, attr) {
            elem.addClass("ng-show");
        }
    };
});