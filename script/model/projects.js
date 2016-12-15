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
      // Project.loadAll(JSON.parse(localStorage.getItem('myProjects')));
      // console.log(localStorage.getItem('myProjects'));
      $.ajax({
        url: 'data/myProjects.json',
        type: 'HEAD',
        success: function(myProjects, textStatus, jqXHR){
          var etag = jqXHR.getResponseHeader('etag');
          if(localStorage.etag === etag){
            Project.loadAll(JSON.parse(myProjects));
            portfolioView.renderIndexPage();
          } else {
            $.getJSON('data/myProjects.json', function(myProjects, textStatus, jqXHR){
              jqXHR.getResponseHeader('etag');
              Project.loadAll(myProjects);
              localStorage.setItem('myProjects', JSON.stringify(myProjects));
              portfolioView.renderIndexPage();
            });
          }
        }
      });
    } else {
      $.getJSON('data/myProjects.json', function(myProjects, textStatus, jqXHR) {
        jqXHR.getResponseHeader('etag');
        Project.loadAll(myProjects);
        localStorage.setItem('myProjects',JSON.stringify(myProjects));
        portfolioView.renderIndexPage();
      });
    }
  };
  module.Project = Project;
})(window);
