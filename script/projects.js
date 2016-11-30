var projects = [];

function Projects(item) {
  this.name = item.name;
  this.url = item.url;
  this.info = item.info;
};

Projects.prototype.toHtml = function() {
  var $newProject = $('article.projects').clone();
  $newProject.find('a').text(this.name);
  $newProject.find('a[href]').attr('href',this.url);
  $newProject.find('.project-info').html(this.info);
  $newProject.removeAttr('class');
  return $newProject;
};

myProjects.forEach(function(projectObj) {
  projects.push(new Projects(projectObj));
});

projects.forEach(function(projectObj) {
  $('#lower-content').append(projectObj.toHtml());
});
