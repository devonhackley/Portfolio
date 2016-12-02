var projects = [];

function Projects(item) {
  this.name = item.name;
  this.url = item.url;
  this.info = item.info;
};

Projects.prototype.toHtml = function() {
  var $source = $('#portfolio-template').html();
  var templateBuild = Handlebars.compile($source);
  return templateBuild(this);
};

myProjects.forEach(function(projectObj) {
  projects.push(new Projects(projectObj));
});

projects.forEach(function(projectObj) {
  $('#lower-content').append(projectObj.toHtml());
});
