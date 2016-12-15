

(function (module) {
  var aboutController = {};

  aboutController.displayAbout = function() {
    $('.content').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
