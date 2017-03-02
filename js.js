$(document).ready(function () {
  $('.asdh-center_image_inside_me').each(function () {
    asdhCenterImageInsideMe($(this));
  });
});

function asdhCenterImageInsideMe($imageContainer) {
  var $image                  = $imageContainer.children('img');
  var containerHeight         = $imageContainer.height();
  var imageHeight             = $image.height();
  var imageWidth              = $image.width();
  var heightDifference        = containerHeight - imageHeight;
  var newImageWidthPercentage = 100;

  if (containerHeight > imageHeight) {
    var fractionalChange    = heightDifference / imageHeight;
    newImageWidthPercentage = 100 + fractionalChange * 100;
    $image.css({
      width: newImageWidthPercentage + '%',
      left : -( fractionalChange * imageWidth / 2 )
    });
  } else if (containerHeight < imageHeight) {
    $image.css({
      top : heightDifference / 2,
      left: 0
    });
  } else {
    $image.css({
      top : 0,
      left: 0
    });
  }
}