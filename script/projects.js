function Projects(items) {
  for (var keys in items) {
    this[keys] = items[keys];
  }
};

Projects.projects= [];

Projects.prototype.toHtml = function() {
  var $source = $('#portfolio-template').html();
  var templateBuild = Handlebars.compile($source);
  return templateBuild(this);
};
Projects.loadAll = function(input) {
  input.forEach(function(ele) {
    Projects.projects.push(new Projects(ele));
  });
};

Projects.fetchAll = function() {
  if (localStorage.myProjects) {
    Projects.loadAll(JSON.parse(localStorage.getItem('myProjects')));
    portfolioView.renderIndexPage();
  } else {
    $.getJSON('data/myProjects.json', function(data) {
      Projects.loadAll(data);
      localStorage.setItem('myProjects',JSON.stringify(data));
      portfolioView.renderIndexPage();
    });
  }
};

// myProjects.forEach(function(projectObj) {
//   projects.push(new Projects(projectObj));
// });
//
// projects.forEach(function(projectObj) {
//   $('#lower-content').append(projectObj.toHtml());
// });
