(function(module) {

  function Project(items) {
    for (var keys in items) {
      this[keys] = items[keys];
    }
  };

  Project.projects= [];

  Project.prototype.toHtml = function() {
    var $source = $('#portfolio-template').html();
    var templateBuild = Handlebars.compile($source);
    return templateBuild(this);
  };
  Project.loadAll = function(input) {
    input.map(function(projectObj) {
      return Project.projects.push(new Project(projectObj));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.myProjects) {
      Project.loadAll(JSON.parse(localStorage.getItem('myProjects')));
      console.log(localStorage.getItem('myProjects'));
      portfolioView.renderIndexPage();
    } else {
      $.getJSON('data/myProjects.json', function(data) {
        Project.loadAll(data);
        localStorage.setItem('myProjects',JSON.stringify(data));
        portfolioView.renderIndexPage();
      });
    }
  };
  module.Project = Project;
})(window);

// myProjects.forEach(function(projectObj) {
//   projects.push(new Projects(projectObj));
// });
//
// projects.forEach(function(projectObj) {
//   $('#lower-content').append(projectObj.toHtml());
// });
