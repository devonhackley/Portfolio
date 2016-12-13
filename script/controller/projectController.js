

(function (module) {
  var projectController = {};

  projectController.displayProject = function() {
    $('.content').hide();
    $('#portfolio').show();
  };
  module.projectController = projectController;
})(window);
