var portfolioView = {};

portfolioView.renderIndexPage = function() {
  Project.projects.map(function(a){
    return $('#lower-content').append(a.toHtml());
  });
};

Project.fetchAll();
