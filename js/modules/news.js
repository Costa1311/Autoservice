
$(document).ready(function () {
   $('.news__item').on('click', function () {
      $(this).find('.news--active').slideDown(600);
   });
});

