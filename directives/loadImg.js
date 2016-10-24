app.directive('loadImg', ['$http', function ($http) {
    return {
        restrict: 'A',
        scope: {
            'source': '='
        },
        link: function (scope, elem, attr) {
          scope.$watch('source', function (value) {
              if (value) {
              	$http.get(value, {
									responseType: 'arraybuffer',
									headers: {
							      'accept': 'image/webp,image/*,*/*;q=0.8'
									}
								}).then(function (response) {
									var arrayBufferView = new Uint8Array( response.data );
							    var blobImg = new Blob( [ arrayBufferView ], { type: response.headers('Content-Type') } );
							    var urlCreator = window.URL || window.webkitURL;
							    var imageUrl = urlCreator.createObjectURL( blobImg );
							    elem.attr('src', imageUrl);
								});
              }
          });
        }
    };
}]);